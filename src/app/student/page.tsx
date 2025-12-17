import { ChevronDown } from 'lucide-react';

import { STUDENTS_2025 } from '@/lib';

const StudentPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-[#003366]">Gkipedia:학생</h1>
        <div className="mt-4 rounded border border-gray-100 bg-gray-50 px-4 py-2 text-sm text-gray-600">
          분류 : <span className="font-medium text-[#003366]">학생</span>
        </div>
      </div>

      <div className="space-y-6">
        {/* 2025 Section */}
        <div>
          <h2 className="mb-4 flex cursor-pointer items-center gap-2 border-b-2 border-gray-200 pb-2 text-xl font-bold text-[#003366] transition-colors hover:bg-gray-50">
            <ChevronDown className="h-6 w-6" /> 2025년 학생
          </h2>
          <div className="space-y-6">
            {STUDENTS_2025.map((student) => (
              <div key={student.id} className="border-b border-gray-100 pb-6 last:border-0">
                <div className="flex items-start justify-between">
                  <h3 className="mb-1 text-lg font-bold text-[#003366]">
                    {student.name}{' '}
                    <span className="ml-1 text-xs font-normal text-gray-400">
                      최근 수정일 · {student.updatedAt}
                    </span>
                  </h3>
                </div>
                <div className="flex gap-4">
                  <p className="flex-1 text-sm leading-relaxed text-gray-700">
                    {student.description}
                  </p>
                  {student.image && <div className="h-20 w-32 rounded bg-gray-200"></div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
