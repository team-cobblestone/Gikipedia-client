import Link from 'next/link';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { supabase } from '@/lib/supabase/client';

const Sidebar = async () => {
  const { data: recentChanges } = await supabase.from('recent_changes_view').select('*').limit(10);

  return (
    <aside className="w-fb sticky top-20 flex max-w-75 min-w-75 flex-col gap-4">
      <div className="overflow-hidden rounded border border-gray-300 bg-white shadow-sm">
        <div className="bg-[#003366] px-4 py-2 font-bold text-white">최근 변경</div>
        <ul className="divide-y divide-gray-100">
          {recentChanges?.map((item) => (
            <Link
              key={`${item.type}-${item.id}`}
              href={`/${item.type}/${item.id}`}
              className="flex cursor-pointer items-center justify-between px-4 py-3 transition-colors hover:bg-gray-50"
            >
              <span className="truncate font-medium text-gray-800">{item.title}</span>
              <span className="shrink-0 text-xs text-gray-500">
                {new Date(item.created_at).toLocaleDateString()}
              </span>
            </Link>
          ))}
          {!recentChanges?.length && (
            <li className="px-4 py-3 text-center text-xs text-gray-500">변경 내역이 없습니다.</li>
          )}
        </ul>
        <div className="flex justify-between border-t border-gray-100 bg-gray-50 p-2">
          <button className="flex items-center gap-1 rounded border border-gray-200 bg-white px-3 py-1 text-sm text-gray-600 shadow-sm hover:bg-gray-50">
            <ChevronLeft className="h-4 w-4" /> 이전
          </button>
          <button className="flex items-center gap-1 rounded border border-gray-200 bg-white px-3 py-1 text-sm text-gray-600 shadow-sm hover:bg-gray-50">
            다음 <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
