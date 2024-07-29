import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useSpecialProduct, {SpecialProductProps} from './hook.ts';
import {Svg} from 'react-native-svg';
import BeanIcon from '../../../assets/icons/BeanIcon.tsx';
import CoffeeIcon from '../../../assets/icons/CoffeeIcon.tsx';
import MilkIcon from '../../../assets/icons/MilkIcon.tsx';
import LocationIcon from '../../../assets/icons/LocationIcon.tsx';

const SpecialProduct: FC<SpecialProductProps> = props => {
  const {type, ingredients} = useSpecialProduct(props);
  return (
    <View style={styles.specialWrapper}>
      <View style={styles.specialContainer}>
        {type === 'Coffee' ? (
          <Svg height="29px" width="34px">
            <CoffeeIcon />
          </Svg>
        ) : (
          <Svg height="33px" width="33px">
            <BeanIcon />
          </Svg>
        )}

        <Text style={styles.text}>{type}</Text>
      </View>
      <View style={styles.specialContainer}>
        {type === 'Coffee' ? (
          <Svg height="28px" width="28px">
            <MilkIcon />
          </Svg>
        ) : (
          <Svg height="24px" width="25px">
            <LocationIcon />
          </Svg>
        )}
        <Text style={styles.text}>{ingredients}</Text>
      </View>
    </View>
  );
};

export default SpecialProduct;
