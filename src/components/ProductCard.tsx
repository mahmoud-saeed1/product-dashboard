import { ICategory, IProduct } from "../interfaces";
import Button from "../ui/Button";
import { numberWithCommas, textSlicer } from "../utils";
import { ColorCircle } from "./ColorCircle";
import Image from "./Image";

interface IProbs {
  product: IProduct;
  productIndex: number;
  setProductIndex: (val: number) => void;
  setEditProduct: (product: IProduct) => void;
  openEditModal: () => void;
  category: ICategory;
}

const ProductCard = ({
  product,
  productIndex,
  openEditModal,
  setProductIndex,
  setEditProduct,
  category,
}: IProbs) => {
  const { name, imageURL } = category;
  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const onEditHandler = () => {
    openEditModal();
    setProductIndex(productIndex);
    setEditProduct(product);
    // console.log(product);
  };
  /*~~~~~~~~$ Renders $~~~~~~~~*/
  const renderProductColors = product.colors.map((color) => (
    <ColorCircle key={color} color={color} />
  ));

  return (
    <div className="max-w-sm md:max-w-lg p-2 flex flex-col space-y-3 border-2 rounded-md shadow-lg">
      {/*~~~~~~~~$ product image $~~~~~~~~*/}
      <div className="h-52">
        <Image
          src={product.imageURL}
          className="object-cover rounded-md"
          alt="dog image"
        />
      </div>

      {/*~~~~~~~~$ product body $~~~~~~~~*/}
      <div className="flex flex-col space-y-3 py-2">
        {/* product info */}
        <div>
          {/* product title */}
          <h2 className="mb-1 text-xl font-bold capitalize whitespace-nowrap">
            {textSlicer(product.title, 25)}
          </h2>

          {/* product describtion */}
          <p className="text-gray-500 text-sm break-words">
            {textSlicer(product.description)}
          </p>

          {/* product colors */}
          <div className="flex space-x-2 mt-2">
            {!product.colors.length ? (
              <p className="text-yellow-600 text-sm">Not available colors!</p>
            ) : (
              renderProductColors
            )}
          </div>
        </div>

        {/* product price and saller info */}
        <div className="flex items-center justify-between">
          <span className="text-lg text-indigo-600 font-semibold">
            {numberWithCommas(product.price)}
          </span>

          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold uppercase">{name}</span>
            <div className="w-10 h-10">
              <Image
                src={imageURL}
                className="object-center rounded-full"
                alt="dog"
              />
            </div>
          </div>
        </div>

        {/* product buttons */}
        <div className="flex items-center space-x-2">
          <Button
            className="bg-green-600"
            title="edit"
            onClick={onEditHandler}
          />
          <Button className="bg-red-600" title="remove" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
