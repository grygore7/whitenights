
import type { Metadata } from 'next';
import { Playfair_Display, Lato, Open_Sans, Roboto, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { ClientOnly } from '@/components/client-only';

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant-garamond',
  subsets: ['latin'],
  weight: ['400', '700'], // Include necessary weights
});

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700'], // Include necessary weights
});

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '700'], // Include necessary weights
});


export const metadata: Metadata = {
  title: 'Notti Bianche',
  description: 'Esplora il mondo de "Le Notti Bianche" di Dostoevskij',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        suppressHydrationWarning // Added to handle potential mismatches from browser extensions
        className={cn(
          playfairDisplay.variable,
          cormorantGaramond.variable,
          lato.variable,
          openSans.variable,
          roboto.variable,
          'antialiased font-lato' // Use Lato as default body font
        )}
      >
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            {/* Add Footer here if needed later */}
          </div>
          <ClientOnly>
            <Toaster />
          </ClientOnly>
        </Providers>
      </body>
    </html>
  );
}

