import {Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useEmptyItem, {EmptyItemProps} from './hook.ts';

const EmptyItem: FC<EmptyItemProps> = props => {
  const {text} = useEmptyItem(props);
  return (
    <View style={styles.emptyItemWrapper}>
      <Text style={styles.emptyText}>{text}</Text>
    </View>
  );
};

export default EmptyItem;
