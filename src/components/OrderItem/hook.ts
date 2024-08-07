import {ProductType} from '../../data/type';

export interface OrderItemProps {
  dataOrder: ProductType[];
}

const useOrderItem = (props: OrderItemProps) => {
  return {
    ...props,
  };
};

export default useOrderItem;
