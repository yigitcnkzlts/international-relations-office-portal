'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import ContentLayout from '@/components/ContentLayout';
import { announcements } from '@/data/announcements';

export default function AnnouncementsPage() {
  const locale = useLocale();

  return (
    <ContentLayout
      breadcrumbs={[{ label: 'Duyurular' }]}
      title="Duyurular"
    >
      <div className="space-y-6">
        {announcements.map((announcement) => (
          <Link
            key={announcement.id}
            href={`/duyurular/${announcement.id}`}
            className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-brand-blue hover:shadow-lg transition focus-visible-ring"
          >
            <time className="text-sm text-gray-500" dateTime={announcement.date}>
              {new Date(announcement.date).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <h2 className="text-2xl font-bold mt-2 mb-3 text-brand-blue">
              {announcement.title[locale as 'tr' | 'en']}
            </h2>
            <p className="text-gray-700">
              {announcement.excerpt[locale as 'tr' | 'en']}
            </p>
            <span className="inline-block mt-4 text-brand-blue font-semibold">
              Devamını Oku →
            </span>
          </Link>
        ))}
      </div>
    </ContentLayout>
  );
}
