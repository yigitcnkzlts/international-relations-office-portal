import ContentLayout from '@/components/ContentLayout';

export const metadata = {
  title: 'İkamet İzni İşlemleri - Uluslararası Öğrenciler',
  description: 'Öğrenci ikamet izni başvuru süreci ve gerekli belgeler'
};

export default function ResidencePermitPage() {
  return (
    <ContentLayout
      breadcrumbs={[
        { label: 'Uluslararası Öğrenciler', href: '/uluslararasi-ogrenciler' },
        { label: 'İkamet İzni' }
      ]}
      title="Öğrenci İkamet İzni İşlemleri"
    >
      <div className="space-y-8">
        <p className="text-lg text-gray-700">
          Türkiye'de eğitim görecek uluslararası öğrencilerin öğrenci ikamet izni alması 
          zorunludur. İşlemler kayıt tamamlandıktan sonra başlatılır.
        </p>

        <div className="bg-blue-50 border-l-4 border-brand-blue p-6 rounded-r-lg">
          <h3 className="font-bold text-lg mb-2">⏰ Süreç ve Zaman Çizelgesi</h3>
          <p className="text-gray-700">
            İkamet izni başvurusu Türkiye'ye girişten sonra 30 gün içinde yapılmalıdır. 
            İşlem süresi ortalama 4-6 haftadır.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-brand-blue mb-4">📋 Gerekli Belgeler</h2>
            <ul className="space-y-3">
              {[
                'Pasaport (en az 60 gün geçerlilik süresi)',
                'Öğrenci belgesi (üniversiteden alınacak)',
                'Kayıt belgesi',
                '4 adet biyometrik fotoğraf',
                'İkamet izni başvuru formu',
                'Sağlık sigortası poliçesi',
                'İkamet adresi belgesi',
                'Harç ücreti makbuzu'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-brand-gold mr-2 text-xl">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-brand-blue mb-4">🔄 Başvuru Süreci</h2>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Randevu Alma',
                  desc: 'e-ikamet.goc.gov.tr adresinden online randevu alın'
                },
                {
                  step: '2',
                  title: 'Belge Hazırlığı',
                  desc: 'Tüm gerekli belgeleri hazırlayın ve fotokopilerini çıkarın'
                },
                {
                  step: '3',
                  title: 'Başvuru',
                  desc: 'İl Göç İdaresi Müdürlüğü\'ne randevu saatinde gidin'
                },
                {
                  step: '4',
                  title: 'Biyometrik İşlemler',
                  desc: 'Parmak izi ve fotoğraf işlemleri yapılır'
                },
                {
                  step: '5',
                  title: 'Takip',
                  desc: 'Başvuru durumunuzu online sistemden takip edin'
                },
                {
                  step: '6',
                  title: 'Teslim Alma',
                  desc: 'İkamet kartınızı belirtilen adresten teslim alın'
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-blue">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-brand-blue">💰 Ücretler</h3>
              <ul className="space-y-2 text-sm">
                <li>• İkamet izni başvuru ücreti: ~1.500 TL</li>
                <li>• Kart ücreti: ~200 TL</li>
                <li>• Ücretler yıllık güncellenir</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4 text-brand-blue">📍 Başvuru Yeri</h3>
              <p className="text-sm text-gray-700">
                <strong>Fatih İlçe Göç İdaresi Müdürlüğü</strong><br />
                Adres bilgisi ve iletişim detayları<br />
                için ofisimizle iletişime geçin.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-brand-blue text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">🤝 Uluslararası İlişkiler Ofisi Desteği</h3>
          <p className="mb-4">
            Ofisimiz ikamet izni sürecinde size aşağıdaki konularda yardımcı olur:
          </p>
          <ul className="space-y-2 text-sm">
            <li>• Gerekli belgelerin hazırlanması</li>
            <li>• Randevu alma sürecinde rehberlik</li>
            <li>• Başvuru formlarının doldurulması</li>
            <li>• Süreç takibi ve danışmanlık</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h3 className="font-bold text-lg mb-2">⚠️ Önemli Uyarılar</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• İkamet izni olmadan Türkiye'de kalamazsınız</li>
            <li>• Süre dolmadan yenileme işlemlerini başlatın</li>
            <li>• Adres değişikliklerini 20 gün içinde bildirin</li>
            <li>• İkamet kartınızı her zaman yanınızda taşıyın</li>
          </ul>
        </div>
      </div>
    </ContentLayout>
  );
}
