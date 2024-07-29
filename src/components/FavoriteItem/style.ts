import {StyleSheet} from 'react-native';
import {theme} from '../../common/theme';

const styles = StyleSheet.create({
  favoriteWrapper: {},
  descriptionWrapper: {
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  label: {
    fontSize: theme.fontSize.fs_14,
    fontWeight: theme.fontWeight.fw_600,
    lineHeight: theme.lineHeight.lh_20,
    color: theme.color.lightGray,
  },
  description: {
    fontSize: theme.fontSize.fs_12,
    lineHeight: theme.lineHeight.lh_20,
    color: theme.color.white,
  },
});

export default styles;
