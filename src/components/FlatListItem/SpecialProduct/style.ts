import {StyleSheet} from 'react-native';
import {theme} from '../../../common/theme';

const styles = StyleSheet.create({
  specialWrapper: {
    flexDirection: 'row',
    gap: 20,
  },
  specialContainer: {
    borderRadius: 10,
    backgroundColor: theme.color.lightBg,
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: theme.fontWeight.fw_500,
    fontSize: theme.fontSize.fs_10,
    lineHeight: theme.lineHeight.lh_20,
    color: theme.text.lightGray,
  },
});

export default styles;
