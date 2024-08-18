import { createContext } from "react";

export interface CartDetailsContext {
    getAllCartDetailsData: (userId: string) => void;
  }
  
  export const cartDetailsContext = createContext<CartDetailsContext | null>(null);