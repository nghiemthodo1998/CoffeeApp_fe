import {useCallback, useEffect, useRef, useState} from 'react';
import CoffeeData from '../../data/CoffeeData';
import {ProductType} from '../../data/type';
import {FlatList} from 'react-native';
import {productServices} from '../../services';

export interface HomeScreenProps {}

const useHomeScreen = (props: HomeScreenProps) => {
  const coffeeRef = useRef<FlatList<any | null>>(null);
  const [isFocusSearch, setIsFocusSearch] = useState<boolean>(false);
  const [textSearch, setTextSearch] = useState<string>('');
  const [categorySelected, setCategorySelected] = useState<string>('All');
  const [isClickSearch, setIsClickSearch] = useState(true);
  const [coffeeList, setCoffeeList] = useState<{
    loading: boolean;
    data: ProductType[];
  }>({loading: false, data: []});

  const [beanList, setBeanList] = useState<{
    loading: boolean;
    data: ProductType[];
  }>({loading: false, data: []});

  const [categoriesList, setCategoriesList] = useState<string[]>([]);

  const handleFocusSearch = () => {
    setIsFocusSearch(true);
  };

  const handleBlurSearch = () => {
    setIsFocusSearch(false);
  };

  const handleSearchCoffee = () => {
    setCategorySelected('All');
    setIsClickSearch(prev => !prev);
    handleScrollToTop();
  };

  const handleScrollToTop = () => {
    coffeeRef?.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  };

  const handleSelectCategory = (category: string) => {
    if (!category) return;

    setCategorySelected(category);
    setTextSearch('');
    handleScrollToTop();
  };

  const fetchCategories = useCallback(async () => {
    try {
      const response = await productServices.getCategories();

      let categories = response
        .filter(item => {
          if (!(item.type === 'Coffee')) return;
          return item.name;
        })
        .map(item => item.name);

      setCategoriesList(['All', ...categories]);
    } catch (error) {}
  }, []);

  const fetchCoffeeList = useCallback(async () => {
    setCoffeeList(prev => ({...prev, loading: true}));

    try {
      const response = await productServices.getProducts({
        category: categorySelected,
        type: 'Coffee',
        textSearch: textSearch,
      });

      setCoffeeList(prev => ({...prev, loading: false, data: response}));
    } catch (error) {
      setCoffeeList(prev => ({...prev, loading: false}));
    }
  }, [isClickSearch, categorySelected]);

  const fetchBeanList = useCallback(async () => {
    setBeanList(prev => ({...prev, loading: true}));

    try {
      const response = await productServices.getProducts({
        category: 'All',
        type: 'Bean',
      });

      setBeanList(prev => ({...prev, loading: false, data: response}));
    } catch (error) {
      setBeanList(prev => ({...prev, loading: false}));
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    fetchCoffeeList();
  }, [fetchCoffeeList]);

  useEffect(() => {
    fetchBeanList();
  }, [fetchBeanList]);

  return {
    ...props,
    isFocusSearch,
    categoriesList,
    textSearch,
    categorySelected,
    coffeeList,
    beanList,
    coffeeRef,
    setTextSearch,
    handleFocusSearch,
    handleBlurSearch,
    handleSearchCoffee,
    handleSelectCategory,
  };
};

export default useHomeScreen;
