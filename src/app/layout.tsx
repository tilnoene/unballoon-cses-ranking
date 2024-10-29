import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

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
        className={`${montserrat.variable} bg-metal-800 font-montserrat min-h-screen w-full text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
