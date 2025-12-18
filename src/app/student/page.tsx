import Link from 'next/link';

import { ChevronDown } from 'lucide-react';

import { supabase } from '@/lib/supabase/client';

const StudentPage = async () => {
  const { data: students } = await supabase
    .from('students')
    .select('*')
    .order('name', { ascending: true });

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
            {students?.map((student) => (
              <Link
                href={`/student/${student.id}`}
                key={student.id}
                className="block border-b border-gray-100 pb-6 transition-opacity last:border-0 hover:opacity-70"
              >
                <div className="flex items-start justify-between">
                  <h3 className="mb-1 text-lg font-bold text-[#003366]">
                    {student.name}{' '}
                    <span className="ml-1 text-xs font-normal text-gray-400">
                      기수 : {student.generation}기
                    </span>
                  </h3>
                </div>
                <div className="flex gap-4">
                  <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-gray-700">
                    {student.content
                      ? student.content
                          .replace(/#{1,6}\s/g, '') // 헤딩 제거
                          .replace(/\*\*(.+?)\*\*/g, '$1') // 볼드 제거
                          .replace(/\*(.+?)\*/g, '$1') // 이탤릭 제거
                          .replace(/\[(.+?)\]\(.+?\)/g, '$1') // 링크 제거
                          .replace(/`(.+?)`/g, '$1') // 코드 제거
                          .replace(/\n/g, ' ') // 줄바꿈을 공백으로
                          .trim()
                      : '자기소개가 없습니다.'}
                  </p>
                  {student.image_url && <div className="h-20 w-32 rounded bg-gray-200"></div>}
                </div>
              </Link>
            ))}
            {!students?.length && (
              <div className="py-10 text-center text-gray-500">등록된 학생이 없습니다.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
