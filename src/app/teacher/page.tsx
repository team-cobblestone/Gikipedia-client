import { ChevronDown } from 'lucide-react';

import { TEACHERS_2023, TEACHERS_2024 } from '@/lib';

const TeacherPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-[#003366]">Gkipedia:보통교과 선생님</h1>
        <div className="mt-4 rounded border border-gray-100 bg-gray-50 px-4 py-2 text-sm text-gray-600">
          분류 : <span className="font-medium text-[#003366]">보통교과 선생님</span>
        </div>
      </div>

      <div className="space-y-8">
        {/* 2024 Section */}
        <div>
          <h2 className="mb-4 flex cursor-pointer items-center gap-2 border-b-2 border-gray-200 pb-2 text-xl font-bold text-[#003366] transition-colors hover:bg-gray-50">
            <ChevronDown className="h-6 w-6" /> 2024년 보통교과 선생님
          </h2>
          <div className="space-y-6">
            {TEACHERS_2024.map((teacher) => (
              <div key={teacher.id} className="border-b border-gray-100 pb-6 last:border-0">
                <h3 className="mb-1 text-lg font-bold text-[#003366]">
                  {teacher.name}{' '}
                  <span className="ml-1 text-xs font-normal text-gray-400">
                    최근 수정일 · {teacher.updatedAt}
                  </span>
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">{teacher.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2023 Section */}
        <div>
          <h2 className="mb-4 flex cursor-pointer items-center gap-2 border-b-2 border-gray-200 pb-2 text-xl font-bold text-[#003366] transition-colors hover:bg-gray-50">
            <ChevronDown className="h-6 w-6" /> 2023년 보통교과 선생님
          </h2>
          <div className="space-y-6">
            {TEACHERS_2023.map((teacher) => (
              <div key={teacher.id} className="border-b border-gray-100 pb-6 last:border-0">
                <h3 className="mb-1 text-lg font-bold text-[#003366]">
                  {teacher.name}{' '}
                  <span className="ml-1 text-xs font-normal text-gray-400">
                    최근 수정일 · {teacher.updatedAt}
                  </span>
                </h3>
                <div className="flex gap-4">
                  <p className="flex-1 text-sm leading-relaxed text-gray-700">
                    {teacher.description}
                  </p>
                  {/* Placeholder for image if it existed in mock data for teachers */}
                  <div className="h-20 w-32 shrink-0 rounded bg-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
