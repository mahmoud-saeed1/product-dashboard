import { v4 as uuid } from "uuid";

import { ICategory, IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Stylish Polo Shirt",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, autem.",
    imageURL: "/images/items/polo1.webp",
    price: "150",
    colors: ["#1E90FF", "#001F3F", "#FFDB54", "#E6E6FA", "#483D33"],
    category: {
      name: "polo",
      imageURL: "/images/categories/polo.webp",
    },
  },
  {
    id: uuid(),
    title: "Classic Polo Shirt",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, autem.",
    imageURL: "/images/items/polo2.webp",
    price: "200",
    colors: ["#C19A6B", "#D6A5B9", "#1E90FF", "#FFDB54", "#E6E6FA"],
    category: {
      name: "polo",
      imageURL: "/images/categories/polo.webp",
    },
  },
  {
    id: uuid(),
    title: "Comfortable T-Shirt",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, autem.",
    imageURL: "/images/items/t-shirt1.webp",
    price: "100",
    colors: ["#C19A6B", "#333333", "#228B22", "#800000"],
    category: {
      name: "t-shirt",
      imageURL: "/images/categories/t-shirt.webp",
    },
  },
  {
    id: uuid(),
    title: "Casual T-Shirt",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, autem.",
    imageURL: "/images/items/t-shirt2.webp",
    price: "95",
    colors: [
      "#C19A6B",
      "#D6A5B9",
      "#1E90FF",
      "#FFDB54",
      "#E6E6FA",
      "#483D33",
      "#8C926B",
      "#800020",
    ],
    category: {
      name: "t-shirt",
      imageURL: "/images/categories/t-shirt.webp",
    },
  },
  {
    id: uuid(),
    title: "Fashionable Sweatpants",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, autem.",
    imageURL: "/images/items/sweet-pants1.webp",
    price: "220",
    colors: ["#E6E6FA", "#228B22", "#800000", "#C19A6B"],
    category: {
      name: "sweet-pants",
      imageURL: "/images/categories/sweet-pants.webp",
    },
  },
  {
    id: uuid(),
    title: "Trendy Sweatpants",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, autem.",
    imageURL: "/images/items/sweet-pants2.webp",
    price: "320",
    colors: ["#E6E6FA", "#800000", "#C19A6B", "#D6A5B9", "#1E90FF", "#FFDB54"],
    category: {
      name: "sweet-pants",
      imageURL: "/images/categories/sweet-pants.webp",
    },
  },
  {
    id: uuid(),
    title: "Classic Jeans",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, autem.",
    imageURL: "/images/items/jeans1.webp",
    price: "290",
    colors: [],
    category: {
      name: "jeans",
      imageURL: "/images/categories/jeans.webp",
    },
  },
  {
    id: uuid(),
    title: "Denim Jeans",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, autem.",
    imageURL: "/images/items/jeans2.webp",
    price: "300",
    colors: [],
    category: {
      name: "jeans",
      imageURL: "/images/categories/jeans.webp",
    },
  },
  {
    id: uuid(),
    title: "sneakers",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, autem.",
    imageURL: "/images/items/sneakers1.webp",
    price: "300",
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "sneakers",
      imageURL: "/images/categories/sneakers.webp",
    },
  },
  {
    id: uuid(),
    title: "sneakers",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, autem.",
    imageURL: "/images/items/sneakers2.webp",
    price: "300",
    colors: ["#001F3F", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
    category: {
      name: "sneakers",
      imageURL: "/images/categories/sneakers.webp",
    },
  },
  {
    id: uuid(),
    title: "Comfortable Socks",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, autem.",
    imageURL: "/images/items/socks1.webp",
    price: "60",
    colors: ["#3C2A21", "#3C2A21", "#1F8A70", "#820000"],
    category: {
      name: "socks",
      imageURL: "/images/categories/socks.webp",
    },
  },
  {
    id: uuid(),
    title: "Stylish Socks",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, autem.",
    imageURL: "/images/items/socks2.webp",
    price: "80",
    colors: ["#3C2A21", "#3C2A21", "#1F8A70"],
    category: {
      name: "socks",
      imageURL: "/images/categories/socks.webp",
    },
  },
  {
    id: uuid(),
    title: "Classic Cap",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, autem.",
    imageURL: "/images/items/cap1.webp",
    price: "50",
    colors: [],
    category: {
      name: "cap",
      imageURL: "/images/categories/cap.webp",
    },
  },
  {
    id: uuid(),
    title: "Sporty Cap",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, autem.",
    imageURL: "/images/items/cap2.webp",
    price: "70",
    colors: [],
    category: {
      name: "cap",
      imageURL: "/images/categories/cap.webp",
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: uuid(),
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: uuid(),
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: uuid(),
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: uuid(),
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors: string[] = [
  "#001F3F", // Navy Blue
  "#333333", // Charcoal Gray
  "#228B22", // Forest Green
  "#800000", // Maroon Red
  "#C19A6B", // Camel
  "#D6A5B9", // Dusty Pink
  "#1E90FF", // Denim Blue
  "#FFDB54", // Mustard Yellow
  "#E6E6FA", // Lavender
  "#483D33", // Taupe
  "#8C926B", // Olive Green
  "#800020", // Burgundy
];

export const categories: ICategory[] = [
  {
    id: uuid(),
    name: "polo",
    imageURL: "/images/categories/polo.webp",
  },
  {
    id: uuid(),
    name: "T-Shirt",
    imageURL: "/images/categories/t-shirt.webp",
  },
  {
    id: uuid(),
    name: "sweet-pants",
    imageURL: "/images/categories/sweet-pants.webp",
  },
  {
    id: uuid(),
    name: "jeans",
    imageURL: "/images/categories/jeans.webp",
  },
  {
    id: uuid(),
    name: "sneakers",
    imageURL: "/images/categories/sneakers.webp",
  },
  {
    id: uuid(),
    name: "socks",
    imageURL: "/images/categories/socks.webp",
  },
  {
    id: uuid(),
    name: "sneakers",
    imageURL: "/images/categories/sneakers.webp",
  },
  {
    id: uuid(),
    name: "socks",
    imageURL: "/images/categories/socks.webp",
  },
  {
    id: uuid(),
    name: "cap",
    imageURL: "/images/categories/cap.webp",
  },
];
