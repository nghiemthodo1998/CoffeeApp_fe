import {StyleSheet} from 'react-native';
import {theme} from '../../common/theme';

const styles = StyleSheet.create({
  stackWrapper: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  windowWrapper: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.border.gray,
  },
});

export default styles;
