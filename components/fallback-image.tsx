"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type FallbackImageProps = ImageProps & {
  fallbackSrc?: string;
};

export function FallbackImage({
  src,
  alt,
  fallbackSrc = "/images/devops-icon.png",
  ...props
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (!error) {
          setImgSrc(fallbackSrc);
          setError(true);
        }
      }}
    />
  );
}
