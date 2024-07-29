import {ProductType} from '../../data/type';

export interface FavoriteItemProps {
  data: ProductType;
}

const useFavoriteItem = (props: FavoriteItemProps) => {
  return {
    ...props,
  };
};

export default useFavoriteItem;
