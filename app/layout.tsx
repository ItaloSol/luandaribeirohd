import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://luandaribeirohd.web.app/'),
  title: 'Luanda Heels – Eleve sua autoestima e confiança com o Heels Dance',
  description: 'Descubra uma nova forma de se expressar e se empoderar através do Heels Dance. Experimente aulas que unem técnica, elegância e autoconfiança, em um ambiente acolhedor e transformador guiado pela experiência de Luanda Ribeiro. Agende sua aula experimental e venha viver essa experiência única!',
  openGraph: {
    title: 'Luanda Heels – Eleve sua autoestima e confiança com o Heels Dance',
    description: 'Descubra uma nova forma de se expressar e se empoderar através do Heels Dance. Experimente aulas que unem técnica, elegância e autoconfiança, em um ambiente acolhedor e transformador guiado pela experiência de Luanda Ribeiro. Agende sua aula experimental e venha viver essa experiência única!',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Luanda Heels – Eleve sua autoestima e confiança com o Heels Dance',
      },
    ],
    siteName: 'Luanda Heels',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luanda Heels – Eleve sua autoestima e confiança com o Heels Dance',
    description: 'Descubra uma nova forma de se expressar e se empoderar através do Heels Dance. Experimente aulas que unem técnica, elegância e autoconfiança, em um ambiente acolhedor e transformador guiado pela experiência de Luanda Ribeiro. Agende sua aula experimental e venha viver essa experiência única!',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://luandaribeirohd.web.app/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/ico.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Luxurious+Script&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}