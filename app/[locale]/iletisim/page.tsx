'use client';

import { useState } from 'react';
import ContentLayout from '@/components/ContentLayout';

// İletişim sayfası - form ve iletişim bilgilerini gösteriyorum
export default function ContactPage() {
  // Form verilerini state'te tutuyorum
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Form gönderme işlemi (demo amaçlı)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form gönderildi! (Demo amaçlı)');
  };

  return (
    <ContentLayout
      breadcrumbs={[{ label: 'İletişim' }]}
      title="İletişim"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-bezmialem-blue mb-4">İletişim Bilgileri</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-bold">Adres</h3>
                <p className="text-gray-700">
                  Bezmialem Vakıf Üniversitesi<br />
                  Uluslararası İlişkiler Ofisi<br />
                  Adnan Menderes Bulvarı (Vatan Cad.)<br />
                  34093 Fatih/İstanbul
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl">📞</span>
              <div>
                <h3 className="font-bold">Telefon</h3>
                <p className="text-gray-700">+90 (212) 453 17 00</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="font-bold">E-posta</h3>
                <p className="text-gray-700">international@bezmialem.edu.tr</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-2xl">🕐</span>
              <div>
                <h3 className="font-bold">Çalışma Saatleri</h3>
                <p className="text-gray-700">
                  Pazartesi - Cuma: 09:00 - 17:00<br />
                  Cumartesi - Pazar: Kapalı
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-bold text-lg mb-4">Harita</h3>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Google Maps entegrasyonu buraya eklenebilir</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-bezmialem-blue mb-4">İletişim Formu</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                Ad Soyad <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-bezmialem-blue focus:outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                E-posta <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-bezmialem-blue focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block font-semibold mb-2">
                Konu <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-bezmialem-blue focus:outline-none"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold mb-2">
                Mesajınız <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={6}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-bezmialem-blue focus:outline-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-bezmialem-blue hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition focus-visible-ring"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </ContentLayout>
  );
}
