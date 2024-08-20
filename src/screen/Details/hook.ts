import {RouteProp, useRoute} from '@react-navigation/native';
import {NavigationType} from '../../common/type';
import {ProductType} from '../../data/type';
import {useCallback, useEffect, useState} from 'react';
import {productServices} from '../../services';

type DetailScreenRouteProp = RouteProp<NavigationType, 'DetailScreen'>;

export interface DetailScreenProps {}

const useDetailScreen = (props: DetailScreenProps) => {
  const route = useRoute<DetailScreenRouteProp>();

  const {detailId} = route.params;

  const [dataDetail, setDataDetail] = useState<{
    loading: boolean;
    data: ProductType | undefined;
  }>({loading: false, data: undefined});

  const handleToggleFavorite = async (productId?: string) => {
    if (!productId) return;
    const response = await productServices.updateProductFavorite({
      productId: detailId,
    });

    if (!response.success) return;

    setDataDetail(prev => ({
      ...prev,
      data: {...prev.data!, favourite: response.favorite},
    }));
  };

  const fetchProductDetail = useCallback(async () => {
    if (!detailId) return;

    setDataDetail(prev => ({...prev, loading: true}));

    try {
      const response = await productServices.getProductDetail({
        productId: detailId,
      });

      setDataDetail(prev => ({...prev, loading: false, data: response}));
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
