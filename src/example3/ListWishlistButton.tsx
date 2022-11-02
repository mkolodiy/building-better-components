import { useWishlist } from "./WishlistContext";

type Props = {
  id: string;
};

export function ListWishlistButton({ id }: Props) {
  const { isOnWishlist, toggleItem } = useWishlist();

  const handleToggle = () => {
    toggleItem(id);
  };

  return (
    <button
      className="border-grey-400 rounded border-2 border-solid p-2"
      onClick={handleToggle}
    >
      {isOnWishlist(id) ? "-" : "+"}
    </button>
  );
}
