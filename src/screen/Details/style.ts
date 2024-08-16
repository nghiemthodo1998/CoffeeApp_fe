import {StyleSheet} from 'react-native';
import {theme} from '../../common/theme';

const styles = StyleSheet.create({
  detailWrapper: {
    flex: 1,
    height: 'auto',
    backgroundColor: theme.color.background,
  },
  detailContainer: {},
  loading: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default styles;
