import { ChevronDown } from 'lucide-react';

import { CLUBS_2025 } from '@/lib';

const ClubPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-[#003366]">Gkipedia:전공 동아리</h1>
        <div className="mt-4 rounded border border-gray-100 bg-gray-50 px-4 py-2 text-sm text-gray-600">
          분류 : <span className="font-medium text-[#003366]">전공 동아리</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* 2025 Section */}
        <div>
          <h2 className="mb-4 flex cursor-pointer items-center gap-2 border-b-2 border-gray-200 pb-2 text-xl font-bold text-[#003366] transition-colors hover:bg-gray-50">
            <ChevronDown className="h-6 w-6" /> 2025년 전공 동아리
          </h2>
          <div className="space-y-6">
            {CLUBS_2025.map((club) => (
              <div key={club.id} className="border-b border-gray-100 pb-6 last:border-0">
                <div className="flex items-start justify-between">
                  <h3 className="mb-1 text-lg font-bold text-[#003366]">
                    {club.name}{' '}
                    <span className="ml-1 text-xs font-normal text-gray-400">
                      최근 수정일 · {club.updatedAt}
                    </span>
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-700">{club.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubPage;
