import Link from 'next/link';

import { ChevronDown } from 'lucide-react';

import { supabase } from '@/lib/supabase/client';

const TeacherPage = async () => {
  const { data: teachers } = await supabase
    .from('teachers')
    .select('*')
    .order('name', { ascending: true });

  return (
    <div className="flex flex-col gap-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-[#003366]">Gkipedia:보통교과 선생님</h1>
        <div className="mt-4 rounded border border-gray-100 bg-gray-50 px-4 py-2 text-sm text-gray-600">
          분류 : <span className="font-medium text-[#003366]">보통교과 선생님</span>
        </div>
      </div>

      <div className="space-y-8">
        {/* All Teachers Section */}
        <div>
          <h2 className="mb-4 flex cursor-pointer items-center gap-2 border-b-2 border-gray-200 pb-2 text-xl font-bold text-[#003366] transition-colors hover:bg-gray-50">
            <ChevronDown className="h-6 w-6" /> 전체 보통교과 선생님
          </h2>
          <div className="space-y-6">
            {teachers?.map((teacher) => (
              <Link
                href={`/teacher/${teacher.id}`}
                key={teacher.id}
                className="block border-b border-gray-100 pb-6 transition-opacity last:border-0 hover:opacity-70"
              >
                <div className="flex items-start justify-between">
                  <h3 className="mb-1 text-lg font-bold text-[#003366]">
                    {teacher.name}{' '}
                    <span className="ml-1 text-xs font-normal text-gray-400">
                      {teacher.subject}
                    </span>
                  </h3>
                </div>
                <div className="flex gap-4">
                  <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-gray-700">
                    {teacher.content || '소개가 없습니다.'}
                  </p>
                  {teacher.image_url && (
                    <div className="h-20 w-32 shrink-0 rounded bg-gray-200"></div>
                  )}
                </div>
              </Link>
            ))}
            {!teachers?.length && (
              <div className="py-10 text-center text-gray-500">등록된 선생님이 없습니다.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherPage;
