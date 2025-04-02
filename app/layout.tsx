import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outline = Outfit({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'rapidClient',
  description: 'The most useful AI software',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${outline.className} antialiased`}>{children}</body>
    </html>
  );
}
