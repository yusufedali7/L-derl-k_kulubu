import Image, { type StaticImageData } from "next/image";

export function Corners() {
  return (
    <>
      <span aria-hidden className="tclip tclip-tl" />
      <span aria-hidden className="tclip tclip-tr" />
      <span aria-hidden className="tclip tclip-bl" />
      <span aria-hidden className="tclip tclip-br" />
    </>
  );
}

type PhotoProps = {
  src: StaticImageData;
  alt: string;
  sizes: string;
  /** Tailwind aspect class to crop to; omit to keep the photo's own ratio. */
  aspect?: string;
  priority?: boolean;
  className?: string;
};

export function Photo({ src, alt, sizes, aspect, priority, className = "" }: PhotoProps) {
  return (
    <figure className={`frame ${className}`}>
      <div className={`frame-img ${aspect ?? ""}`}>
        <Image
          src={src}
          alt={alt}
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          className={aspect ? "h-full w-full object-cover" : "h-auto w-full"}
        />
      </div>
    </figure>
  );
}
