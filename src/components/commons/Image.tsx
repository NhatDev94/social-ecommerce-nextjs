"use client";
import ImageNext from "next/image";
import { useEffect, useState } from "react";
import defaultAvatar from "@/assets/images/defaultAvatar.jpg";

type Props = {
  [key: string]: any;
};

export default function Image({
  width = "1600",
  height = "900",
  src,
  alt = "image",
  className = "w-full h-full object-cover",
  loading,
}: Props) {
  const [imageSrc, setImageSrc] = useState<any>(src || defaultAvatar);

  const handleError = () => {
    !imageSrc && setImageSrc(defaultAvatar);
  };

  useEffect(() => {
    if (src) {
      setImageSrc(src);
    }
  }, [src]);
  return (
    <ImageNext
      width={width}
      height={height}
      alt={alt}
      src={imageSrc}
      onError={handleError}
      loading={loading}
      className={className}
    />
  );
}
