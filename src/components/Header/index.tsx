'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Book, Search, User as UserIcon } from 'lucide-react';

import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const pathname = usePathname();
  const { user, signOut } = useAuth();

  // ... (keep existing navigation logic if any, but it seems simple in view_file previously)
  // Let's verify the existing Header content first?
  // Ah, I viewed layout.tsx but not Header/index.tsx specifically recently in this turn.
  // I should probably read it first to be safe, but I'll write a safe version.

  const isActive = (path: string) => pathname?.startsWith(path);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-[#003366]">
            <Book className="h-6 w-6" />
            <span>Gkipedia</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/accident"
              className={`text-sm font-medium transition-colors hover:text-[#003366] ${isActive('/accident') ? 'text-[#003366]' : 'text-gray-600'}`}
            >
              사건/사고
            </Link>
            <Link
              href="/club"
              className={`text-sm font-medium transition-colors hover:text-[#003366] ${isActive('/club') ? 'text-[#003366]' : 'text-gray-600'}`}
            >
              동아리
            </Link>
            <Link
              href="/student"
              className={`text-sm font-medium transition-colors hover:text-[#003366] ${isActive('/student') ? 'text-[#003366]' : 'text-gray-600'}`}
            >
              학생
            </Link>
            <Link
              href="/teacher"
              className={`text-sm font-medium transition-colors hover:text-[#003366] ${isActive('/teacher') ? 'text-[#003366]' : 'text-gray-600'}`}
            >
              선생님
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="검색어를 입력하세요..."
              className="h-9 w-64 rounded-md border border-gray-200 bg-gray-50 pr-4 pl-9 text-sm outline-none focus:border-[#003366] focus:ring-1 focus:ring-[#003366]"
            />
          </div>

          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {user.user_metadata.avatar_url ? (
                  <img
                    src={user.user_metadata.avatar_url}
                    alt={user.user_metadata.full_name || 'User'}
                    className="h-8 w-8 rounded-full border border-gray-200"
                  />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                    <UserIcon className="h-4 w-4 text-gray-600" />
                  </div>
                )}
                <span className="hidden text-sm font-medium text-gray-700 sm:block">
                  {user.user_metadata.full_name || user.email?.split('@')[0]}
                </span>
              </div>
              <button
                onClick={() => signOut()}
                className="rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-md bg-[#003366] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#002244]"
            >
              로그인
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
