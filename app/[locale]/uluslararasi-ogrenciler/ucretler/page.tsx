import ContentLayout from '@/components/ContentLayout';

export const metadata = {
  title: 'Kontenjan ve Ücretler - Uluslararası Öğrenciler',
  description: 'Eğitim ücretleri ve ödeme planları'
};

export default function FeesPage() {
  const programs = [
    {
      faculty: 'Tıp Fakültesi',
      programs: [
        { name: 'Tıp (İngilizce)', fee: '25.000 USD', duration: '6 yıl' }
      ]
    },
    {
      faculty: 'Diş Hekimliği Fakültesi',
      programs: [
        { name: 'Diş Hekimliği (İngilizce)', fee: '20.000 USD', duration: '5 yıl' }
      ]
    },
    {
      faculty: 'Eczacılık Fakültesi',
      programs: [
        { name: 'Eczacılık (İngilizce)', fee: '15.000 USD', duration: '5 yıl' }
      ]
    },
    {
      faculty: 'Sağlık Bilimleri Fakültesi',
      programs: [
        { name: 'Hemşirelik (Türkçe)', fee: '8.000 USD', duration: '4 yıl' },
        { name: 'Fizyoterapi (Türkçe)', fee: '8.000 USD', duration: '4 yıl' },
        { name: 'Beslenme ve Diyetetik (Türkçe)', fee: '8.000 USD', duration: '4 yıl' }
      ]
    }
  ];

  return (
    <ContentLayout
      breadcrumbs={[
        { label: 'Uluslararası Öğrenciler', href: '/uluslararasi-ogrenciler' },
        { label: 'Kontenjan ve Ücretler' }
      ]}
      title="Kontenjan ve Ücretler"
    >
      <div className="space-y-8">
        <p className="text-lg text-gray-700">
          2026-2027 akademik yılı eğitim ücretleri ve program bilgileri aşağıda yer almaktadır.
        </p>

        <div className="space-y-6">
          {programs.map((item) => (
            <div key={item.faculty} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-bezmialem-blue text-white p-4">
                <h2 className="text-xl font-bold">{item.faculty}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Program</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Süre</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Yıllık Ücret</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {item.programs.map((program, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-gray-900">{program.name}</td>
                        <td className="px-6 py-4 text-gray-600">{program.duration}</td>
                        <td className="px-6 py-4 text-bezmialem-blue font-bold">{program.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4 text-bezmialem-blue">💳 Ödeme Seçenekleri</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-bezmialem-gold mr-2">•</span>
                <span>Tek seferde ödeme (%5 indirim)</span>
              </li>
              <li className="flex items-start">
                <span className="text-bezmialem-gold mr-2">•</span>
                <span>2 taksit (Eylül ve Şubat)</span>
              </li>
              <li className="flex items-start">
                <span className="text-bezmialem-gold mr-2">•</span>
                <span>Banka havalesi veya kredi kartı</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4 text-bezmialem-blue">🎓 Burs İmkanları</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-bezmialem-gold mr-2">•</span>
                <span>Başarı bursu (akademik performansa göre)</span>
              </li>
              <li className="flex items-start">
                <span className="text-bezmialem-gold mr-2">•</span>
                <span>Kardeş indirimi (%10)</span>
              </li>
              <li className="flex items-start">
                <span className="text-bezmialem-gold mr-2">•</span>
                <span>Erken kayıt indirimi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h3 className="font-bold text-lg mb-2">📌 Ek Ücretler</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Başvuru ücreti: 100 USD (iade edilmez)</li>
            <li>• Kayıt ücreti: 500 USD (ilk yıl, bir kerelik)</li>
            <li>• İngilizce hazırlık programı: 5.000 USD/yıl (gerekirse)</li>
            <li>• Öğrenci sigortası: Yıllık ücrete dahildir</li>
          </ul>
        </div>

        <div className="bg-bezmialem-blue text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">💡 Önemli Notlar</h3>
          <ul className="space-y-2 text-sm">
            <li>• Ücretler USD cinsinden belirlenmiştir</li>
            <li>• Ücretler her yıl güncellenebilir</li>
            <li>• Barınma ve yaşam giderleri dahil değildir</li>
            <li>• Detaylı bilgi için ofisimizle iletişime geçin</li>
          </ul>
        </div>
      </div>
    </ContentLayout>
  );
}
