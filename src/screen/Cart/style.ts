import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../common/theme';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  cartWrapper: {
    backgroundColor: theme.color.background,
    height: height,
    flex: 1,
  },
  cartContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
});

export default styles;
