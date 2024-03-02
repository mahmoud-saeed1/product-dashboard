import { IProduct } from "../../interfaces";
import Button from "../ui/Button";
import Image from "./Image";

interface IProbs {
  product: IProduct;
}

const ProductCard = ({ product }: IProbs) => {
  {
    /*~~~~~~~~$ render product colors $~~~~~~~~*/
  }
  // const rederingProductColors = product.colors.map((item)=><span className={`bg-[${item}] w-4 h-4 rounded-full cursor-pointer`}>{}</span>)

  return (
    <div className="w-72 h-[30rem] p-2 border-2 rounded-md shadow-lg">
      {/*~~~~~~~~$ product image $~~~~~~~~*/}
      <div className="h-1/2">
        <Image
          src={product.imageURL}
          className="object-center rounded-md"
          alt="dog image"
        />
      </div>

      {/*~~~~~~~~$ product body $~~~~~~~~*/}
      <div className="h-1/2 flex flex-col space-y-3 py-2">
        {/* product info */}
        <div>
          {/* product title */}
          <h2 className="mb-1 text-2xl font-bold capitalize">
            {product.title}
          </h2>

          {/* product describtion */}
          <p className="text-sm">{/* {product.description} */}</p>
        </div>

        {/* product colors */}
        <div className="flex space-x-2">
          <span className="bg-purple-500 w-4 h-4 rounded-full cursor-pointer"></span>
          <span className="bg-red-700 w-4 h-4 rounded-full cursor-pointer"></span>
          <span className="bg-yellow-600 w-4 h-4 rounded-full cursor-pointer"></span>
          {/* {rederingProductColors} */}
        </div>

        {/* product price and saller info */}
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-semibold">$1121</h4>
          <div className="w-10 h-10">
            <Image
              src="../../public/images/dog.jpg"
              className="object-center rounded-full"
              alt="dog"
            />
          </div>
        </div>

        {/* product buttons */}
        <div className="flex items-center space-x-2">
          <Button
            className="bg-green-600"
            children="edit"
            onClick={() => console.log("click")}
          />
          <Button className="bg-red-600" children="remove" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
