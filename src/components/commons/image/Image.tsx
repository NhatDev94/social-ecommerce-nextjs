"use client";
import { useEffect, useState } from "react";
import defaultAvatar from "@/assets/images/defaultAvatar.jpg";
import { useInView } from "react-intersection-observer";
import ImagePresent from "./ImagePresenter";

type Props = {
  [key: string]: any;
  priority?: boolean;
};

export default function Image({
  width = "1600",
  height = "900",
  src,
  alt = "image",
  className = "w-full h-full object-cover",
  loading = "lazy",
  layout,
  priority,
}: Props) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [imageSrc, setImageSrc] = useState<any>(src || defaultAvatar);

  const handleError = () => {
    if (!imageSrc) setImageSrc(defaultAvatar);
  };

  useEffect(() => {
    if (src) {
      setImageSrc(src);
    }
  }, [src]);
  return (
    <ImagePresent
      ref={ref}
      width={width}
      height={height}
      alt={alt}
      imageSrc={imageSrc}
      className={className}
      layout={layout}
      priority={priority || false}
      loading={inView || priority ? "eager" : loading}
      onError={handleError}
    />
  );
}
