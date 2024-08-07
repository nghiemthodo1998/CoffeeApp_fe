import {PriceProductType} from '../../data/type';

export interface SizeDetailProps {
  size: PriceProductType;
  key: number;
}

const useSizeDetail = (props: SizeDetailProps) => {
  return {
    ...props,
  };
};

export default useSizeDetail;
