"use client";
import ImageNext from "next/image";
import { useEffect, useState } from "react";
import defaultAvatar from "@/assets/images/defaultAvatar.jpg";
import { useInView } from "react-intersection-observer";

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
  loading,
  layout,
  priority,
}: Props) {
  const { ref, inView } = useInView({
    /* Optional options */
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
    <div ref={ref}>
      <ImageNext
        width={width}
        height={height}
        alt={alt}
        src={imageSrc}
        onError={handleError}
        loading={inView ? "eager" : loading}
        className={className}
        layout={layout}
        priority={priority || false}
      />
    </div>
  );
}
