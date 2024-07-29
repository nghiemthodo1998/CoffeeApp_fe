import {ProductType} from '../../../data/type';

export interface DetailInfoProps {
  data?: ProductType;
}

const useDetailInfo = (props: DetailInfoProps) => {
  return {
    ...props,
  };
};

export default useDetailInfo;
