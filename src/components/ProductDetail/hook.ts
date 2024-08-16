import {useNavigation} from '@react-navigation/native';
import {ProductType} from '../../data/type';

export interface ProductDetailProps {
  data: ProductType;
  borderRadiusImage?: number;
  onToggleFavorite: (productId?: string) => void;
}

const useProductDetail = (props: ProductDetailProps) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return {
    ...props,
    handleBack,
  };
};

export default useProductDetail;
