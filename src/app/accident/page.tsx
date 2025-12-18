import Link from 'next/link';

import { ChevronDown, QrCode } from 'lucide-react';

import { supabase } from '@/lib/supabase/client';

const AccidentPage = async () => {
  const { data: accidents } = await supabase
    .from('accidents')
    .select('*')
    .order('occurred_at', { ascending: false });

  return (
    <div className="flex flex-col gap-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-[#003366]">Gkipedia:사건/사고</h1>
        <div className="mt-4 rounded border border-gray-100 bg-gray-50 px-4 py-2 text-sm text-gray-600">
          분류 : <span className="font-medium text-[#003366]">사건/사고</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* 2025 Section */}
        <div>
          <h2 className="mb-4 flex cursor-pointer items-center gap-2 border-b-2 border-gray-200 pb-2 text-xl font-bold text-[#003366] transition-colors hover:bg-gray-50">
            <ChevronDown className="h-6 w-6" /> 2025년 사건/사고
          </h2>
          <div className="space-y-6">
            {accidents?.map((accident) => (
              <Link
                href={`/accident/${accident.id}`}
                key={accident.id}
                className="block border-b border-gray-100 pb-6 transition-opacity last:border-0 hover:opacity-70"
              >
                <div className="flex items-start justify-between">
                  <h3 className="mb-1 text-lg font-bold text-[#003366]">
                    {accident.title}{' '}
                    <span className="ml-1 text-xs font-normal text-gray-400">
                      발생일 · {accident.occurred_at}
                    </span>
                  </h3>
                </div>
                <div className="flex gap-4">
                  <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-gray-700">
                    {accident.description || '내용이 없습니다.'}
                  </p>
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded border border-yellow-200 bg-yellow-50 text-yellow-600">
                    <QrCode className="h-10 w-10" />
                  </div>
                </div>
              </Link>
            ))}
            {!accidents?.length && (
              <div className="py-10 text-center text-gray-500">등록된 사건/사고가 없습니다.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccidentPage;
