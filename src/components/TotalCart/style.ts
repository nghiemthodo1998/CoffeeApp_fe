import {StyleSheet} from 'react-native';
import {theme} from '../../common/theme';

const styles = StyleSheet.create({
  priceWrapper: {
    backgroundColor: theme.color.background,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceLabel: {
    color: theme.text.lightGray,
    fontWeight: theme.fontWeight.fw_600,
    fontSize: theme.fontSize.fs_14,
    lineHeight: theme.lineHeight.lh_20,
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 10,
  },
  currency: {
    color: theme.text.orange,
    fontWeight: theme.fontWeight.fw_600,
    fontSize: theme.fontSize.fs_20,
    lineHeight: theme.lineHeight.lh_20,
  },
  price: {
    color: theme.text.white,
    fontWeight: theme.fontWeight.fw_600,
    fontSize: theme.fontSize.fs_20,
    lineHeight: theme.lineHeight.lh_20,
  },
  addBtnContainer: {
    width: 240,
    height: 60,
    backgroundColor: theme.color.orange,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnContainerDisabled: {
    width: 240,
    height: 60,
    backgroundColor: theme.color.lightGray,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtn: {
    color: theme.text.white,
    fontWeight: theme.fontWeight.fw_600,
    fontSize: theme.fontSize.fs_16,
    lineHeight: theme.lineHeight.lh_20,
  },
});

export default styles;
