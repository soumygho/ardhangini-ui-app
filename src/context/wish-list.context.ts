import { createContext } from "react";

export interface WishlistContext {
    getAllWishListData: (userId: string) => void;
  }
  
  export const wishListContext = createContext<WishlistContext | null>(null);