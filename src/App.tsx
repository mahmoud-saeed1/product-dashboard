import { useState } from "react";
import ProductCard from "./components/ProductCard";
import { productList } from "./data";
import Modal from "./ui/Modal";
import Button from "./ui/Button";

function App() {
  {
    /*~~~~~~~~$ states $~~~~~~~~*/
  }
  const [isOpenModal, setIsOpenModal] = useState(false);

  {
    /*~~~~~~~~$ handlers $~~~~~~~~*/
  }
  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  {
    /*~~~~~~~~$ reder product card $~~~~~~~~*/
  }
  const renderingProductCard = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <>
      <main>
        <Button className="bg-black" width="w-fit" onClick={openModal}>
          open modal
        </Button>

        <Modal title="hi" isOpen={isOpenModal} closeModal={closeModal} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center">
          {renderingProductCard}
        </div>
      </main>
    </>
  );
}

export default App;
