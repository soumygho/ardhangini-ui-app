import { createContext } from "react";
import {
  ProductSnapshotDto,
  ProductSnapshotWithUserDto,
  SareeFilter,
} from "../services/openapi";

export interface ProductListContext {
  filterApllied?: SareeFilter[];
  setFilterApplied: () => void;
  productList?: ProductSnapshotWithUserDto[] | ProductSnapshotDto[];
}

export const productListContext = createContext<ProductListContext | null>(
  null
);
