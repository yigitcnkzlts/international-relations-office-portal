'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { announcements } from '@/data/announcements';

// Duyuru listesi - ana sayfada son 6 duyuruyu gösteriyorum
export default function AnnouncementList() {
  const t = useTranslations('announcements'); // Duyuru çevirileri
  const locale = useLocale(); // Aktif dil

  const recentAnnouncements = announcements.slice(0, 6); // İlk 6 duyuru

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            {t('title')}
          </h2>
          <Link
            href={`/${locale}/duyurular`}
            className="text-brand-blue hover:text-blue-700 font-semibold focus-visible-ring"
          >
            {t('viewAll')} →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentAnnouncements.map((announcement) => (
            <Link
              key={announcement.id}
              href={`/${locale}/duyurular/${announcement.id}`}
              className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition focus-visible-ring"
            >
              <time className="text-sm text-gray-500" dateTime={announcement.date}>
                {new Date(announcement.date).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <h3 className="text-lg font-bold mt-2 mb-3 text-brand-blue">
                {announcement.title[locale as 'tr' | 'en']}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                {announcement.excerpt[locale as 'tr' | 'en']}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
