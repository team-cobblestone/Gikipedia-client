'use client';

import { useAuth } from '@/contexts/AuthContext';

const LoginPage = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-center text-2xl font-bold text-[#003366]">로그인</h1>
        <p className="mb-8 text-center text-gray-600">
          Gkipedia에 오신 것을 환영합니다.
          <br />
          글을 수정하려면 로그인이 필요합니다.
        </p>

        <button
          onClick={signInWithGoogle}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:shadow-sm"
        >
          {/* Using a placeholder SVG if react-icons is not installed, but trying to use FcGoogle first.
              If the verifying step fails because of missing icon, I will replace it.
              Wait, I didn't install react-icons. I should use a generic SVG or run the install command.
              I'll assume I need to install it or used a lucide icon for now to be safe.
              Let's use a simple SVG directly to avoid dependency issues for now.
          */}
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Google 계정으로 계속하기
        </button>

        <div className="mt-6 text-center text-xs text-gray-500">
          로그인 시 이용약관 및 개인정보처리방침에 동의하게 됩니다.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
