import Image from 'next/image';
import { notFound } from 'next/navigation';

import DetailActions from '@/components/DetailActions';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { supabase } from '@/lib/supabase/client';

interface PageProps {
  params: Promise<{ id: string }>;
}

const StudentDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const { data: student, error } = await supabase
    .from('students')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !student) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-start justify-between">
          <h1 className="text-3xl font-bold text-[#003366]">{student.name}</h1>
          <DetailActions id={id} type="student" />
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
          <div className="rounded border border-gray-100 bg-gray-50 px-4 py-2">
            분류 : <span className="font-medium text-[#003366]">학생</span>
          </div>
          <div className="rounded border border-gray-100 bg-gray-50 px-4 py-2">
            기수 : <span className="font-medium text-[#003366]">{student.generation}기</span>
          </div>
          {student.created_at && (
            <div className="text-gray-400">
              작성일 : {new Date(student.created_at).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-6">
        {student.image_url && (
          <div className="relative h-64 w-48 shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 shadow-sm">
            <Image src={student.image_url} alt={student.name} fill className="object-cover" />
          </div>
        )}

        <div className="min-h-[400px] flex-1 rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
          <MarkdownRenderer content={student.content || ''} />
        </div>
      </div>
    </div>
  );
};

export default StudentDetailPage;
