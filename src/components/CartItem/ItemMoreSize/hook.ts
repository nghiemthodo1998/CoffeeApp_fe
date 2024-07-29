import {ProductType} from '../../../data/type';

export interface ItemMoreSizeProps {
  data: ProductType;
}

const useItemMoreSize = (props: ItemMoreSizeProps) => {
  return {
    ...props,
  };
};

export default useItemMoreSize;
