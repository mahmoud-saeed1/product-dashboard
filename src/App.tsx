import ProductCard from "./components/ProductCard";
import { productList } from "../data";

function App() {
  {
    /*~~~~~~~~$ reder product card $~~~~~~~~*/
  }
  const renderingProductCard = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <>
      <div className="grid grid-cols-1 gap-5 place-items-center">
        {renderingProductCard}
      </div>
    </>
  );
}

export default App;
