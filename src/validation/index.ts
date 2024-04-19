interface IProductValidation {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}

export const productValidation = (product: IProductValidation) => {
  const onlineImageURL = /^(ftp|http|https):\/\/[^ "]+$/;
  const regex =
    /^(ftp|http|https):\/\/\S+\.(?:webp)(?:\?[\S]*)?$|^\/images\/(?:items|categories)\/\S+\.(?:webp)(?:\?[\S]*)?$/;
  const validUrl =
    regex.test(product.imageURL) || onlineImageURL.test(product.imageURL);

  const errors: IProductValidation = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };
  if (!product.title.trim()) {
    errors.title = "Product title is required!";
  } else if (product.title.length < 4 || product.title.length > 50) {
    errors.title = "Product title must be between 4 and 50 characters!";
  }

  if (!product.description.trim()) {
    errors.description = "Product description is required!";
  } else if (
    product.description.length < 8 ||
    product.description.length > 500
  ) {
    errors.description =
      "Product description must be between 8 and 500 characters!";
  }

  if (!product.price.trim()) {
    errors.price = "Product price is required!";
  } else if (isNaN(Number(product.price))) {
    errors.price = "Price must be a number!";
  }

  if (!product.imageURL.trim()) {
    errors.imageURL = "Product image URL is required!";
  } else if (!validUrl) {
    errors.imageURL = "Please enter a valid URL!";
  }

  return errors;
};

export function stringValidator(value: string): boolean {
  const regex = /^[(a-zA-Z\u0600-\u06FF)]+(?: [a-zA-Z\u0600-\u06FF',.-]+)*$/;

  return regex.test(value);
}
