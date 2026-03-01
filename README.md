# Bezmialem Uluslararası İlişkiler Ofisi Web Sitesi

Modern, hızlı ve kullanıcı odaklı bir web platformu geliştirdim.

## 🎯 Proje Hedefi

Karmaşık navigasyon ve yoğun menü yapısını ortadan kaldırarak, özellikle uluslararası öğrenciler ve Erasmus adaylarının ihtiyaç duyduğu bilgilere **maksimum 2-3 tıklama** ile ulaşabildiği modern bir deneyim sunmak.

## 💻 Kullandığım Teknolojiler

- **Next.js 14** - React tabanlı modern framework (App Router, SSR)
- **React 18** - Component-based UI geliştirme
- **TypeScript** - Tip güvenliği ve daha az hata
- **Tailwind CSS** - Hızlı ve tutarlı styling
- **next-intl** - Çoklu dil desteği (TR/EN)

## ✨ Özellikler

- ⚡ Server-Side Rendering (SSR) ile hızlı yükleme
- 🎨 Responsive tasarım (mobil öncelikli)
- 🌍 SEO optimize edilmiş yapı
- ♿ Erişilebilirlik standartları (ARIA, klavye navigasyonu)
- 🚀 Performans optimizasyonları (lazy loading, image optimization)
- 🌐 İki dilli destek (Türkçe/İngilizce)

## 📦 Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda: http://localhost:3000/tr

## 🏗️ Proje Yapısı

```
app/[locale]/              # Dil bazlı routing (tr/en)
├── page.tsx               # Ana sayfa
├── hakkimizda/            # Hakkımızda
├── erasmus/               # Erasmus programı
├── uluslararasi-ogrenciler/  # Uluslararası öğrenciler bölümü
├── anlasmalar/            # İkili anlaşmalar
├── duyurular/             # Duyurular ve detay sayfaları
├── sss/                   # Sıkça sorulan sorular
└── iletisim/              # İletişim formu

components/                # Yeniden kullanılabilir React bileşenleri
├── Header.tsx             # Responsive menü
├── Footer.tsx             # Alt bilgi
├── Hero.tsx               # Ana sayfa hero alanı
├── QuickAccessCards.tsx   # Hızlı erişim kartları
├── AnnouncementList.tsx   # Duyuru listesi
├── FAQSection.tsx         # Accordion SSS
└── ...

data/                      # Veri dosyaları
messages/                  # Çeviri dosyaları (tr.json, en.json)
```

## 📄 Sayfalar

13 sayfa geliştirdim:
- Ana Sayfa (Hero, Hızlı Erişim, Duyurular, SSS)
- Hakkımızda
- Erasmus Programı
- Uluslararası Öğrenciler (5 alt sayfa)
- İkili Anlaşmalar
- Duyurular + Detay Sayfaları
- SSS
- İletişim

## 🎨 Tasarım

- **Bezmialem Mavi**: `#003d82`
- **Bezmialem Altın**: `#c5a572`
- Sistem fontları (hızlı yükleme)
- Mobile-first yaklaşım

## 🚀 Production

```bash
npm run build
npm start
```

## 📄 Lisans

© 2026 Bezmialem Vakıf Üniversitesi
