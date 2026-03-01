import { getTranslations } from 'next-intl/server';
import ContentLayout from '@/components/ContentLayout';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: 'Hakkımızda - Uluslararası İlişkiler Ofisi',
    description: 'Bezmialem Vakıf Üniversitesi Uluslararası İlişkiler Ofisi hakkında bilgi'
  };
}

export default function AboutPage() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: 'Hakkımızda' }]}
      title="Uluslararası İlişkiler Ofisi"
    >
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-bezmialem-blue to-blue-700 text-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Bezmialem Vakıf Üniversitesi</h2>
          <p className="text-lg leading-relaxed">
            1845 yılında Valide Sultan Bezmialem tarafından kurulan Bezmialem Vakfı'nın bir parçası olan 
            üniversitemiz, 180 yıllık köklü bir geçmişe sahiptir. Sağlık bilimleri alanında öncü bir 
            kurum olarak, ulusal ve uluslararası düzeyde kaliteli eğitim ve araştırma faaliyetleri 
            yürütmekteyiz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-bezmialem-blue">
            <div className="text-4xl mb-3">🎓</div>
            <h3 className="text-xl font-bold text-bezmialem-blue mb-2">4 Fakülte</h3>
            <p className="text-sm text-gray-700">Tıp, Diş Hekimliği, Eczacılık, Sağlık Bilimleri</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <div className="text-4xl mb-3">🌍</div>
            <h3 className="text-xl font-bold text-bezmialem-blue mb-2">50+ Ülke</h3>
            <p className="text-sm text-gray-700">Partner üniversiteler ve uluslararası öğrenciler</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-xl font-bold text-bezmialem-blue mb-2">100+ Anlaşma</h3>
            <p className="text-sm text-gray-700">Erasmus+ ve ikili işbirliği anlaşmaları</p>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-bezmialem-blue mb-4 flex items-center">
            <span className="mr-3">🎯</span>
            Misyonumuz
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Bezmialem Vakıf Üniversitesi Uluslararası İlişkiler Ofisi olarak, üniversitemizin küresel 
            akademik camiada görünürlüğünü artırmak, öğrenci ve akademik personel hareketliliğini 
            desteklemek, uluslararası işbirlikleri geliştirmek ve farklı kültürlerden gelen öğrencilere 
            kaliteli eğitim imkanı sunarak küresel sağlık profesyonelleri yetiştirmek temel misyonumuzdur.
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-bezmialem-blue mb-4 flex items-center">
            <span className="mr-3">🔭</span>
            Vizyonumuz
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Sağlık bilimleri alanında uluslararası standartlarda eğitim ve araştırma faaliyetleri 
            yürüten, küresel akademik ağlarda aktif rol oynayan, farklı kültürleri bir araya getiren 
            ve dünya çapında tanınan bir üniversite olmak.
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-bezmialem-blue mb-6 flex items-center">
            <span className="mr-3">📋</span>
            Görev ve Sorumluluklarımız
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-bezmialem-blue mb-3">Öğrenci Hizmetleri</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-bezmialem-gold mr-2">✓</span>
                  <span>Uluslararası öğrenci başvuru ve kayıt işlemleri</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bezmialem-gold mr-2">✓</span>
                  <span>Erasmus+ öğrenci değişim programı koordinasyonu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bezmialem-gold mr-2">✓</span>
                  <span>Oryantasyon ve adaptasyon programları</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bezmialem-gold mr-2">✓</span>
                  <span>İkamet izni ve vize süreçlerinde destek</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bezmialem-gold mr-2">✓</span>
                  <span>Akademik danışmanlık ve rehberlik</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-bezmialem-blue mb-3">Kurumsal İşbirlikleri</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-bezmialem-gold mr-2">✓</span>
                  <span>İkili anlaşmaların geliştirilmesi ve yönetimi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bezmialem-gold mr-2">✓</span>
                  <span>Erasmus+ personel hareketliliği koordinasyonu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bezmialem-gold mr-2">✓</span>
                  <span>Uluslararası proje ve hibe başvuruları</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bezmialem-gold mr-2">✓</span>
                  <span>Akademik ziyaret ve konuk öğretim üyesi programları</span>
                </li>
                <li className="flex items-start">
                  <span className="text-bezmialem-gold mr-2">✓</span>
                  <span>Uluslararası konferans ve etkinlik organizasyonu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-bezmialem-blue to-blue-800 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">İletişim Bilgilerimiz</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">Adres</h3>
              <p className="text-blue-100 text-sm">
                Bezmialem Vakıf Üniversitesi<br />
                Uluslararası İlişkiler Ofisi<br />
                Adnan Menderes Bulvarı (Vatan Cad.)<br />
                34093 Fatih/İstanbul, Türkiye
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">İletişim</h3>
              <p className="text-blue-100 text-sm">
                <strong>Tel:</strong> +90 (212) 453 17 00<br />
                <strong>E-posta:</strong> international@bezmialem.edu.tr<br />
                <strong>Çalışma Saatleri:</strong> Pzt-Cum 09:00-17:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
