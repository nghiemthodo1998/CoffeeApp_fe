import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useAddProductDetail, {AddProductDetailProps} from './hook.ts';

const AddProductDetail: FC<AddProductDetailProps> = props => {
  const {data, sizeSelected, handleChooseSize, handleAddToCart} =
    useAddProductDetail(props);
  return (
    <View style={styles.addProductWrapper}>
      <Text style={styles.label}>Description</Text>
      <Text style={styles.description}>{data?.description}</Text>

      <View style={styles.sizeWrapper}>
        <Text style={styles.label}>Size</Text>
        <View style={styles.sizeContainer}>
          {data?.prices.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleChooseSize(data.prices[index])}
                style={
                  sizeSelected?.size === item.size
                    ? styles.sizeItemActive
                    : styles.sizeItem
                }>
                <Text
                  style={
                    sizeSelected?.size === item.size
                      ? styles.sizeLabelActive
                      : styles.sizeLabel
                  }>
                  {item.size}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.priceWrapper}>
          <View>
            <Text style={styles.priceLabel}>Price</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.currency}>{sizeSelected?.currency}</Text>
              <Text style={styles.price}>{sizeSelected?.price}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleAddToCart}
            disabled={!sizeSelected}
            style={
              sizeSelected
                ? styles.addBtnContainer
                : styles.addBtnContainerDisabled
            }>
            <Text style={styles.addBtn}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddProductDetail;
