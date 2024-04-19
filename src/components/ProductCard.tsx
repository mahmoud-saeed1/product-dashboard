import { IProduct } from "../interfaces";
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
  openDeleteModal: () => void;
  category: { name: string; imageURL: string };
}

const ProductCard = ({
  product,
  productIndex,
  openEditModal,
  setProductIndex,
  setEditProduct,
  openDeleteModal,
  category,
}: IProbs) => {
  const { name, imageURL } = category;
  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const onEditHandler = () => {
    openEditModal();
    setProductIndex(productIndex);
    setEditProduct(product);
  };

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const onDeleteHandler = () => {
    setEditProduct(product);
    openDeleteModal();
  };

  /*~~~~~~~~$ Renders $~~~~~~~~*/
  const renderProductColors = product.colors.map((color, index) => (
    <ColorCircle key={index} color={color} />
  ));

  return (
    <div className="w-80 p-2 flex flex-col space-y-3 border-2 rounded-md shadow-lg">
      {/*~~~~~~~~$ product image $~~~~~~~~*/}
      <div className="h-72">
        <Image
          src={product.imageURL}
          className="object-cover rounded-md"
          alt="product image"
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

        {/* product price and category info */}
        <div className="flex items-center justify-between">
          <span className="text-lg text-blue-600 font-semibold">
            {numberWithCommas(product.price)}$
          </span>

          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold uppercase">{name}</span>
            <div className="w-10 h-10">
              <Image
                src={imageURL}
                className="object-center rounded-full"
                alt="product category"
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
          <Button
            className="bg-red-600"
            title="delete"
            onClick={onDeleteHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
