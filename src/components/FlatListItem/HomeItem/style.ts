import {StyleSheet} from 'react-native';
import {theme} from '../../../common/theme';

const styles = StyleSheet.create({
  homeItemWrapper: {
    padding: 12,
    borderRadius: 23,
  },
  imageBackground: {
    width: 126,
    height: 126,
    borderRadius: 23,
  },
  image: {
    borderRadius: 20,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    position: 'absolute',
    right: 0,
    width: 53,
    justifyContent: 'center',
    backgroundColor: '#00000099',
    borderTopEndRadius: 20,
    borderBottomLeftRadius: 20,
  },
  rating: {
    color: theme.text.white,
    fontWeight: theme.fontWeight.fw_600,
    fontSize: theme.fontSize.fs_10,
    lineHeight: theme.lineHeight.lh_20,
  },
  name: {
    color: theme.text.white,
    paddingTop: 10,
    fontSize: theme.fontSize.fs_13,
    lineHeight: theme.lineHeight.lh_20,
  },
  special: {
    color: theme.text.white,
    fontSize: theme.fontSize.fs_9,
    lineHeight: theme.lineHeight.lh_20,
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  currency: {
    color: theme.text.orange,
    fontSize: theme.fontSize.fs_15,
    fontWeight: theme.fontWeight.fw_600,
    lineHeight: theme.lineHeight.lh_20,
  },
  price: {
    color: theme.text.white,
    fontSize: theme.fontSize.fs_15,
    fontWeight: theme.fontWeight.fw_600,
    lineHeight: theme.lineHeight.lh_20,
  },
  add: {
    width: 28,
    height: 28,
    borderRadius: 7,
    backgroundColor: theme.color.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
