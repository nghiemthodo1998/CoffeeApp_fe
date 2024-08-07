import {StyleSheet} from 'react-native';
import {theme} from '../../common/theme';

const styles = StyleSheet.create({
  orderWrapper: {
    borderRadius: 23,
    paddingHorizontal: 18,
    paddingVertical: 13,
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  images: {
    width: 57,
    height: 57,
    marginRight: 20,
    borderRadius: 16,
  },
  name: {
    fontWeight: theme.fontWeight.fw_400,
    fontSize: theme.fontSize.fs_16,
    lineHeight: theme.lineHeight.lh_20,
    color: theme.text.white,
  },
  special: {
    fontWeight: theme.fontWeight.fw_400,
    fontSize: theme.fontSize.fs_10,
    lineHeight: theme.lineHeight.lh_20,
    color: theme.text.white,
  },
  currency: {
    fontWeight: theme.fontWeight.fw_600,
    fontSize: theme.fontSize.fs_20,
    lineHeight: theme.lineHeight.lh_20,
    color: theme.text.orange,
    marginRight: 5,
  },
  price: {
    fontWeight: theme.fontWeight.fw_600,
    fontSize: theme.fontSize.fs_20,
    lineHeight: theme.lineHeight.lh_20,
    color: theme.text.white,
  },
  allSizeWrapper: {
    paddingTop: 12,
    paddingBottom: 5,
    gap: 10,
  },
});

export default styles;
