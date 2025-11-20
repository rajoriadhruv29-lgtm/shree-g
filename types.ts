export interface ProductSpec {
  itemCode?: string;
  size: string;
  length: string;
  width: string;
  thickness: string;
  weight: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  specs: ProductSpec;
  imageUrl: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  coverImage: string;
}