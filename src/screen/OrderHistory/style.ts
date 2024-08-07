import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../common/theme';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  orderWrapper: {
    backgroundColor: theme.color.background,
    height: height,
    flex: 1,
    position: 'relative',
  },
  orderContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
  emptyContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  empty: {
    color: theme.text.lightGray,
  },
  wrapper: {
    gap: 25,
  },
  orderInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  text: {
    fontWeight: theme.fontWeight.fw_600,
    fontSize: theme.fontSize.fs_14,
    lineHeight: theme.lineHeight.lh_20,
    color: theme.color.white,
  },
  subText: {
    fontWeight: theme.fontWeight.fw_400,
    fontSize: theme.fontSize.fs_14,
    lineHeight: theme.lineHeight.lh_20,
    color: theme.color.white,
  },
  price: {
    fontWeight: theme.fontWeight.fw_400,
    fontSize: theme.fontSize.fs_14,
    lineHeight: theme.lineHeight.lh_20,
    color: theme.color.orange,
    textAlign: 'right',
  },
});

export default styles;
