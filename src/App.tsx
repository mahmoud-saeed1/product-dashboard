import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import { formInputsList, productList } from "./data";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const defaultProductObj = {
    id: "",
    title: "",
    description: "",
    imageURL: "",
    price: "",
    category: {
      name: "",
      imageURL: "",
    },
    colors: [],
  }

  {
    /*~~~~~~~~$ states $~~~~~~~~*/
  }
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  })


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
    setErrors({
      ...errors,
      [name]: "",
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
      <ErrorMessage message={errors[input.name]} />
    </div>
  ));

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    /*~~~~~~~~$ old way $~~~~~~~~*/
    // const errors = productValidation({
    //   title: product.title,
    //   describtion: product.description,
    //   imageURL: product.imageURL,
    //   price: product.price,
    // });

    /*~~~~~~~~$ modern way (ES6) "if key == value then you can write just the key" $~~~~~~~~*/
    const { title, description, imageURL, price } = product;
    const errors = productValidation({ title, description, imageURL, price })

    /*~~~~~~~~$ make sure there is no error $~~~~~~~~*/
    const errorMsg = Object.values(errors).some(value => value === "") && Object.values(errors).every(value => value === "");

    if (!errorMsg) {
      setErrors(errors)
      return;
    }
    console.log(errorMsg)
  }

  const cancelHandler = () => {
    setProduct(defaultProductObj);
    setIsOpenModal(false);
  }

  return (
    <>
      <main>
        <Button className="bg-black" width="w-fit" onClick={openModal}>
          open modal
        </Button>

        <Modal title="hi" isOpen={isOpenModal} closeModal={closeModal}>
          {renderFormInputs}

          {/*~~~~~~~~$ modal buttons $~~~~~~~~*/}
          <div className="flex space-x-3 mt-4">
            <Button className="bg-blue-600" onClick={submitHandler}>
              submit
            </Button>
            <Button className="bg-red-600" onClick={cancelHandler}>
              cancel
            </Button>
          </div>
        </Modal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center">
          {renderProductCard}
        </div>
      </main>
    </>
  );
}

export default App;
