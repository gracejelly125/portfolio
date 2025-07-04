import { ReactNode } from 'react';

import type { Metadata } from 'next';

import '@/app/globals.css';
import ClientLayout from '@/components/layout/ClientLayout';

export const metadata: Metadata = {
  title: '정은혜의 포트폴리오',
  description: '프론트엔드 개발자 정은혜의 포트폴리오 사이트입니다.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-background">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
