import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// next-intl konfigürasyonu - çeviri dosyalarını yüklüyorum
export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  
  // Geçersiz dil kontrolü - sadece tr ve en destekliyorum
  if (!locale || !['tr', 'en'].includes(locale)) {
    notFound(); // 404 sayfasına yönlendir
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default // Çeviri dosyasını yükle
  };
});
