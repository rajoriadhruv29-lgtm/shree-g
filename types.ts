export interface ProductVariant {
  variantName?: string; 
  itemCode?: string;
  size: string;
  length: string;
  width: string;
  thickness: string;
  weight: string; // Weight per pair
}

export interface Product {
  id: string;
  name: string;
  name_hi?: string; // Hindi Name
  categoryId: string;
  description: string;
  description_hi?: string; // Hindi Description
  variants: ProductVariant[];
  imageUrl: string; // Main image (kept for backward compatibility)
  images?: string[]; // Array of all images (Main + Extras)
}

export interface Category {
  id: string;
  title: string;
  title_hi?: string; // Hindi Title
  description: string;
  description_hi?: string; // Hindi Description
  coverImage: string;
}