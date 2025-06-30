import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: '정은혜의 포트폴리오',
  description: '프론트엔드 개발자 정은혜의 포트폴리오 사이트입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
