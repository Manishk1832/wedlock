'use client';

export default function myImageLoader({ src, width, quality }) {
    return `https://wedlock.vigorify.in${src}?w=${width}&q=${quality || 75}`
  }
