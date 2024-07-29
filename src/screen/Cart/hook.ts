import {useCallback, useEffect, useState} from 'react';
import {ProductType} from '../../data/type';

export interface CartScreenProps {}

const useCartScreen = (props: CartScreenProps) => {
  const [cartList, setCartList] = useState<ProductType[]>([]);
  console.log('cartList', cartList);

  const fetchCartData = useCallback(async () => {}, []);

  const handleClearCart = async () => {};

  useEffect(() => {
    fetchCartData();
  }, [fetchCartData]);
  return {
    ...props,
    cartList,
    handleClearCart,
  };
};

export default useCartScreen;
