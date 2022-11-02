import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { type Product } from "./data";

type Props = {
  product: Product;
  children?: ReactNode;
};

export function ProductTile({ product, children }: Props) {
  const { title, description } = product;
  return (
    <div className="border-2 border-solid border-gray-400 p-2">
      <Link to={`/example3/products/${product.id}`} key={product.id}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
      <div className="border-t-solid mt-2 border-t-2 border-t-gray-400 pt-2 pb-2">
        {children}
      </div>
    </div>
  );
}
