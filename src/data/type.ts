export type PriceProductType = {
  size: string;
  price: string;
  currency: string;
  quantity?: number;
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
  prices: PriceProductType[];
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: string;
  index: number;
};
