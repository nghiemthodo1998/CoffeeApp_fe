import {RouteProp, useRoute} from '@react-navigation/native';
import {NavigationType} from '../../common/type';
import CoffeeData from '../../data/CoffeeData';
import BeansData from '../../data/BeansData';

type DetailScreenRouteProp = RouteProp<NavigationType, 'DetailScreen'>;

export interface DetailScreenProps {}

const useDetailScreen = (props: DetailScreenProps) => {
  const route = useRoute<DetailScreenRouteProp>();
  const {detailId, type} = route.params;
  const dataList = type === 'Coffee' ? CoffeeData : BeansData;

  const dataDetail = dataList.find(item => item.id === detailId);

  return {
    ...props,
    data: dataDetail,
  };
};

export default useDetailScreen;
