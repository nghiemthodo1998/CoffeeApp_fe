import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../common/theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  detailInfoContainer: {
    height: 148,
    width: width,
    backgroundColor: '#00000080',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'column',
    gap: 13,
  },
  detailInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    color: theme.text.white,
    fontSize: theme.fontSize.fs_20,
    lineHeight: theme.lineHeight.lh_20,
    fontWeight: theme.fontWeight.fw_600,
  },
  special: {
    color: theme.text.lightGray,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  rating: {
    color: theme.text.white,
    lineHeight: theme.lineHeight.lh_20,
    fontSize: theme.fontSize.fs_16,
    fontWeight: theme.fontWeight.fw_600,
  },
  subRating: {
    color: theme.text.lightGray,
    lineHeight: theme.lineHeight.lh_20,
    fontSize: theme.fontSize.fs_10,
  },
  roastContainer: {
    width: 132,
    height: 45,
    borderRadius: 10,
    backgroundColor: theme.color.lightBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roast: {
    fontWeight: theme.fontWeight.fw_500,
    fontSize: theme.fontSize.fs_10,
    lineHeight: theme.lineHeight.lh_20,
    color: theme.text.lightGray,
  },
});

export default styles;
