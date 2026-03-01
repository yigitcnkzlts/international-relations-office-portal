'use client';

import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import ContentLayout from '@/components/ContentLayout';
import { announcements } from '@/data/announcements';

export default function AnnouncementDetailPage({ params }: { params: { id: string } }) {
  const locale = useLocale();
  const announcement = announcements.find((a) => a.id.toString() === params.id);

  if (!announcement) {
    notFound();
  }

  return (
    <ContentLayout
      breadcrumbs={[
        { label: 'Duyurular', href: '/duyurular' },
        { label: announcement.title[locale as 'tr' | 'en'] }
      ]}
    >
      <article>
        <time className="text-sm text-gray-500" dateTime={announcement.date}>
          {new Date(announcement.date).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <h1 className="text-4xl font-bold mt-2 mb-6 text-bezmialem-blue">
          {announcement.title[locale as 'tr' | 'en']}
        </h1>
        <div className="prose prose-lg max-w-none">
          <p>{announcement.excerpt[locale as 'tr' | 'en']}</p>
          <p>{announcement.content[locale as 'tr' | 'en']}</p>
        </div>
      </article>
    </ContentLayout>
  );
}
