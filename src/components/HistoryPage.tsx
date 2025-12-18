import Link from 'next/link';

import { ArrowLeft } from 'lucide-react';

import { supabase } from '@/lib/supabase/client';

interface HistoryPageProps {
  id: string;
  type: 'accident' | 'club' | 'student' | 'teacher';
}

const HistoryPage = async ({ id, type }: HistoryPageProps) => {
  const { data: revisions } = await supabase
    .from('document_revisions')
    .select('*')
    .eq('document_id', id)
    .order('created_at', { ascending: false });

  // Get current document title for header
  let title = '문서';
  if (type === 'accident') {
    const { data } = await supabase.from('accidents').select('title').eq('id', id).single();
    title = data?.title || '사건/사고';
  } else if (type === 'club') {
    const { data } = await supabase.from('clubs').select('name').eq('id', id).single();
    title = data?.name || '동아리';
  } else if (type === 'student') {
    const { data } = await supabase.from('students').select('name').eq('id', id).single();
    title = data?.name || '학생';
  } else if (type === 'teacher') {
    const { data } = await supabase.from('teachers').select('name').eq('id', id).single();
    title = data?.name || '선생님';
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="border-b border-gray-200 pb-4">
        <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
          <Link href={`/${type}/${id}`} className="flex items-center gap-1 hover:underline">
            <ArrowLeft className="h-4 w-4" /> 문서로 돌아가기
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-[#003366]">{title} - 수정 내역</h1>
        <div className="mt-2 text-sm text-gray-600">이 문서의 역사를 볼 수 있습니다.</div>
      </div>

      <div className="space-y-4">
        {revisions?.map((rev) => (
          <div key={rev.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-bold text-[#003366]">Version {rev.version}</span>
              <span className="text-sm text-gray-500">
                {new Date(rev.created_at).toLocaleString()}
              </span>
            </div>
            <div className="text-sm text-gray-700">
              <span className="font-medium">수정 내용:</span> {rev.change_summary || '내용 없음'}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="text-xs text-gray-400">수정자: {rev.created_by || '익명'}</div>
              <Link
                href={`/${type}/${id}/history/${rev.id}`}
                className="text-xs font-medium text-blue-600 hover:underline"
              >
                내용 보기
              </Link>
            </div>
          </div>
        ))}
        {!revisions?.length && (
          <div className="py-10 text-center text-gray-500">수정 내역이 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
