import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../common/theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  emptyItemWrapper: {
    flex: 1,
    width: width - 60,
  },
  emptyText: {
    color: theme.text.gray,
    textAlign: 'center',
  },
});

export default styles;
