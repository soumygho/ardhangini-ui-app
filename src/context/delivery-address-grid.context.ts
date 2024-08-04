import { createContext } from "react";

export interface DeliveryGridContext {
    editDeliveryAddressFn: (row: any) => void;
    deleteDeliveryAddressFn: (row: any) => void;
  }
  
  export const deliveryGridContext = createContext<DeliveryGridContext | null>(null);