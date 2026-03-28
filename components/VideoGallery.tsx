'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

// Video galerisi - Bezmialem tanıtım videolarını gösteriyorum
export default function VideoGallery() {
  const t = useTranslations('videos');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // YouTube video ID'leri
  const videos = [
    {
      id: 'v5gjH6sVASk',
      title: 'Bezmialem Tanıtım Videosu 1',
      thumbnail: 'https://img.youtube.com/vi/v5gjH6sVASk/maxresdefault.jpg'
    },
    {
      id: 'mJjrD4EoIk0',
      title: 'Bezmialem Tanıtım Videosu 2',
      thumbnail: 'https://img.youtube.com/vi/mJjrD4EoIk0/maxresdefault.jpg'
    },
    {
      id: 'SsYJkQJs-uY',
      title: 'Bezmialem Tanıtım Videosu 3',
      thumbnail: 'https://img.youtube.com/vi/SsYJkQJs-uY/maxresdefault.jpg'
    },
    {
      id: 'xur-m6SI8N8',
      title: 'Bezmialem Tanıtım Videosu 4',
      thumbnail: 'https://img.youtube.com/vi/xur-m6SI8N8/maxresdefault.jpg'
    },
    {
      id: '0x-zXBqYYlo',
      title: 'Bezmialem Tanıtım Videosu 5',
      thumbnail: 'https://img.youtube.com/vi/0x-zXBqYYlo/maxresdefault.jpg'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-blue">
          {t('title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setSelectedVideo(video.id)}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 focus-visible-ring"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-semibold text-sm">{video.title}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Video Modal - tıklayınca açılıyor */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl font-bold focus-visible-ring"
                aria-label="Kapat"
              >
                ×
              </button>
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
