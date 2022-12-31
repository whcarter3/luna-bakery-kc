import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Playfair_Display, Inter } from '@next/font/google';

// This is how google fonts are imported in Next.js
const playfair = Playfair_Display({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-playfair-display',
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
      className={`${playfair.variable} ${inter.variable} font-sans`}
    >
      <Component {...pageProps} />
    </main>
  );
}
