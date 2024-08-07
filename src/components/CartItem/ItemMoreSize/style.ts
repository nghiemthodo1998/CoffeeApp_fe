import {StyleSheet} from 'react-native';
import {theme} from '../../../common/theme';

const styles = StyleSheet.create({
  wrapper: {},
  background: {
    paddingTop: 9,
    paddingBottom: 15,
    paddingHorizontal: 12,
    borderRadius: 23,
  },
  infoItemWrapper: {
    flexDirection: 'row',
    gap: 22,
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
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
  roastContainer: {
    backgroundColor: theme.color.background,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  roast: {
    color: theme.text.lightGray,
    fontWeight: theme.fontWeight.fw_500,
    fontSize: theme.fontSize.fs_10,
    lineHeight: theme.lineHeight.lh_20,
  },
  container: {
    paddingHorizontal: 5,
    gap: 8,
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sizeWrapper: {
    backgroundColor: theme.color.background,
    borderRadius: 10,
    width: 72,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
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
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityContainer: {
    backgroundColor: theme.color.background,
    height: 30,
    width: 50,
    borderRadius: 10,
    borderColor: theme.color.orange,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: theme.color.orange,
    width: 28,
    height: 28,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnRemove: {
    backgroundColor: theme.color.red,
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
