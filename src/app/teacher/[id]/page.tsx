import Image from 'next/image';
import { notFound } from 'next/navigation';

import DetailActions from '@/components/DetailActions';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { supabase } from '@/lib/supabase/client';

interface PageProps {
  params: Promise<{ id: string }>;
}

const TeacherDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const { data: teacher, error } = await supabase
    .from('teachers')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !teacher) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-start justify-between">
          <h1 className="text-3xl font-bold text-[#003366]">{teacher.name}</h1>
          <DetailActions id={id} type="teacher" />
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
          <div className="rounded border border-gray-100 bg-gray-50 px-4 py-2">
            분류 : <span className="font-medium text-[#003366]">보통교과 선생님</span>
          </div>
          {teacher.subject && (
            <div className="rounded border border-gray-100 bg-gray-50 px-4 py-2">
              과목 : <span className="font-medium text-[#003366]">{teacher.subject}</span>
            </div>
          )}
          {teacher.created_at && (
            <div className="text-gray-400">
              작성일 : {new Date(teacher.created_at).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-6">
        {teacher.image_url && (
          <div className="relative h-64 w-48 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 shadow-sm">
            <Image src={teacher.image_url} alt={teacher.name} fill className="object-cover" />
          </div>
        )}

        <div className="min-h-[400px] flex-1 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <MarkdownRenderer content={teacher.content || ''} />
        </div>
      </div>
    </div>
  );
};

export default TeacherDetailPage;
