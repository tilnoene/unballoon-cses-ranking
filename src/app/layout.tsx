import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

import About from '@/app/assets/about.svg';

import Header from './components/header';
import Footer from './components/footer';
import Button from './components/button';

const montserrat = localFont({
  src: './fonts/Montserrat-VariableFont_wght.ttf',
  variable: '--font-montserrat',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'UnBalloon CSES Ranking',
  description:
    'Ranking based on problems solved at CSES by members of the UnBalloon competitive programming study group.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body
        className={`${montserrat.variable} flex min-h-screen w-full flex-col bg-metal-800 font-montserrat text-white antialiased`}
      >
        <Header />

        {children}

        <Link href='/sobre'>
          <Button className='fixed bottom-4 right-4'>
            <Image
              src={About}
              alt='Sobre'
              width={26}
              height={26}
              className='invert'
            />
          </Button>
        </Link>

        <Footer />
      </body>
    </html>
  );
}
