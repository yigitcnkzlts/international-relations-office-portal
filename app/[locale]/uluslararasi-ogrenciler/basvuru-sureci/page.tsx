import ContentLayout from '@/components/ContentLayout';

export const metadata = {
  title: 'Başvuru Süreci - Uluslararası Öğrenciler',
  description: 'Uluslararası öğrenci başvuru süreci adım adım rehber'
};

export default function ApplicationProcessPage() {
  const steps = [
    {
      number: 1,
      title: 'Online Başvuru',
      description: 'Başvuru formunu doldurun ve sisteme yükleyin',
      details: ['Kişisel bilgilerinizi girin', 'Program seçimi yapın', 'Başvuru formunu kaydedin']
    },
    {
      number: 2,
      title: 'Belge Yükleme',
      description: 'Gerekli belgeleri sisteme yükleyin',
      details: ['Diploma ve transkript', 'Pasaport fotokopisi', 'Dil belgesi (varsa)', 'Sağlık raporu']
    },
    {
      number: 3,
      title: 'Başvuru Ücreti',
      description: 'Başvuru ücretini ödeyin',
      details: ['Ödeme talimatlarını takip edin', 'Dekont/makbuzu saklayın']
    },
    {
      number: 4,
      title: 'Değerlendirme',
      description: 'Başvurunuz değerlendirilir',
      details: ['Belgeler kontrol edilir', 'Akademik değerlendirme yapılır', '2-4 hafta sürer']
    },
    {
      number: 5,
      title: 'Kabul Mektubu',
      description: 'Kabul durumunuz bildirilir',
      details: ['E-posta ile bildirim', 'Kabul mektubu gönderilir', 'Kayıt talimatları verilir']
    },
    {
      number: 6,
      title: 'Kayıt İşlemleri',
      description: 'Kesin kayıt için gerekli işlemler',
      details: ['Orijinal belgeleri getirin', 'Kayıt ücretini ödeyin', 'Öğrenci kartınızı alın']
    }
  ];

  return (
    <ContentLayout
      breadcrumbs={[
        { label: 'Uluslararası Öğrenciler', href: '/uluslararasi-ogrenciler' },
        { label: 'Başvuru Süreci' }
      ]}
      title="Başvuru Süreci"
    >
      <div className="space-y-8">
        <p className="text-lg text-gray-700">
          Bezmialem Vakıf Üniversitesi'ne uluslararası öğrenci olarak başvuru sürecini 
          adım adım takip edin.
        </p>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index !== steps.length - 1 && (
                <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-bezmialem-blue/20" />
              )}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-bezmialem-blue text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1 bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-bezmialem-blue transition">
                  <h3 className="text-2xl font-bold text-bezmialem-blue mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-bezmialem-gold mr-2">✓</span>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border-l-4 border-bezmialem-blue p-6 rounded-r-lg mt-8">
          <h3 className="font-bold text-lg mb-2">💡 Önemli Bilgi</h3>
          <p className="text-gray-700">
            Başvuru sürecinde herhangi bir sorunuz olursa, Uluslararası İlişkiler Ofisi 
            ile iletişime geçebilirsiniz. Size yardımcı olmaktan mutluluk duyarız.
          </p>
        </div>
      </div>
    </ContentLayout>
  );
}
