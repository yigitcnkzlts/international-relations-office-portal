'use client';

import ContentLayout from '@/components/ContentLayout';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function InternationalStudentsPage() {
  const locale = useLocale();
  
  return (
    <ContentLayout
      breadcrumbs={[{ label: 'Uluslararası Öğrenciler' }]}
      title="Uluslararası Öğrenciler"
    >
      <div className="space-y-6">
        <p className="text-lg">
          Üniversitemiz, dünya çapında öğrencilere kaliteli sağlık bilimleri 
          eğitimi sunmaktadır. Uluslararası öğrencilerimize başvurudan mezuniyete kadar 
          kapsamlı destek sağlıyoruz.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Link href={`/${locale}/uluslararasi-ogrenciler/basvuru-sureci`} className="block bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg hover:shadow-xl transition focus-visible-ring">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2">Başvuru Süreci</h3>
            <p className="text-blue-100">Adım adım başvuru rehberi</p>
          </Link>

          <Link href={`/${locale}/uluslararasi-ogrenciler/gerekli-belgeler`} className="block bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg hover:shadow-xl transition focus-visible-ring">
            <div className="text-4xl mb-4">📄</div>
            <h3 className="text-xl font-bold mb-2">Gerekli Belgeler</h3>
            <p className="text-green-100">Başvuru için gerekli evraklar</p>
          </Link>

          <Link href={`/${locale}/uluslararasi-ogrenciler/ucretler`} className="block bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg hover:shadow-xl transition focus-visible-ring">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-2">Kontenjan ve Ücretler</h3>
            <p className="text-purple-100">Eğitim ücretleri ve ödeme planları</p>
          </Link>

          <Link href={`/${locale}/uluslararasi-ogrenciler/ikamet`} className="block bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg hover:shadow-xl transition focus-visible-ring">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-2">İkamet İzni</h3>
            <p className="text-orange-100">İkamet izin işlemleri</p>
          </Link>

          <Link href={`/${locale}/uluslararasi-ogrenciler/hazirlik`} className="block bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-lg hover:shadow-xl transition focus-visible-ring">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Hazırlık Okulu</h3>
            <p className="text-red-100">İngilizce hazırlık programı</p>
          </Link>

          <Link href={`/${locale}/sss`} className="block bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-lg hover:shadow-xl transition focus-visible-ring">
            <div className="text-4xl mb-4">❓</div>
            <h3 className="text-xl font-bold mb-2">SSS</h3>
            <p className="text-teal-100">Sıkça sorulan sorular</p>
          </Link>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8">
          <h3 className="font-bold text-lg mb-2">Önemli Not</h3>
          <p>
            Üniversitemizin Sağlık Bilimleri Fakültesi hariç tüm programlarında eğitim dili 
            İngilizce %30 ve Türkçe %70'dir. Sağlık Bilimleri Fakültesi programlarında ise 
            eğitim %100 Türkçe sunulmaktadır.
          </p>
        </div>
      </div>
    </ContentLayout>
  );
}
