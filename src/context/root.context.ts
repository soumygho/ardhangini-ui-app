import { createContext } from "react";
import {
  CategoryEntity,
  Configuration,
  ProductCollectionEntity,
  SubcategoryEntity,
} from "../services/openapi";
import {
  CartLineItemDto,
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
  handleAddToCart: (lineItems: CartLineItemDto[]) => void;
  handleAddToWishList: (productId: string, productTypeId: string) => void;
  removeFromCart: (productId: string, productTypeId: string) => void;
  removeFromWishList: (productId: string, productTypeId: string) => void;
  categories: CategoryEntity[];
  subCategories: SubcategoryEntity[];
  collections: ProductCollectionEntity[];
  fabrics: FabricDetailsEntity[];
  colors: ProductColorEntity[];
  syles: ProductStyleEntity[];
  prints: ProductPrintsEntity[];
  occassions: ProductOccassionEntity[];
  selectedPrimarySareeFilter?: SareeFilter;
  setPrimaryFilter: (filter: SareeFilter) => void;
  setUserId: (userId: string) => void;
  isAccessTokenExpired: boolean;
  setIsAccessTokenExpired: (flag: boolean) => void;
}
//this is used to declare static dependency to remove repeated rendering
export const config = {};
export const rootContext = createContext<RootContext | null>(null);
//"http://localhost:3001"; //process.env.REACT_APP_BACKEND_URL;

export const showToast = (message: string) =>
  toast(message, { autoClose: 100 });
export const defaultColDef = {
  flex: 1,
};

export const handleApiError = (e: any) => {
  console.error(e);
  showToast("Unable to connect to backend.");
};
