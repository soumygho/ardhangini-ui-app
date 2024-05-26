export interface ProductSnapshot {
  productId: string;
  productImageUrls: string[];
  isNew: boolean;
  isDiscounted: boolean;
  discountPercentage: number;
  productCaption: string;
  oldPrice: number;
  newPrice: number;
}

export interface ProductDetails extends ProductSnapshot {
  images: ProductSlideInformation[];
  description: string;
  productInformation: ProductInformation;
}

export interface ProductSlideInformation {
  imageurl: string;
  thumbnailImageUrl: string;
}

export interface ProductInformation {
  productSize: string;
  productColors: string;
}

export interface ProductReview {
  customername: string;
  email: string;
}
