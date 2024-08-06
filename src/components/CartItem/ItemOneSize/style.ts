import {StyleSheet} from 'react-native';
import {theme} from '../../../common/theme';

const styles = StyleSheet.create({
  wrapper: {},
  background: {
    paddingTop: 12,
    paddingBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 23,
  },
  infoItemWrapper: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 126,
    height: 126,
    borderRadius: 20,
  },
  infoItem: {},
  name: {
    color: theme.text.white,
    fontSize: theme.fontSize.fs_16,
    lineHeight: theme.lineHeight.lh_20,
  },
  special: {
    fontSize: theme.fontSize.fs_10,
    lineHeight: theme.lineHeight.lh_20,
    color: theme.text.lightGray,
    marginBottom: 10,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
    marginBottom: 9,
  },
  sizeWrapper: {
    backgroundColor: theme.color.background,
    height: 35,
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  size: {
    fontSize: theme.fontSize.fs_16,
    lineHeight: theme.lineHeight.lh_20,
    fontWeight: theme.fontWeight.fw_500,
    color: theme.text.white,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  currency: {
    fontSize: theme.fontSize.fs_20,
    lineHeight: theme.lineHeight.lh_20,
    fontWeight: theme.fontWeight.fw_600,
    color: theme.text.orange,
  },
  price: {
    fontSize: theme.fontSize.fs_20,
    lineHeight: theme.lineHeight.lh_20,
    fontWeight: theme.fontWeight.fw_600,
    color: theme.text.white,
  },
  quantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  quantityContainer: {
    backgroundColor: theme.color.background,
    paddingHorizontal: 22,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: theme.color.orange,
    borderWidth: 1,
  },
  btn: {
    backgroundColor: theme.color.orange,
    width: 28,
    height: 28,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rotate: {
    transform: [{rotate: '45deg'}],
  },
  quantity: {
    fontSize: theme.fontSize.fs_16,
    lineHeight: theme.lineHeight.lh_20,
    fontWeight: theme.fontWeight.fw_500,
    color: theme.text.white,
  },
});

export default styles;
