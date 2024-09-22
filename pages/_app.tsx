import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Abril_Fatface, Inter, PT_Serif } from 'next/font/google';

// This is how google fonts are imported in Next.js
const abril = Abril_Fatface({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-abril-fatface',
});

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-inter',
});

const ptSerif = PT_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pt-serif',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      // This is how you use the imported fonts
      className={`${ptSerif.variable} ${inter.variable} font-sans text-white bg-primary mx-auto mt-[115px]`}
    >
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
