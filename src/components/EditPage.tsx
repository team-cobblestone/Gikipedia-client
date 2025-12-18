'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { toast } from 'react-hot-toast';

import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase/client';

interface EditPageProps {
  id: string;
  type: 'accident' | 'club' | 'student' | 'teacher';
}

const EditPage = ({ id, type }: EditPageProps) => {
  const { user } = useAuth();
  const router = useRouter();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let tableName: 'accidents' | 'clubs' | 'students' | 'teachers' = 'accidents'; // Default
      let titleField = 'title';

      if (type === 'accident') {
        tableName = 'accidents';
        titleField = 'title';
      } else if (type === 'club') {
        tableName = 'clubs';
        titleField = 'name';
      } else if (type === 'student') {
        tableName = 'students';
        titleField = 'name';
      } else if (type === 'teacher') {
        tableName = 'teachers';
        titleField = 'name';
      }

      // Dynamic table access
      const { data, error } = (await supabase
        .from(tableName)
        .select(`*, ${titleField}`)
        .eq('id', id)
        .single()) as any;

      if (error) {
        toast.error('문서를 불러오는데 실패했습니다.');
        router.push(`/${type}/${id}`);
        return;
      }

      // dynamic key access
      setTitle(data[titleField]);
      setContent(data.content || '');
      setIsLoading(false);
    };

    fetchData();
  }, [id, type, router]);

  // Fetch latest version for proper versioning
  const getNextVersion = async () => {
    const { count } = await supabase
      .from('document_revisions')
      .select('*', { count: 'exact', head: true })
      .eq('document_id', id);
    return (count || 0) + 1;
    // Note: If we need max version, we should query max(revision_number).
    // But count is a reasonable approximation if rows aren't deleted.
  };

  const handleRefinedSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast.error('로그인이 필요합니다.');
      return;
    }
    setIsSaving(true);

    try {
      const nextVersion = await getNextVersion();
      let tableName: 'accidents' | 'clubs' | 'students' | 'teachers' = 'accidents';
      if (type === 'accident') tableName = 'accidents';
      else if (type === 'club') tableName = 'clubs';
      else if (type === 'student') tableName = 'students';
      else if (type === 'teacher') tableName = 'teachers';

      // Dynamic table name
      const { error: updateError } = await supabase
        .from(tableName)
        .update({ content: content })
        .eq('id', id);
      if (updateError) throw updateError;

      // Mismatch between generated types and actual DB schema
      const { error: revisionError } = await supabase.from('document_revisions').insert({
        document_id: id,
        title: title,
        content: content,
        change_summary: summary,
        revision_number: nextVersion,
        created_by: user.user_metadata.full_name || user.email?.split('@')[0] || 'Unknown',
      } as any);

      if (revisionError) {
        console.error('Revision insert failed:', revisionError);
        toast.error(`수정 내역 저장 실패: ${revisionError.message}`);
        // Should we stop? Maybe not, main content updated.
      }

      toast.success('수정되었습니다!');
      router.push(`/${type}/${id}`);
      router.refresh();
    } catch (err) {
      console.error(err);
      toast.error('오류가 발생했습니다.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <div className="p-8 text-center">로딩 중...</div>;

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="mb-6 text-2xl font-bold text-[#003366]">{title} 편집</h1>

      <form onSubmit={handleRefinedSubmit} className="flex flex-col gap-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            편집 요약 (선택사항)
          </label>
          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="예: 오타 수정, 내용 추가 등"
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-[#003366] focus:outline-none"
          />
        </div>

        <div className="min-h-[500px]">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            내용 (Markdown 지원)
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="h-[500px] w-full rounded-md border border-gray-300 p-4 font-mono text-sm focus:border-[#003366] focus:outline-none"
            placeholder="내용을 입력하세요..."
            required
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            disabled={isSaving}
          >
            취소
          </button>
          <button
            type="submit"
            disabled={isSaving}
            className="rounded-md bg-[#003366] px-6 py-2 text-sm font-bold text-white hover:bg-[#002244] disabled:opacity-50"
          >
            {isSaving ? '저장 중...' : '게시하기'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
