interface IImage {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
}

const Image = ({ src, className, alt, loading = "lazy" }: IImage) => {
  return (
    <img
      src={src}
      className={`w-full h-full ${className}`}
      alt={alt}
      loading={loading}
    />
  );
};

export default Image;
