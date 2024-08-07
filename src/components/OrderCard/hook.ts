import {useMemo} from 'react';
import {ProductType} from '../../data/type';

export interface OrderCardProps {
  data: ProductType;
  key: number;
}

const useOrderCard = (props: OrderCardProps) => {
  const {data} = props;

  const totalAllSize = useMemo(
    () =>
      data.prices.reduce(
        (acc, cur) => acc + (cur.quantity || 1) * Number(cur.price),
        0,
      ),
    [],
  );
  return {
    ...props,
    totalAllSize,
  };
};

export default useOrderCard;
