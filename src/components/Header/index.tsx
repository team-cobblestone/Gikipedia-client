import Link from 'next/link';

import { BookOpenText, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between bg-[#003366] px-4 text-white shadow-md">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <BookOpenText className="h-6 w-6 text-yellow-400" />
          <span>Gkipedia</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/student" className="font-medium hover:text-gray-300">
            학생
          </Link>
          <Link href="/teacher" className="font-medium hover:text-gray-300">
            선생님
          </Link>
          <Link href="/accident" className="font-medium hover:text-gray-300">
            사건/사고
          </Link>
          <Link href="/club" className="font-medium hover:text-gray-300">
            동아리
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center rounded bg-gray-100 px-3 py-1">
          <input
            type="text"
            placeholder="검색어를 입력하세요..."
            className="bg-transparent text-sm text-black outline-none placeholder:text-gray-500"
          />
          <Search className="h-4 w-4 cursor-pointer text-gray-500" />
        </div>
        <button className="flex items-center gap-1 font-semibold hover:text-gray-300">
          <User className="h-5 w-5" /> 로그인
        </button>
      </div>
    </header>
  );
};

export default Header;
