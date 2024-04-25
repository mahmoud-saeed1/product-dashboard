import { IProduct } from "../interfaces";
import ProductButtons from "../ui/ProductButtons";
import ProductDescription from "../ui/ProductDescription";
import ProductPrice from "../ui/ProductPrice";
import ProductTitle from "../ui/ProductTitle";
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
        <div>
          <ProductTitle title={product.title} maxLength={30} />

          <ProductDescription
            description={product.description}
            maxLength={60}
          />

          <div className="flex space-x-2 mt-2">
            {!product.colors.length ? (
              <p className="text-yellow-600 text-sm">Not available colors!</p>
            ) : (
              renderProductColors
            )}
          </div>
        </div>

        <ProductPrice
          price={product.price}
          categoryName={name}
          categoryImage={imageURL}
        />

        <ProductButtons
          onEditHandler={onEditHandler}
          onDeleteHandler={onDeleteHandler}
        />
      </div>
    </div>
  );
};

export default ProductCard;
