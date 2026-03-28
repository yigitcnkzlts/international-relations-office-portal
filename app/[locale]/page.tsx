import { useTranslations } from 'next-intl';
import Hero from '@/components/Hero';
import QuickAccessCards from '@/components/QuickAccessCards';
import AnnouncementList from '@/components/AnnouncementList';
import FAQSection from '@/components/FAQSection';
import { getTranslations } from 'next-intl/server';

// Ana sayfa - Hero, Hızlı Erişim, Duyurular ve SSS bölümlerini bir araya getirdim
// SEO için metadata oluşturdum
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  return {
    title: t('home.title'),
    description: t('home.description'),
    openGraph: {
      title: t('home.title'),
      description: t('home.description'),
      locale: locale,
    },
  };
}

// Ana sayfa bileşeni - tüm ana bölümleri sırayla yerleştirdim
export default function HomePage() {
  return (
    <>
      <Hero /> {/* Hero alanı */}
      <QuickAccessCards /> {/* Hızlı erişim kartları */}
      <AnnouncementList /> {/* Duyurular */}
      <FAQSection /> {/* Sıkça sorulan sorular */}
    </>
  );
}
