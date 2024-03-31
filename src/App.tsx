import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "./components/ProductCard";
import { categories, colors, formInputsList, productList } from "./data";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import { ColorCircle } from "./components/ColorCircle";
import Select from "./ui/Select";
import { TProductNames } from "./types";
import { findCategoryIndex } from "./utils";

function App() {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    category: {
      name: "",
      imageURL: "",
    },
    colors: [],
  };

  /*~~~~~~~~$ states $~~~~~~~~*/
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [tempColorCircle, setTempColorCircle] = useState<string[]>([]);
  const [isTempColorCircle, setIsTempColorCircle] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [productIndex, setProductIndex] = useState<number>(0);
  const [editProduct, setEditProduct] = useState<IProduct>(defaultProductObj);

  /*~~~~~~~~$ all notifications $~~~~~~~~*/
  const notification = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Slide,
    });
  };

  /*~~~~~~~~$ handlers $~~~~~~~~*/
  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openEditModal = () => {
    setIsOpenEditModal(true);
  };

  const closeEditModal = () => {
    setIsOpenEditModal(false);
  };

  const openDeleteModal = () => {
    setIsOpenDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  const cancelHandler = () => {
    setProduct(defaultProductObj);
    closeModal();
    closeEditModal();
  };

  const deleteHandler = () => {
    const filteredProduct = products.filter(
      (product) => product.id !== editProduct.id
    );

    setProducts(filteredProduct);

    closeDeleteModal();

    notification("Product deleted successfully !");
  };

  const onChangeHandler = (even: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = even.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const eidtOnChangeHandler = (even: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = even.target;
    setEditProduct({
      ...editProduct,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

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
    const errors = productValidation({ title, description, imageURL, price });

    /*~~~~~~~~$ make sure there is no error $~~~~~~~~*/
    const errorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!errorMsg) {
      setErrors(errors);
      // ? check if user choose a color
      if (!tempColorCircle.length) setIsTempColorCircle(false);
      return;
    }

    // add new item
    setProducts((prev) => [
      {
        id: uuid(),
        ...product,
        colors: tempColorCircle,
        category: selectedCategory,
      },
      ...prev,
    ]);

    // clear form inputs
    setProduct(defaultProductObj);

    // clear circle colors temp
    setTempColorCircle([]);

    // close modal
    closeModal();

    // sucess notification
    notification("product added successfully !");
  };

  const editSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    /*~~~~~~~~$ modern way (ES6) "if key == value then you can write just the key" $~~~~~~~~*/
    const { title, description, imageURL, price } = editProduct;
    const errors = productValidation({ title, description, imageURL, price });

    /*~~~~~~~~$ make sure there is no error $~~~~~~~~*/
    const errorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!errorMsg && isTempColorCircle) {
      setErrors(errors);
      // ? check if user choose a color
      if (!tempColorCircle.length) setIsTempColorCircle(false);
      return;
    }

    const updatedProduct = [...products];
    updatedProduct[productIndex] = {
      ...editProduct,
      colors: tempColorCircle.concat(editProduct.colors),
    };
    setProducts(updatedProduct);

    // clear form inputs
    setEditProduct(defaultProductObj);

    // clear color temp
    setTempColorCircle([]);

    // close modal
    closeEditModal();

    // update message
    notification("product updated successfully !");
  };

  /*~~~~~~~~$ all renders $~~~~~~~~*/
  const renderProductCard = products.map((product, index) => (
    <ProductCard
      key={product.id}
      product={product}
      category={categories[findCategoryIndex(product.category.name)]}
      productIndex={index}
      setProductIndex={setProductIndex}
      openEditModal={openEditModal}
      openDeleteModal={openDeleteModal}
      setEditProduct={setEditProduct}
    />
  ));

  const renderFormInputs = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col">
      <label className="text-lg" htmlFor={input.id}>
        {input.label}
      </label>
      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage message={errors[input.name]} />
    </div>
  ));

  const renderProductColor = colors.map((color) => (
    <ColorCircle
      key={color}
      color={color}
      onClick={() => {
        // tempColorCircle.includes(color) ? tempColorCircle.filter(item => item !== color) : setTempColorCircle(prev => [...prev, color])
        if (tempColorCircle.includes(color)) {
          setTempColorCircle((prev) => prev.filter((item) => item !== color));
          return;
        }
        if (editProduct.colors.includes(color)) {
          setTempColorCircle((prev) => prev.filter((item) => item !== color));
          const updatedTempColors = editProduct.colors.filter(
            (item) => item !== color
          );
          const updatedEditedProductColor = {
            ...editProduct,
            colors: updatedTempColors,
          };
          setEditProduct(updatedEditedProductColor);
          return;
        }
        setIsTempColorCircle(true);
        setTempColorCircle((prev) => [...prev, color]);
      }}
    />
  ));

  const renderTempCircleColor = tempColorCircle.map((color) => (
    <span
      key={color}
      className="inline-block p-1 rounded-lg text-xs md:text-smF"
      style={{ backgroundColor: color }}
    >
      {color}
    </span>
  ));

  const renderFormInputsWhileEditing = (
    id: string,
    label: string,
    name: TProductNames
  ) => {
    return (
      <div className="flex flex-col">
        <label className="text-lg capitalize" htmlFor={id}>
          {`edit product ${label}`}
        </label>
        <Input
          type="text"
          name={name}
          id={id}
          value={editProduct[name]}
          onChange={eidtOnChangeHandler}
        />
        <ErrorMessage message={errors[name]} />
      </div>
    );
  };

  return (
    <>
      <main>
        <Button
          className="bg-black"
          width="w-fit"
          title="add product"
          onClick={openModal}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center">
          {renderProductCard}
        </div>

        {/*~~~~~~~~$ add a new product modal $~~~~~~~~*/}
        <Modal
          title="add a new product"
          isOpen={isOpenModal}
          closeModal={closeModal}
        >
          <form className="flex flex-col space-y-3" onSubmit={submitHandler}>
            {renderFormInputs}

            <Select
              selected={selectedCategory}
              setSelected={setSelectedCategory}
            />

            {/*~~~~~~~~$ product defualt colors $~~~~~~~~*/}
            <div className="flex flex-wrap space-x-1 space-y-1 items-center">
              {renderTempCircleColor}
            </div>

            {/*~~~~~~~~$ product choosen colors $~~~~~~~~*/}
            <div className="flex flex-wrap space-x-1">
              {renderProductColor}
              {!isTempColorCircle && (
                <ErrorMessage message="please choose at least one color" />
              )}
            </div>

            {/*~~~~~~~~$ modal buttons $~~~~~~~~*/}
            <div className="flex space-x-3 mt-4">
              <Button className="bg-blue-600" title="submit" />
              <Button
                className="bg-red-600"
                title="cancel"
                onClick={cancelHandler}
              />
            </div>
          </form>
        </Modal>

        {/*~~~~~~~~$ edit product modal $~~~~~~~~*/}
        <Modal
          title="edit this product"
          isOpen={isOpenEditModal}
          closeModal={closeEditModal}
        >
          <form
            className="flex flex-col space-y-3"
            onSubmit={editSubmitHandler}
          >
            {renderFormInputsWhileEditing("title", "title", "title")}
            {renderFormInputsWhileEditing(
              "description",
              "description",
              "description"
            )}
            {renderFormInputsWhileEditing("imageURL", "imageURL", "imageURL")}
            {renderFormInputsWhileEditing("price", "price", "price")}

            <Select
              selected={editProduct.category}
              setSelected={(value) =>
                setEditProduct({ ...editProduct, category: value })
              }
            />

            {/*~~~~~~~~$ product defualt colors $~~~~~~~~*/}
            <div className="flex flex-wrap space-x-1 space-y-1 items-center">
              {tempColorCircle.concat(editProduct.colors).map((color) => (
                <span
                  key={color}
                  className="inline-block p-1 rounded-lg text-xs md:text-smF"
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>

            {/*~~~~~~~~$ product choosen colors $~~~~~~~~*/}
            <div className="flex flex-wrap space-x-1">
              {renderProductColor}
              {!isTempColorCircle && (
                <ErrorMessage message="please choose at least one color" />
              )}
            </div>

            {/*~~~~~~~~$ modal buttons $~~~~~~~~*/}
            <div className="flex space-x-3 mt-4">
              <Button className="bg-blue-600" title="submit" />
              <Button
                className="bg-red-600"
                title="cancel"
                onClick={cancelHandler}
              />
            </div>
          </form>
        </Modal>

        {/*~~~~~~~~$ delete product modal $~~~~~~~~*/}
        <Modal
          title="Are you sure you want to remove this Product from your Store?"
          desc="Deleting this product will remove it permanently from your inventory. Any associated data, sales history, and other related information will also be deleted. Please make sure this is the intended action."
          isOpen={isOpenDeleteModal}
          closeModal={closeDeleteModal}
        >
          {/*~~~~~~~~$ modal buttons $~~~~~~~~*/}
          <div className="flex space-x-3 mt-4">
            <Button
              className="bg-red-600"
              title="yes, delete"
              onClick={deleteHandler}
            />
            <Button
              className="bg-gray-400"
              title="cancel"
              onClick={closeDeleteModal}
            />
          </div>
        </Modal>

        <ToastContainer
          theme="colored"
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </main>
    </>
  );
}

export default App;
