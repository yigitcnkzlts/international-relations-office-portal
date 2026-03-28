import ContentLayout from '@/components/ContentLayout';

export const metadata = {
  title: 'Erasmus+ - Uluslararası İlişkiler Ofisi',
  description: 'Erasmus+ öğrenci ve personel değişim programları hakkında bilgi'
};

export default function ErasmusPage() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: 'Erasmus+' }]}
      title="Erasmus+ Programı"
    >
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Erasmus+ Nedir?</h2>
          <p className="text-lg leading-relaxed mb-4">
            Erasmus+, Avrupa Birliği'nin eğitim, öğretim, gençlik ve spor alanlarında sunduğu 
            en büyük değişim programıdır. Üniversitemiz, Erasmus+ programına aktif olarak 
            katılmakta ve öğrencilerimize Avrupa'nın prestijli üniversitelerinde eğitim görme 
            fırsatı sunmaktadır.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl mb-2">🎓</div>
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm">Partner Üniversite</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl mb-2">✈️</div>
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm">Yıllık Hareketlilik</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl mb-2">🌍</div>
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm">Avrupa Ülkesi</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="text-5xl mr-4">🎓</div>
              <h2 className="text-2xl font-bold text-brand-blue">Öğrenci Öğrenim Hareketliliği</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Partner üniversitelerde 1-2 dönem (3-10 ay) eğitim alma imkanı
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Kimler Başvurabilir?</h3>
                <p className="text-sm text-gray-600">En az 1 yıl tamamlamış, min. 2.50 GPA, B1 dil seviyesi</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Hibe Miktarı</h3>
                <p className="text-sm text-gray-600">490-600 EUR/ay + seyahat desteği (180-1.100 EUR)</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Başvuru Dönemi</h3>
                <p className="text-sm text-gray-600">Güz: Şubat-Mart | Bahar: Eylül-Ekim</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Avantajlar</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Akademik tanınma (ECTS kredileri)</li>
                  <li>• Harç muafiyeti (ev üniversitesine ödeme)</li>
                  <li>• Kültürel deneyim ve dil gelişimi</li>
                  <li>• Uluslararası ağ oluşturma</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="text-5xl mr-4">💼</div>
              <h2 className="text-2xl font-bold text-brand-blue">Öğrenci Staj Hareketliliği</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Avrupa'da hastane, klinik veya araştırma merkezlerinde 2-12 ay staj yapma fırsatı
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Kimler Başvurabilir?</h3>
                <p className="text-sm text-gray-600">Tüm sınıf öğrencileri ve yeni mezunlar (1 yıl içinde)</p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Hibe Miktarı</h3>
                <p className="text-sm text-gray-600">540-650 EUR/ay + seyahat desteği</p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Staj Süreleri</h3>
                <p className="text-sm text-gray-600">Minimum 2 ay - Maksimum 12 ay</p>
              </div>
              <div className="bg-green-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Avantajlar</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mesleki gelişim ve iş deneyimi</li>
                  <li>• Avrupa sağlık sistemini tanıma</li>
                  <li>• CV\'ye değer katma</li>
                  <li>• Kariyer ağı oluşturma</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="text-5xl mr-4">👨‍🏫</div>
              <h2 className="text-2xl font-bold text-brand-blue">Personel Ders Verme</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Akademik personel için partner üniversitelerde ders verme hareketliliği
            </p>
            <div className="space-y-3">
              <div className="bg-purple-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Kimler Başvurabilir?</h3>
                <p className="text-sm text-gray-600">Öğretim üyeleri ve öğretim görevlileri</p>
              </div>
              <div className="bg-purple-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Hibe Miktarı</h3>
                <p className="text-sm text-gray-600">140-180 EUR/gün (ülkeye göre değişir)</p>
              </div>
              <div className="bg-purple-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Süre</h3>
                <p className="text-sm text-gray-600">Minimum 2 gün - Maksimum 5 gün (min. 8 saat ders)</p>
              </div>
              <div className="bg-purple-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Avantajlar</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bilgi ve deneyim paylaşımı</li>
                  <li>• Akademik işbirliği geliştirme</li>
                  <li>• Farklı eğitim sistemlerini tanıma</li>
                  <li>• Ortak proje fırsatları</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-orange-200 rounded-lg p-6 hover:shadow-xl transition">
            <div className="flex items-center mb-4">
              <div className="text-5xl mr-4">📚</div>
              <h2 className="text-2xl font-bold text-brand-blue">Personel Eğitim Alma</h2>
            </div>
            <p className="text-gray-700 mb-4">
              İdari ve akademik personel için mesleki gelişim eğitimi alma hareketliliği
            </p>
            <div className="space-y-3">
              <div className="bg-orange-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Kimler Başvurabilir?</h3>
                <p className="text-sm text-gray-600">Tüm akademik ve idari personel</p>
              </div>
              <div className="bg-orange-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Hibe Miktarı</h3>
                <p className="text-sm text-gray-600">140-180 EUR/gün + seyahat desteği</p>
              </div>
              <div className="bg-orange-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Süre</h3>
                <p className="text-sm text-gray-600">Minimum 2 gün - Maksimum 5 gün</p>
              </div>
              <div className="bg-orange-50 p-3 rounded">
                <h3 className="font-bold text-sm text-brand-blue mb-1">Avantajlar</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mesleki beceri geliştirme</li>
                  <li>• İyi uygulama örnekleri öğrenme</li>
                  <li>• Kurumsal kapasite artırma</li>
                  <li>• Uluslararası ağ oluşturma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-blue text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="mr-3">📝</span>
            Başvuru Süreci (Öğrenci Hareketliliği)
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3 text-lg">Adım Adım Başvuru</h3>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="bg-white text-brand-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">1</span>
                  <span>Bölüm Erasmus Koordinatörünüzle görüşün</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white text-brand-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">2</span>
                  <span>Partner üniversiteleri araştırın ve tercih yapın</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white text-brand-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">3</span>
                  <span>Online başvuru formunu doldurun</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white text-brand-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">4</span>
                  <span>Gerekli belgeleri hazırlayın (transkript, dil belgesi, motivasyon mektubu)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white text-brand-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">5</span>
                  <span>Öğrenim Anlaşması (Learning Agreement) hazırlayın</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white text-brand-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">6</span>
                  <span>Seçim sonuçlarını bekleyin (2-3 hafta)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white text-brand-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">7</span>
                  <span>Kabul edilirseniz ev sahibi üniversiteye başvurun</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white text-brand-blue rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 font-bold">8</span>
                  <span>Hibe sözleşmesini imzalayın ve hareketliliğe başlayın</span>
                </li>
              </ol>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-lg">Gerekli Belgeler</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span>Güncel transkript (not ortalaması görünür)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span>Dil yeterlilik belgesi (İngilizce B1 veya üzeri)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span>Motivasyon mektubu (İngilizce, 1 sayfa)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span>Öğrenim Anlaşması (Learning Agreement)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span>Pasaport fotokopisi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-gold mr-2">✓</span>
                  <span>Özgeçmiş (CV)</span>
                </li>
              </ul>
              <div className="mt-6 bg-white/10 p-4 rounded">
                <h3 className="font-bold mb-2">Seçim Kriterleri</h3>
                <ul className="text-sm space-y-1">
                  <li>• Akademik başarı (%40)</li>
                  <li>• Dil yeterliliği (%30)</li>
                  <li>• Motivasyon ve uygunluk (%30)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h3 className="font-bold text-lg mb-3 flex items-center">
            <span className="mr-2">💡</span>
            Önemli Bilgiler
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Erasmus+ hareketliliği için ev üniversitenize () harç ödersiniz, ev sahibi üniversiteye harç ödemezsiniz</li>
            <li>• Aldığınız dersler ECTS kredisi olarak tanınır ve diplomanıza işlenir</li>
            <li>• Hareketlilik süresince  öğrencisi olarak kalmaya devam edersiniz</li>
            <li>• Sağlık sigortası zorunludur (Avrupa Sağlık Sigortası Kartı önerilir)</li>
            <li>• Vize işlemleri için erken başvuru yapmanız önerilir (2-3 ay önceden)</li>
            <li>• Hareketlilik öncesi ve sonrası online raporlar doldurmanız gerekmektedir</li>
          </ul>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-brand-blue mb-4">İletişim ve Destek</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">Kurumsal Erasmus Koordinatörü</h3>
              <p className="text-sm text-gray-700">
                <strong>E-posta:</strong> erasmus@.edu.tr<br />
                <strong>Tel:</strong> +90 (212) 453 17 00 / 1234
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Bölüm Koordinatörleri</h3>
              <p className="text-sm text-gray-700">
                Her fakülte ve bölümün kendi Erasmus koordinatörü bulunmaktadır.<br />
                Bölüm koordinatörünüzün iletişim bilgileri için web sitemizi ziyaret edin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
