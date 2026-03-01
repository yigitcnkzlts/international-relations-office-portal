import ContentLayout from '@/components/ContentLayout';

export const metadata = {
  title: 'Gerekli Belgeler - Uluslararası Öğrenciler',
  description: 'Başvuru için gerekli belgeler listesi'
};

export default function RequiredDocumentsPage() {
  const documents = [
    {
      category: 'Akademik Belgeler',
      icon: '🎓',
      items: [
        {
          name: 'Lise Diploması',
          description: 'Apostil veya noter onaylı tercüme ile birlikte',
          required: true
        },
        {
          name: 'Transkript',
          description: 'Tüm not dökümü (apostil veya noter onaylı)',
          required: true
        },
        {
          name: 'Üniversite Diploması',
          description: 'Lisansüstü başvurular için (apostil veya noter onaylı)',
          required: false
        }
      ]
    },
    {
      category: 'Kimlik Belgeleri',
      icon: '🆔',
      items: [
        {
          name: 'Pasaport Fotokopisi',
          description: 'Geçerli pasaport, tüm sayfalar',
          required: true
        },
        {
          name: 'Fotoğraflar',
          description: '4 adet biyometrik fotoğraf (son 6 ay içinde çekilmiş)',
          required: true
        }
      ]
    },
    {
      category: 'Dil Yeterlilik Belgeleri',
      icon: '🗣️',
      items: [
        {
          name: 'İngilizce Yeterlilik',
          description: 'TOEFL, IELTS veya eşdeğeri (varsa)',
          required: false
        },
        {
          name: 'Türkçe Yeterlilik',
          description: 'TÖMER veya eşdeğeri (Türkçe programlar için)',
          required: false
        }
      ]
    },
    {
      category: 'Sağlık Belgeleri',
      icon: '🏥',
      items: [
        {
          name: 'Sağlık Raporu',
          description: 'Genel sağlık durumu raporu',
          required: true
        },
        {
          name: 'Aşı Kartı',
          description: 'Güncel aşı kayıtları',
          required: true
        }
      ]
    },
    {
      category: 'Diğer Belgeler',
      icon: '📋',
      items: [
        {
          name: 'Motivasyon Mektubu',
          description: 'Neden bu programı seçtiğinizi açıklayan mektup',
          required: false
        },
        {
          name: 'Referans Mektupları',
          description: '2 adet akademik referans mektubu',
          required: false
        },
        {
          name: 'Mali Durum Belgesi',
          description: 'Eğitim masraflarını karşılayabileceğinizi gösteren belge',
          required: true
        }
      ]
    }
  ];

  return (
    <ContentLayout
      breadcrumbs={[
        { label: 'Uluslararası Öğrenciler', href: '/uluslararasi-ogrenciler' },
        { label: 'Gerekli Belgeler' }
      ]}
      title="Gerekli Belgeler"
    >
      <div className="space-y-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h3 className="font-bold text-lg mb-2">⚠️ Önemli Uyarı</h3>
          <p className="text-gray-700">
            Tüm yabancı dilde düzenlenmiş belgeler Türkçe'ye çevrilmeli ve noter onaylı 
            veya apostil ile tasdik edilmelidir. Belgelerin orijinalleri kayıt sırasında 
            kontrol edilecektir.
          </p>
        </div>

        <div className="space-y-6">
          {documents.map((doc) => (
            <div key={doc.category} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-bezmialem-blue to-blue-700 text-white p-4">
                <h2 className="text-2xl font-bold flex items-center">
                  <span className="mr-3 text-3xl">{doc.icon}</span>
                  {doc.category}
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {doc.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg text-bezmialem-blue">
                            {item.name}
                          </h3>
                          {item.required && (
                            <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded">
                              Zorunlu
                            </span>
                          )}
                          {!item.required && (
                            <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded">
                              İsteğe Bağlı
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-bezmialem-blue text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">📥 Belge Teslimi</h3>
          <p className="mb-4">
            Belgelerinizi aşağıdaki yöntemlerle teslim edebilirsiniz:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Online başvuru sistemi üzerinden dijital yükleme</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Posta yoluyla gönderim (kayıtlı kargo)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Elden teslim (Uluslararası İlişkiler Ofisi)</span>
            </li>
          </ul>
        </div>
      </div>
    </ContentLayout>
  );
}
