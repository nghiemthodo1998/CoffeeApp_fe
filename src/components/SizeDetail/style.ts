import {StyleSheet} from 'react-native';
import {theme} from '../../common/theme';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 194,
  },
  sizeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizeContainer: {
    height: 35,
    width: 56,
    backgroundColor: theme.color.background,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#21262E',
  },
  text: {
    fontWeight: theme.fontWeight.fw_500,
    fontSize: theme.fontSize.fs_16,
    lineHeight: theme.lineHeight.lh_20,
    color: theme.text.white,
  },
  priceContainer: {
    height: 35,
    width: 85,
    backgroundColor: theme.color.background,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  subText: {
    fontWeight: theme.fontWeight.fw_600,
    fontSize: theme.fontSize.fs_16,
    lineHeight: theme.lineHeight.lh_20,
    color: theme.text.orange,
  },
});

export default styles;
