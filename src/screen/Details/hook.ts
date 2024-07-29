import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NavigationType} from '../../common/type';
import CoffeeData from '../../data/CoffeeData';
import BeansData from '../../data/BeansData';

type DetailScreenRouteProp = RouteProp<NavigationType, 'DetailScreen'>;

export interface DetailScreenProps {}

const useDetailScreen = (props: DetailScreenProps) => {
  const route = useRoute<DetailScreenRouteProp>();
  const navigation = useNavigation();
  const {detailId, type} = route.params;
  const dataList = type === 'Coffee' ? CoffeeData : BeansData;

  const dataDetail = dataList.find(item => item.id === detailId);

  const handleBack = () => {
    navigation.goBack();
  };
  return {
    ...props,
    data: dataDetail,
    handleBack,
  };
};

export default useDetailScreen;
