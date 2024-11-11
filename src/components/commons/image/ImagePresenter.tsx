import ImageNext from "next/image";
import { LegacyRef } from "react";

type Props = {
  ref?: LegacyRef<HTMLDivElement>;
  width: number;
  height: number;
  alt: string;
  imageSrc: string;
  onError: () => void;
  loading: any;
  className: string;
  layout: string | undefined;
  priority: boolean;
};

export default function ImagePresent({
  ref,
  width,
  height,
  alt,
  imageSrc,
  onError,
  loading,
  className,
  layout,
  priority,
}: Props) {
  return (
    <div ref={ref} className="w-full h-full">
      <ImageNext
        width={width}
        height={height}
        alt={alt}
        src={imageSrc}
        onError={onError}
        className={className}
        layout={layout}
        priority={priority}
        loading={loading}
      />
    </div>
  );
}
