import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ProductType} from '../../../data/type';
import {NavigationType} from '../../../common/type';

export interface HomeItemProps {
  data: ProductType;
  isShowRating?: boolean;
}

const useHomeItem = (props: HomeItemProps) => {
  const {navigate} = useNavigation<NavigationProp<NavigationType>>();
  const {data} = props;
  const price = data.prices[data.prices.length - 1];

  const handleNavigateDetail = () => {
    navigate('DetailScreen', {detailId: data.id, type: data.type});
  };

  return {
    ...props,
    price,
    handleNavigateDetail,
  };
};

export default useHomeItem;
