import { numberWithCommas } from "../utils";
import Image from "../components/Image";

interface IPrice {
  price: string;
  categoryName: string;
  categoryImage: string;
}
const ProductPrice = ({ price, categoryName, categoryImage }: IPrice) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-lg text-blue-600 font-semibold">
        {numberWithCommas(price)}$
      </span>

      <div className="flex items-center space-x-2">
        <span className="text-xs font-semibold uppercase">{categoryName}</span>
        <div className="w-10 h-10">
          <Image
            src={categoryImage}
            className="object-center rounded-full"
            alt="product category"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPrice;
