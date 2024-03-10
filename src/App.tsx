import { ChangeEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import { formInputsList, productList } from "./data";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { IProduct } from "./interfaces";

function App() {
  {
    /*~~~~~~~~$ states $~~~~~~~~*/
  }
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [product, setProduct] = useState<IProduct>({
    id: "",
    title: "",
    category: {
      name: "",
      imageURL: "",
    },
    colors: [],
    description: "",
    imageURL: "",
    price: ""
  });

  {
    /*~~~~~~~~$ handlers $~~~~~~~~*/
  }
  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };
  const onChangeHandler = (even: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = even.target;
    setProduct({
      ...product,
      [name]: value,
    })
  }


  {
    /*~~~~~~~~$ all renders $~~~~~~~~*/
  }
  const renderProductCard = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputs = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col">
      <label className="text-lg" htmlFor={input.id}>{input.label}</label>
      <Input type={input.type} name={input.name} id={input.id} value={product[input.name]} onChange={onChangeHandler} />
    </div>
  ));

  return (
    <>
      <main>
        <Button className="bg-black" width="w-fit" onClick={openModal}>
          open modal
        </Button>

        <Modal title="hi" isOpen={isOpenModal} closeModal={closeModal}>
          {renderFormInputs}
        </Modal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center">
          {renderProductCard}
        </div>
      </main>
    </>
  );
}

export default App;
