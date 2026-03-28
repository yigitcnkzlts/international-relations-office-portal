'use client';

import { useState } from 'react';
import ContentLayout from '@/components/ContentLayout';
import { faqs } from '@/data/faqs';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ContentLayout
      breadcrumbs={[{ label: 'Sıkça Sorulan Sorular' }]}
      title="Sıkça Sorulan Sorular"
    >
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition focus-visible-ring"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-brand-blue pr-4 text-lg">
                {faq.question}
              </span>
              <svg
                className={`w-6 h-6 text-brand-blue transition-transform flex-shrink-0 ${
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
              <div className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </ContentLayout>
  );
}
