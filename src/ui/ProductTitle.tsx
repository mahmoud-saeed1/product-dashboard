import { textSlicer } from "../utils";

interface ITitle {
  title: string;
  maxLength: number;
}
const ProductTitle = ({ title, maxLength }: ITitle) => {
  return (
    <h3 className="mb-1 text-xl font-bold capitalize whitespace-nowrap">
      {textSlicer(title, maxLength)}
    </h3>
  );
};

export default ProductTitle;
