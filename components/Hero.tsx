'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

// Ana sayfa hero bölümü - gradient arka plan ve CTA butonları ekledim
export default function Hero() {
  const t = useTranslations('hero'); // Hero çevirileri
  const locale = useLocale(); // Aktif dil

  return (
    <section className="relative bg-gradient-to-br from-bezmialem-blue to-blue-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            {t('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${locale}/uluslararasi-ogrenciler/basvuru-sureci`}
              className="inline-block bg-bezmialem-gold hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-lg transition shadow-lg hover:shadow-xl focus-visible-ring text-center"
            >
              {t('cta1')}
            </Link>
            <Link
              href={`/${locale}/uluslararasi-ogrenciler/gerekli-belgeler`}
              className="inline-block bg-white hover:bg-gray-100 text-bezmialem-blue font-semibold px-8 py-4 rounded-lg transition shadow-lg hover:shadow-xl focus-visible-ring text-center"
            >
              {t('cta2')}
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
