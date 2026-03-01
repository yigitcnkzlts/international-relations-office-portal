'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

// Hızlı erişim kartları - 6 renkli kart ile önemli sayfalara kolay erişim sağladım
export default function QuickAccessCards() {
  const t = useTranslations('quickAccess'); // Kart çevirileri
  const locale = useLocale(); // Aktif dil

  // 6 farklı renkli kart tanımladım
  const cards = [
    {
      key: 'erasmus',
      href: `/${locale}/erasmus`,
      icon: '🎓',
      color: 'from-blue-500 to-blue-600'
    },
    {
      key: 'international',
      href: `/${locale}/uluslararasi-ogrenciler`,
      icon: '🌍',
      color: 'from-green-500 to-green-600'
    },
    {
      key: 'agreements',
      href: `/${locale}/anlasmalar`,
      icon: '🤝',
      color: 'from-purple-500 to-purple-600'
    },
    {
      key: 'application',
      href: `/${locale}/uluslararasi-ogrenciler/basvuru-sureci`,
      icon: '📝',
      color: 'from-orange-500 to-orange-600'
    },
    {
      key: 'documents',
      href: `/${locale}/uluslararasi-ogrenciler/gerekli-belgeler`,
      icon: '📄',
      color: 'from-red-500 to-red-600'
    },
    {
      key: 'contact',
      href: `/${locale}/iletisim`,
      icon: '📧',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-bezmialem-blue">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link
              key={card.key}
              href={card.href}
              className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden focus-visible-ring"
            >
              <div className={`bg-gradient-to-br ${card.color} p-6 text-white`}>
                <div className="text-4xl mb-2">{card.icon}</div>
                <h3 className="text-xl font-bold">{t(`${card.key}.title`)}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{t(`${card.key}.description`)}</p>
                <span className="inline-block mt-4 text-bezmialem-blue font-semibold group-hover:translate-x-2 transition-transform">
                  {t('learnMore')} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
