import Image from 'next/image';
import { notFound } from 'next/navigation';

import DetailActions from '@/components/DetailActions';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { supabase } from '@/lib/supabase/client';

interface PageProps {
  params: Promise<{ id: string }>;
}

const ClubDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const { data: club, error } = await supabase.from('clubs').select('*').eq('id', id).single();

  if (error || !club) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-start justify-between">
          <h1 className="text-3xl font-bold text-[#003366]">{club.name}</h1>
          <DetailActions id={id} type="club" />
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
          <div className="rounded border border-gray-100 bg-gray-50 px-4 py-2">
            분류 : <span className="font-medium text-[#003366]">전공 동아리</span>
          </div>
          {club.created_at && (
            <div className="text-gray-400">
              작성일 : {new Date(club.created_at).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>

      {club.image_url && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
          <Image src={club.image_url} alt={club.name} fill className="object-cover" />
        </div>
      )}

      <div className="min-h-[400px] rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
        <MarkdownRenderer content={club.content || ''} />
      </div>
    </div>
  );
};

export default ClubDetailPage;
