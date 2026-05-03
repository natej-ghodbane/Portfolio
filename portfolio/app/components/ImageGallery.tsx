'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type ImageGalleryVariant = 'default' | 'hover';

type ImageGalleryProps = {
  variant?: ImageGalleryVariant;
  images?: string[];
};

const DEFAULT_IMAGES = [
  '/image1.png',
  '/image2.png',
  '/image3.png',
  '/image4.png',
  '/image5.png',
];

export default function ImageGallery({
  variant = 'default',
  images = DEFAULT_IMAGES,
}: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slideshow every 1.5 seconds
  useEffect(() => {
    if (!isAutoPlaying || variant !== 'hover') return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, variant, images.length]);

  if (variant === 'hover') {
    return (
      <div className="image-gallery-hover">
        <div className="slideshow-container">
          <div className="slideshow-image-wrapper">
            <Image
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`Screenshot ${currentImageIndex + 1}`}
              fill
              className="slideshow-image"
              sizes="(max-width: 768px) 280px, 340px"
              quality={85}
              priority
            />
          </div>
        </div>

        <div className="slideshow-footer">
          <div className="progress-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`progress-dot ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsAutoPlaying(false);
                }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          <div className="slideshow-label">Auto preview</div>
        </div>
      </div>
    );
  }

  // Default variant - lightbox mode
  return (
    <div className="image-gallery">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            key={index}
            className="gallery-thumbnail"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Open image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="thumbnail-image"
              sizes="120px"
              quality={60}
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="lightbox" onClick={() => setSelectedIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedIndex]}
              alt={`Full size image ${selectedIndex + 1}`}
              fill
              className="lightbox-image"
              sizes="90vw"
              quality={90}
            />
            <button
              className="lightbox-close"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>
            <div className="lightbox-nav">
              <button
                className="lightbox-prev"
                onClick={() =>
                  setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
                }
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="lightbox-next"
                onClick={() => setSelectedIndex((selectedIndex + 1) % images.length)}
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
