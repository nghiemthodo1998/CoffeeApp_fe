import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../common/theme';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  cartWrapper: {
    backgroundColor: theme.color.background,
    height: height,
    flex: 1,
    position: 'relative',
  },
  cartContainer: {
    flex: 1,
    paddingHorizontal: 30,
    marginBottom: 108,
  },
  listProductContainer: {
    gap: 16,
  },
  emptyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  empty: {
    color: theme.text.lightGray,
  },
  payWrapper: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    flex: 1,
    width: width,
  },
});

export default styles;
