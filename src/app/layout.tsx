import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.scss';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';
import Header from '@/shared/layout/Header';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '600'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['500'],
});

const satoshi = localFont({
  src: '../shared/fonts/Satoshi-Variable.ttf',
  variable: '--font-satoshi',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Blaze Casino',
  description:
    'Dive into Blaze Casino – exciting slot games, big wins, and endless fun every spin!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} ${satoshi.variable}`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
