import {useRef, useState} from 'react';
import CoffeeData from '../../data/CoffeeData';
import {ProductType} from '../../data/type';
import {FlatList} from 'react-native';

export interface HomeScreenProps {}

const useHomeScreen = (props: HomeScreenProps) => {
  const coffeeRef = useRef<FlatList<any | null>>(null);
  const [isFocusSearch, setIsFocusSearch] = useState<boolean>(false);
  const [textSearch, setTextSearch] = useState<string>('');
  const [categorySelected, setCategorySelected] = useState<string>('All');
  const [coffeeList, setCoffeeList] = useState<ProductType[]>(CoffeeData);

  const categoriesFromData = Array.from(
    new Set(CoffeeData.map(item => item.name)),
  );

  const categoriesList = ['All', ...categoriesFromData];

  const handleFocusSearch = () => {
    setIsFocusSearch(true);
  };

  const handleBlurSearch = () => {
    setIsFocusSearch(false);
  };

  const handleSearchCoffee = (text: string) => {
    setTextSearch(text);
    setCategorySelected('All');

    let coffeeFilter = CoffeeData.filter(item =>
      item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()),
    );

    setCoffeeList(coffeeFilter);
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

    if (category === 'All') {
      setCoffeeList(CoffeeData);
    } else {
      let coffeeFilter = CoffeeData.filter(item => item.name === category);
      setCoffeeList(coffeeFilter);
    }

    handleScrollToTop();
  };

  return {
    ...props,
    isFocusSearch,
    categoriesList,
    textSearch,
    categorySelected,
    coffeeList,
    coffeeRef,
    handleFocusSearch,
    handleBlurSearch,
    handleSearchCoffee,
    handleSelectCategory,
  };
};

export default useHomeScreen;
