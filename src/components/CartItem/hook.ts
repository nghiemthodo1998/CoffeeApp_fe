import {ProductType} from '../../data/type';

export interface CartItemProps {
  item: ProductType;
}

const useCartItem = (props: CartItemProps) => {
  return {
    ...props,
  };
};

export default useCartItem;
