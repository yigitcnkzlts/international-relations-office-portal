import ContentLayout from '@/components/ContentLayout';

export const metadata = {
  title: 'İngilizce Hazırlık Okulu - Uluslararası Öğrenciler',
  description: 'İngilizce hazırlık programı hakkında bilgi'
};

export default function PreparatorySchoolPage() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: 'Uluslararası Öğrenciler', href: '/uluslararasi-ogrenciler' },
        { label: 'Hazırlık Okulu' }
      ]}
      title="İngilizce Hazırlık Okulu"
    >
      <div className="space-y-8">
        <p className="text-lg text-gray-700">
          İngilizce yeterlilik düzeyi programın gerektirdiği seviyede olmayan öğrenciler 
          için hazırlık programı sunulmaktadır.
        </p>

        <div className="bg-blue-50 border-l-4 border-brand-blue p-6 rounded-r-lg">
          <h3 className="font-bold text-lg mb-2">📚 Program Özellikleri</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Yoğun İngilizce eğitimi</li>
            <li>• Akademik İngilizce odaklı</li>
            <li>• Küçük sınıf mevcutları</li>
            <li>• Deneyimli öğretim kadrosu</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-brand-blue mb-4">⏰ Süre</h3>
            <p className="text-gray-700">1 akademik yıl (2 dönem)</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-brand-blue mb-4">💰 Ücret</h3>
            <p className="text-gray-700">5.000 USD/yıl</p>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
