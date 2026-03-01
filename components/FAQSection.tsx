'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { faqs } from '@/data/faqs';

// SSS bölümü - accordion yapısı ile soru-cevapları gösteriyorum
export default function FAQSection() {
  const t = useTranslations('faq'); // SSS çevirileri
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Açık olan soru indexi

  const topFaqs = faqs.slice(0, 6); // İlk 6 SSS

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-bezmialem-blue">
          {t('title')}
        </h2>
        <div className="space-y-4">
          {topFaqs.map((faq, index) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition focus-visible-ring"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-bezmialem-blue pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-bezmialem-blue transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
