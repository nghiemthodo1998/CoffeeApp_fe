import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../common/theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  detailWrapper: {flex: 1},
  detailContainer: {flex: 1},
  backgroundImage: {
    width: width,
    height: '100%',
  },
  stackWrapper: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  windowWrapper: {
    width: 34,
    height: 34,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.border.gray,
  },

  detailInfoWrapper: {
    position: 'absolute',
    bottom: 0,
  },
});

export default styles;
