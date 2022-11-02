import { useWishlist } from "./WishlistContext";

type Props = {
  id: string;
};

export function DetailWishlistButton({ id }: Props) {
  const { isOnWishlist, toggleItem } = useWishlist();

  const handleToggle = () => {
    toggleItem(id);
  };

  return (
    <button
      className="border-grey-400 flex flex-row gap-2 rounded border-2 border-solid p-2"
      onClick={handleToggle}
    >
      <span>
        {isOnWishlist(id) ? "Remove from wishlist" : "Add to wishlist"}
      </span>
      <span>{isOnWishlist(id) ? "-" : "+"}</span>
    </button>
  );
}
