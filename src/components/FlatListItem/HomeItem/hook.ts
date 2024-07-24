import {ProductType} from '../../../data/type';

export interface HomeItemProps {
  data: ProductType;
  isShowRating?: boolean;
}

const useHomeItem = (props: HomeItemProps) => {
  return {
    ...props,
  };
};

export default useHomeItem;
