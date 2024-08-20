import {useCallback, useEffect, useState} from 'react';
import {productServices} from '../../services';
import {ProductType} from '../../services/productServices';

export interface FavoritesScreenProps {}

const useFavoritesScreen = (props: FavoritesScreenProps) => {
  const [favoriteList, setFavoriteList] = useState<{
    loading: boolean;
    data: ProductType[];
  }>({loading: true, data: []});

  const handleToggleFavorite = async (productId?: string) => {
    if (!productId) return;

    const response = await productServices.updateProductFavorite({
      productId: productId,
    });

    const newFavoriteList = favoriteList.data.filter(
      item => item.id !== productId,
    );
    setFavoriteList(prev => ({...prev, data: newFavoriteList}));

    if (!response.success) return;
  };

  const fetchProductFavoriteList = useCallback(async () => {
    setFavoriteList(prev => ({...prev, loading: true}));
    try {
      const response = await productServices.getProductFavoritesList();

      setFavoriteList(prev => ({...prev, loading: false, data: response}));
    } catch (error) {
      setFavoriteList(prev => ({...prev, loading: false, data: []}));
    }
  }, []);

  useEffect(() => {
    fetchProductFavoriteList();
  }, [fetchProductFavoriteList]);

  return {
    ...props,
    favoriteList,
    handleToggleFavorite,
  };
};

export default useFavoritesScreen;
