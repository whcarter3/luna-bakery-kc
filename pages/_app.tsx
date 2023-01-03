import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Abril_Fatface, Inter } from '@next/font/google';

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      // This is how you use the imported fonts
      className={`${abril.variable} ${inter.variable} font-sans text-white bg-primary mx-auto`}
    >
      <Component {...pageProps} />
    </main>
  );
}
