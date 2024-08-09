'use client';

export default function myImageLoader({ src, width, quality }) {
    return `https://wedlock.au${src}?w=${width}&q=${quality || 75}`
  }
