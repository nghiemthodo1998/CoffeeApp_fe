import {useState} from 'react';
import {PriceProductType, ProductType} from '../../data/type';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NavigationType} from '../../common/type';
import {AppDispatch} from '../../store';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/cartSlice';

export interface AddProductDetailProps {
  data?: ProductType;
}

const useAddProductDetail = (props: AddProductDetailProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const {navigate} = useNavigation<NavigationProp<NavigationType>>();
  const {data} = props;
  const [sizeSelected, setSizeSelected] = useState<PriceProductType>();

  const handleChooseSize = (size: PriceProductType) => {
    setSizeSelected({...size, quantity: 1});
  };

  const handleAddToCart = async () => {
    if (!data || !sizeSelected) return;
    dispatch(addToCart({...data, prices: [sizeSelected]}));
    navigate('CartScreen');
  };

  return {
    ...props,
    sizeSelected,
    handleChooseSize,
    handleAddToCart,
  };
};

export default useAddProductDetail;
