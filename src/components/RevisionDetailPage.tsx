import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ArrowLeft } from 'lucide-react';

import MarkdownRenderer from '@/components/MarkdownRenderer';
import { supabase } from '@/lib/supabase/client';

interface RevisionDetailPageProps {
  id: string; // Document ID
  revId: string; // Revision ID
  type: 'accident' | 'club' | 'student' | 'teacher';
}

const RevisionDetailPage = async ({ id, revId, type }: RevisionDetailPageProps) => {
  const { data: revision } = await supabase
    .from('document_revisions')
    .select('*')
    .eq('id', revId)
    .single();

  if (!revision) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="border-b border-gray-200 pb-4">
        <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
          <Link href={`/${type}/${id}/history`} className="flex items-center gap-1 hover:underline">
            <ArrowLeft className="h-4 w-4" /> 목록으로 돌아가기
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-[#003366]">
          과거 버전 보기 (v{revision.revision_number})
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
          <div className="rounded border border-gray-100 bg-gray-50 px-4 py-2">
            수정일 : {new Date(revision.created_at).toLocaleString()}
          </div>
          <div className="rounded border border-gray-100 bg-gray-50 px-4 py-2">
            수정자 : {revision.created_by || '익명'}
          </div>
        </div>
        {revision.change_summary && (
          <div className="mt-4 rounded bg-blue-50 p-3 text-sm text-blue-800">
            수정 요약: {revision.change_summary}
          </div>
        )}
      </div>

      <div className="min-h-[400px] rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
        <div className="mb-4 text-xs font-bold tracking-wide text-red-500 uppercase">
          주의: 현재 보고 계신 문서는 과거 버전입니다.
        </div>
        <MarkdownRenderer content={revision.content} />
      </div>
    </div>
  );
};

export default RevisionDetailPage;
