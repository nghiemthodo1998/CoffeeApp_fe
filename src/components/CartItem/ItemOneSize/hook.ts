import {ProductType} from '../../../data/type';

export interface ItemOneSizeProps {
  data: ProductType;
}

const useItemOneSize = (props: ItemOneSizeProps) => {
  return {
    ...props,
  };
};

export default useItemOneSize;
