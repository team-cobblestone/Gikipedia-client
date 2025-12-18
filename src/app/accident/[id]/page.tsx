import { notFound } from 'next/navigation';

import DetailActions from '@/components/DetailActions';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { supabase } from '@/lib/supabase/client';

interface PageProps {
  params: Promise<{ id: string }>;
}

const AccidentDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const { data: accident, error } = await supabase
    .from('accidents')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !accident) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-start justify-between">
          <h1 className="text-3xl font-bold text-[#003366]">{accident.title}</h1>
          <DetailActions id={id} type="accident" />
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
          <div className="rounded border border-gray-100 bg-gray-50 px-4 py-2">
            분류 : <span className="font-medium text-[#003366]">사건/사고</span>
          </div>
          <div>
            발생일 : <span className="font-medium">{accident.occurred_at}</span>
          </div>
          {accident.created_at && (
            <div className="text-gray-400">
              작성일 : {new Date(accident.created_at).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>

      <div className="min-h-[400px] rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
        <MarkdownRenderer content={accident.content || ''} />
      </div>
    </div>
  );
};

export default AccidentDetailPage;
