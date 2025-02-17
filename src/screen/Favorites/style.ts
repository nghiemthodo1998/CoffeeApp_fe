import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../common/theme';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  favoriteWrapper: {
    backgroundColor: theme.color.background,
    height: height,
    flex: 1,
  },
  favoriteContainer: {
    paddingHorizontal: 30,
    gap: 28,
  },
  emptyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  empty: {
    color: theme.text.lightGray,
  },
});

export default styles;
