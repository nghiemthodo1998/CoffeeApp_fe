export type CategoryType = {
  created_at: string;
  id: number;
  name: string;
  type: string;
  updated_at: string;
};

export type PriceType = {
  size: string;
  price: string;
  currency: string;
};

export type ProductType = {
  id: string;
  name: string;
  description: string;
  roasted: string;
  imagelink_square: string;
  imagelink_portrait: string;
  ingredients: string;
  special_ingredient: string;
  prices: PriceType[];
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: string;
  index: number;
};

export type GetProductRequest = {
  category?: string;
  type?: string;
  textSearch?: string;
};
