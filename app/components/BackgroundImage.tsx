import React, { useEffect, useRef } from 'react';

interface BackgroundImageProps {
  src: string;
  alt: string;
}

export default function BackgroundImage({ src, alt }: BackgroundImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  // Tối ưu hóa LCP
  useEffect(() => {
    if (!imgRef.current) return;

    // Đánh dấu hình ảnh là quan trọng
    imgRef.current.setAttribute('fetchpriority', 'high');
    
    // Tải trước hình ảnh
    const preloadImg = new Image();
    preloadImg.src = src;
    preloadImg.onload = () => {
      console.log('Hình ảnh đã được tải xong:', src);
      if (imgRef.current) {
        // Đảm bảo hình ảnh hiển thị ngay lập tức
        imgRef.current.style.visibility = 'visible';
        imgRef.current.style.opacity = '1';
        
        // Thêm class để đánh dấu đã tải xong
        imgRef.current.classList.add('loaded');
      }
    };
    
    preloadImg.onerror = (error) => {
      console.error('Lỗi khi tải hình ảnh:', error);
    };

    // Theo dõi LCP
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onLCP }) => {
        onLCP((metric) => {
          console.log('LCP Value:', metric.value);
          
          // Nếu LCP quá cao, thử tối ưu hóa
          if (metric.value > 2500 && imgRef.current) {
            // Đảm bảo hình ảnh hiển thị
            imgRef.current.style.visibility = 'visible';
            imgRef.current.style.opacity = '1';
          }
        });
      });
    }
  }, [src]);

  return (
    <img 
      ref={imgRef}
      src={src} 
      alt={alt}
      loading="eager"
      decoding="async"
      width="1920"
      height="1080"
      id="background-image"
      data-lcp-element="true"
      onLoad={() => console.log('Hình ảnh đã tải xong (onLoad):', src)}
      onError={(e) => console.error('Lỗi khi tải hình ảnh (onError):', e)}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
        visibility: "visible",
        opacity: 1,
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "subpixel-antialiased",
        contentVisibility: "auto",
        contain: "paint",
        willChange: "auto"
      }}
    />
  );
} 