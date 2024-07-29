import {useCallback, useEffect, useState} from 'react';
import {CartType, PriceProductType, ProductType} from '../../data/type';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NavigationType} from '../../common/type';

export interface AddProductDetailProps {
  data?: ProductType;
}

const useAddProductDetail = (props: AddProductDetailProps) => {
  const {navigate} = useNavigation<NavigationProp<NavigationType>>();
  const {data} = props;
  const [sizeSelected, setSizeSelected] = useState<PriceProductType>();
  const [cartList, setCartList] = useState<ProductType[]>([]);

  const fetchCartData = useCallback(async () => {}, []);

  const handleChooseSize = (size: PriceProductType) => {
    setSizeSelected(size);
  };

  const handleAddToCart = async () => {
    if (!data || !sizeSelected) return;

    // try {
    //   let newCart = [...cartList];

    //   const existingProductIndex = newCart.findIndex(
    //     product => product.id === data.id,
    //   );

    //   if (existingProductIndex !== -1) {
    //     const existingProduct = newCart[existingProductIndex];

    //     data.prices.forEach(newPrice => {
    //       const existingPriceIndex = existingProduct.prices.findIndex(
    //         price => price.size === newPrice.size,
    //       );

    //       if (existingPriceIndex !== -1) {
    //         existingProduct.prices[existingPriceIndex].quantity =
    //           (existingProduct.prices[existingPriceIndex].quantity || 0) + 1;
    //       } else {
    //         existingProduct.prices.push({...newPrice, quantity: 1});
    //       }
    //     });
    //   } else {
    //     newCart.push({...data, prices: [sizeSelected]});
    //   }
    // } catch (error) {}

    navigate('CartScreen');
  };

  useEffect(() => {
    fetchCartData();
  }, [fetchCartData]);

  return {
    ...props,
    sizeSelected,
    handleChooseSize,
    handleAddToCart,
  };
};

export default useAddProductDetail;
