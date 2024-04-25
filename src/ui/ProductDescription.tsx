import { textSlicer } from "../utils";

interface IDescription {
  description: string;
  maxLength?: number;
}

const ProductDescription = ({ description, maxLength }: IDescription) => {
  return (
    <p className="text-gray-500 text-sm break-words">
      {textSlicer(description, maxLength)}
    </p>
  );
};

export default ProductDescription;
