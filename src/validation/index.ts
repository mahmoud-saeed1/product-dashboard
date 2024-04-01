interface IProductValidaion {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}
export const productValidation = (product: IProductValidaion) => {
  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  const errors: IProductValidaion = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };
  if (!product.title.trim()) {
    errors.title = "product title is required!";
  } else if (product.title.length < 10 || product.title.length > 80) {
    errors.title = "product title must be between 10 and 80 characters!";
  }

  if (!product.description.trim()) {
    errors.description = "product description is required!";
  } else if (
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    errors.description =
      "product description must be between 10 and 900 characters!";
  }

  if (!product.price.trim()) {
    errors.price = "product price is required!";
  } else if (isNaN(Number(product.price))) {
    errors.price = "price must be a number!";
  }

  if (!product.price.trim()) {
    errors.price = "product price is required!";
  } else if (isNaN(Number(product.price))) {
    errors.price = "price must be a number!";
  }

  if (!product.imageURL.trim()) {
    errors.imageURL = "product image URL is required!";
  } else if (!validUrl) {
    errors.imageURL = "please enter a valid URL!";
  }

  return errors;
};

export function stringValidator(value: string): boolean {
  const regex = /^[(a-zA-Zء-ي)]+(?: [a-zA-Zء-ي',.-]+)*$/;

  return regex.test(value);
}
