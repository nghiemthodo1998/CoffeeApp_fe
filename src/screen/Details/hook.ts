import {RouteProp, useRoute} from '@react-navigation/native';
import {NavigationType} from '../../common/type';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';
import {ProductType} from '../../data/type';
import {toggleFavorite} from '../../store/productSlice';
import {useCallback, useEffect, useState} from 'react';
import {productServices} from '../../services';

type DetailScreenRouteProp = RouteProp<NavigationType, 'DetailScreen'>;

export interface DetailScreenProps {}

const useDetailScreen = (props: DetailScreenProps) => {
  const route = useRoute<DetailScreenRouteProp>();
  const dispatch = useDispatch<AppDispatch>();

  const {detailId} = route.params;

  const [dataDetail, setDataDetail] = useState<{
    loading: boolean;
    data: ProductType | undefined;
  }>({loading: false, data: undefined});

  const handleToggleFavorite = (productId?: string) => {
    if (!productId) return;
    dispatch(toggleFavorite({productId}));
  };

  const fetchProductDetail = useCallback(async () => {
    if (!detailId) return;
    setDataDetail(prev => ({...prev, loading: true}));
    try {
      const response = await productServices.getProductDetail({
        productId: detailId,
      });

      setDataDetail(prev => ({...prev, loading: false, data: response}));
      console.log('response', response);
    } catch (error) {
      setDataDetail(prev => ({...prev, loading: false, data: undefined}));
    }
  }, [detailId]);

  useEffect(() => {
    fetchProductDetail();
  }, [fetchProductDetail]);

  return {
    ...props,
    data: dataDetail,
    handleToggleFavorite,
  };
};

export default useDetailScreen;
