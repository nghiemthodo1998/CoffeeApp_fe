import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ProductType} from '../../data/type';
import {NavigationType} from '../../common/type';

export interface FavoriteItemProps {
  data: ProductType;
  onToggleFavorite: (productId?: string) => void;
}

const useFavoriteItem = (props: FavoriteItemProps) => {
  const {navigate} = useNavigation<NavigationProp<NavigationType>>();

  return {
    ...props,
    navigate,
  };
};

export default useFavoriteItem;
