import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';

import { Footer, Header, Sidebar } from '@/components';
import ScrollButtons from '@/components/ScrollButtons';
import { AuthProvider } from '@/contexts/AuthContext';
import { TanStackProvider } from '@/lib';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Gkipedia - 광주소마 위키',
  description: '여러분이 가꾸어 나가는 역사의 고서, Gkipedia에 오신 것을 환영합니다!',
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col bg-[#f0f2f5]">
        <AuthProvider>
          <TanStackProvider>
            <Header />
            <div className="mx-auto flex w-full max-w-7xl flex-1 gap-6 p-4 md:p-6">
              <main className="flex-1 overflow-hidden rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                {children}
              </main>
              <div className="hidden lg:block">
                <Sidebar />
              </div>
            </div>
            <Footer />
            <ScrollButtons />
            <Toaster />
          </TanStackProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
