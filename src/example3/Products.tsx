import { products } from "./data";
import { ListWishlistButton } from "./ListWishlistButton";
import { ProductTile } from "./ProductTile";

export function Products() {
  return (
    <div>
      {products.map((product) => (
        <ProductTile product={product} key={product.id}>
          <ListWishlistButton id={product.id} />
        </ProductTile>
      ))}
    </div>
  );
}
