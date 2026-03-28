'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

// Üst menü bileşeni - responsive tasarım ve dil desteği ile geliştirdim
export default function Header() {
  const t = useTranslations('nav'); // Çeviri fonksiyonu
  const locale = useLocale(); // Aktif dil (tr/en)
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobil menü durumu

  // Navigasyon menü öğelerini tanımladım
  const navItems = [
    { key: 'home', href: `/${locale}` },
    { key: 'about', href: `/${locale}/hakkimizda` },
    { key: 'erasmus', href: `/${locale}/erasmus` },
    { key: 'international', href: `/${locale}/uluslararasi-ogrenciler` },
    { key: 'agreements', href: `/${locale}/anlasmalar` },
    { key: 'announcements', href: `/${locale}/duyurular` },
    { key: 'faq', href: `/${locale}/sss` },
    { key: 'contact', href: `/${locale}/iletisim` },
  ];

  return (
    <header className="bg-brand-blue text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${locale}`} className="flex items-center space-x-3 focus-visible-ring">
            <div className="text-xl font-bold">
              Bezmialem<br />
              <span className="text-brand-gold text-sm">Uluslararası İlişkiler</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="px-3 py-2 rounded hover:bg-white/10 transition focus-visible-ring text-sm"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 focus-visible-ring"
              aria-label="Menü"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-white/20 mt-2 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block px-4 py-3 hover:bg-white/10 transition focus-visible-ring"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
