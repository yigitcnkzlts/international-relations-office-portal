import ContentLayout from '@/components/ContentLayout';

export const metadata = {
  title: 'İkili Anlaşmalar - Uluslararası İlişkiler Ofisi',
  description: 'Partner üniversiteler ve uluslararası işbirlikleri'
};

const partners = [
  { country: 'Almanya', universities: ['Heidelberg University', 'Charité Berlin'] },
  { country: 'Fransa', universities: ['Sorbonne University', 'University of Paris'] },
  { country: 'İtalya', universities: ['University of Bologna', 'Sapienza University'] },
  { country: 'İspanya', universities: ['University of Barcelona', 'Complutense Madrid'] },
  { country: 'Hollanda', universities: ['University of Amsterdam', 'Leiden University'] },
  { country: 'Belçika', universities: ['KU Leuven', 'Ghent University'] },
];

export default function AgreementsPage() {
  return (
    <ContentLayout
      breadcrumbs={[{ label: 'İkili Anlaşmalar' }]}
      title="İkili Anlaşmalar ve Partner Üniversiteler"
    >
      <div className="space-y-6">
        <p className="text-lg">
          Üniversitemiz, dünya çapında prestijli üniversitelerle ikili anlaşmalar 
          yapmış ve akademik işbirliklerini sürdürmektedir.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {partners.map((partner) => (
            <div key={partner.country} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-bezmialem-blue transition">
              <h3 className="text-xl font-bold text-bezmialem-blue mb-4 flex items-center">
                <span className="mr-2">🌍</span>
                {partner.country}
              </h3>
              <ul className="space-y-2">
                {partner.universities.map((uni) => (
                  <li key={uni} className="flex items-start">
                    <span className="text-bezmialem-gold mr-2">•</span>
                    <span>{uni}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-bezmialem-blue text-white p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-bold mb-4">İşbirliği Alanları</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">Öğrenci Değişimi</h3>
              <p className="text-blue-100 text-sm">Lisans ve lisansüstü öğrenci hareketliliği</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Personel Değişimi</h3>
              <p className="text-blue-100 text-sm">Akademik ve idari personel hareketliliği</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Ortak Araştırma</h3>
              <p className="text-blue-100 text-sm">Bilimsel araştırma projeleri</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Ortak Programlar</h3>
              <p className="text-blue-100 text-sm">Çift diploma ve ortak derece programları</p>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
