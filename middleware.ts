import createMiddleware from 'next-intl/middleware';

// Next.js middleware - dil yönlendirmesi yapıyorum
// Kullanıcı /tr veya /en ile başlamayan bir URL'ye girerse otomatik olarak /tr'ye yönlendiriyorum
export default createMiddleware({
  locales: ['tr', 'en'], // Desteklenen diller
  defaultLocale: 'tr' // Varsayılan dil Türkçe
});

// Middleware'in hangi sayfalarda çalışacağını belirliyorum
export const config = {
  matcher: ['/', '/(tr|en)/:path*'] // Ana sayfa ve tüm dil sayfaları
};
