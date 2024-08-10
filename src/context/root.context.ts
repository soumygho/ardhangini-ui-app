import { createContext } from "react";
import {
  CategoryEntity,
  Configuration,
  ProductCollectionEntity,
  SubcategoryEntity,
} from "../services/openapi";
import {
  FabricDetailsEntity,
  ProductColorEntity,
  ProductOccassionEntity,
  ProductPrintsEntity,
  ProductStyleEntity,
  SareeFilter,
} from "../services/openapi/api";
import { toast } from "react-toastify";

export interface RootContext {
  showLoginModal: boolean;
  cartId?: string;
  userId?: string;
  handleShowLoginModal: () => void;
  handleLoginCloseModal: () => void;
  handleAddToCart: (productId: string) => void;
  handleAddToWishList: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  removeFromWishList: (productId: string) => void;
  categories: CategoryEntity[];
  subCategories: SubcategoryEntity[];
  collections: ProductCollectionEntity[];
  fabrics: FabricDetailsEntity[];
  colors: ProductColorEntity[];
  syles: ProductStyleEntity[];
  prints: ProductPrintsEntity[];
  occassions: ProductOccassionEntity[];
  selectedPrimarySareeFilter?: SareeFilter;
}

export const rootContext = createContext<RootContext | null>(null);
export const config: Configuration = new Configuration();
config.basePath = process.env.REACT_APP_BACKEND_URL; //"http://localhost:3001"; //process.env.REACT_APP_BACKEND_URL;

export const showToast = (message: string) =>
  toast(message, { autoClose: 100 });
export const defaultColDef = {
  flex: 1,
};
