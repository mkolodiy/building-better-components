import { useParams } from "react-router-dom";
import { products } from "./data";
import { DetailWishlistButton } from "./DetailWishlistButton";

export function Product() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    throw Error();
  }

  const product = products.find((product) => product.id === id);

  if (!product) {
    throw Error();
  }

  const { title, description } = product;

  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <DetailWishlistButton id={id} />
    </div>
  );
}
