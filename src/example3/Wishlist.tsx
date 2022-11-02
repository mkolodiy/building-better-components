import { products } from "./data";
import { ListWishlistButton } from "./ListWishlistButton";
import { ProductTile } from "./ProductTile";
import { useWishlist } from "./WishlistContext";

export function Wishlist() {
  const { items } = useWishlist();
  console.log(items);

  const wishlistProducts = products.filter((product) =>
    items.includes(product.id)
  );

  if (wishlistProducts.length === 0) {
    return <div>No products in wishlist</div>;
  }

  return (
    <div>
      {wishlistProducts.map((product) => (
        <ProductTile product={product} key={product.id}>
          <ListWishlistButton id={product.id} />
        </ProductTile>
      ))}
    </div>
  );
}
