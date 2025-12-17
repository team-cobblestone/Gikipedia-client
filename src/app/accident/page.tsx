import { ChevronDown, QrCode } from 'lucide-react';

import { ACCIDENTS_2025 } from '@/lib';

const AccidentPage = () => {
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
            {ACCIDENTS_2025.map((accident) => (
              <div key={accident.id} className="border-b border-gray-100 pb-6 last:border-0">
                <div className="flex items-start justify-between">
                  <h3 className="mb-1 text-lg font-bold text-[#003366]">
                    {accident.title}{' '}
                    <span className="ml-1 text-xs font-normal text-gray-400">
                      최근 수정일 · {accident.updatedAt}
                    </span>
                  </h3>
                </div>
                <div className="flex gap-4">
                  <p className="flex-1 text-sm leading-relaxed text-gray-700">
                    {accident.description}
                  </p>
                  <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded border border-yellow-200 bg-yellow-50 text-yellow-600">
                    <QrCode className="h-10 w-10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccidentPage;
