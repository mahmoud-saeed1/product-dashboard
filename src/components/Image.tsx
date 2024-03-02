interface IImage {
  src: string;
  alt: string;
  className?: string;
}
const Image = ({ src, className, alt }: IImage) => {
  return <img src={src} className={`w-full h-full ${className}`} alt={alt} />;
};

export default Image;
