'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-100 py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href={`/${locale}`} className="text-brand-blue hover:underline focus-visible-ring">
              {t('home')}
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              {item.href ? (
                <Link href={item.href} className="text-brand-blue hover:underline focus-visible-ring">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-600" aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
