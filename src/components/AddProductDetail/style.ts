import {StyleSheet} from 'react-native';
import {theme} from '../../common/theme';

const styles = StyleSheet.create({
  addProductWrapper: {
    padding: 20,
    flex: 1,
    backgroundColor: theme.color.background,
  },
  label: {
    color: theme.text.lightGray,
    fontWeight: theme.fontWeight.fw_600,
    fontSize: theme.fontSize.fs_14,
    lineHeight: theme.lineHeight.lh_20,
    marginBottom: 15,
  },
  description: {
    color: theme.text.white,
    fontSize: theme.fontSize.fs_12,
    lineHeight: theme.lineHeight.lh_20,
  },
  sizeWrapper: {
    marginTop: 8,
  },
  sizeContainer: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 25,
  },
  sizeItem: {
    height: 40,
    flex: 1,
    borderRadius: 10,
    backgroundColor: theme.color.lightBg,
    borderWidth: 2,
    borderColor: 'transparent',
    justifyContent: 'center',
  },
  sizeItemActive: {
    height: 40,
    flex: 1,
    borderRadius: 10,
    backgroundColor: theme.color.lightBg,
    borderWidth: 2,
    borderColor: theme.color.orange,
    justifyContent: 'center',
  },
  sizeLabel: {
    color: theme.text.lightGray,
    fontWeight: theme.fontWeight.fw_500,
    fontSize: theme.fontSize.fs_16,
    lineHeight: theme.lineHeight.lh_20,
    textAlign: 'center',
  },
  sizeLabelActive: {
    color: theme.text.orange,
    fontWeight: theme.fontWeight.fw_500,
    fontSize: theme.fontSize.fs_16,
    lineHeight: theme.lineHeight.lh_20,
    textAlign: 'center',
  },
  priceWrapper: {
    marginTop: 28,
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
