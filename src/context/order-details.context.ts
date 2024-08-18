import { createContext } from "react";
import { OrderResponse } from "../services/openapi";

export interface OrderListContext {
    viewOrderFn: (rowData: OrderResponse) => void;
}

export const orderListContext = createContext<OrderListContext | null>(null);
