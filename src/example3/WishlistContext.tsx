import { createContext, useContext, useState, type ReactNode } from "react";

type WishlistContextContent = {
  items: string[];
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  isOnWishlist: (id: string) => boolean;
  toggleItem: (id: string) => void;
};

const WishlistContext = createContext<WishlistContextContent>(
  {} as unknown as WishlistContextContent
);

type WishlistProviderProps = {
  children: ReactNode;
};

export function WishlistProvider({ children }: WishlistProviderProps) {
  const [items, setItems] = useState<string[]>([]);

  const addToWishlist = (id: string) => {
    setItems((prevItems) => [...prevItems, id]);
  };

  const removeFromWishlist = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item !== id));
  };

  const isOnWishlist = (id: string) => {
    return !!items.find((item) => item === id);
  };

  const toggleItem = (id: string) =>
    isOnWishlist(id) ? removeFromWishlist(id) : addToWishlist(id);

  const values: WishlistContextContent = {
    items,
    addToWishlist,
    removeFromWishlist,
    isOnWishlist,
    toggleItem,
  };

  return (
    <WishlistContext.Provider value={values}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistContext");
  }
  return context;
}
