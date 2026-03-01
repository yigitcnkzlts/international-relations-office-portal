'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

// Dil değiştirici - TR/EN arasında geçiş yapıyorum
export default function LanguageSwitcher() {
  const locale = useLocale(); // Aktif dil
  const pathname = usePathname(); // Mevcut sayfa yolu
  const router = useRouter(); // Router

  // Dil değiştirme fonksiyonu - URL'deki dil kodunu değiştiriyorum
  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center space-x-2 bg-white/10 rounded px-2 py-1">
      <button
        onClick={() => switchLocale('tr')}
        className={`px-2 py-1 text-sm rounded transition focus-visible-ring ${
          locale === 'tr' ? 'bg-white text-bezmialem-blue font-semibold' : 'hover:bg-white/20'
        }`}
        aria-label="Türkçe"
      >
        TR
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 text-sm rounded transition focus-visible-ring ${
          locale === 'en' ? 'bg-white text-bezmialem-blue font-semibold' : 'hover:bg-white/20'
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
