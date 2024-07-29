import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../common/theme';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  homeWrapper: {
    backgroundColor: theme.color.background,
    height: height,
    flex: 1,
  },
  homeContainer: {
    flex: 1,
  },
  headerWrapper: {
    paddingHorizontal: 30,
  },
  textSearch: {
    color: theme.text.white,
    fontSize: theme.fontSize.fs_28,
    fontWeight: theme.fontWeight.fw_600,
    lineHeight: theme.lineHeight.lh_36,
    paddingHorizontal: 30,
  },
  inputSearchWrapper: {
    padding: 30,
  },
  inputSearchContainer: {
    paddingHorizontal: 13,
    backgroundColor: '#141921',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  inputSearch: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'transparent',
    color: theme.text.white,
    flex: 1,
  },
  categoriesListContainer: {
    gap: 20,
    paddingHorizontal: 30,
  },
  categoryWrapper: {},
  categoryContainer: {
    alignItems: 'center',
    gap: 6,
  },
  categoryName: {
    color: theme.text.gray,
    fontSize: theme.fontSize.fs_14,
    fontWeight: theme.fontWeight.fw_600,
    lineHeight: theme.lineHeight.lh_20,
  },
  categoryNameActive: {
    color: theme.text.orange,
  },
  categoryActive: {
    backgroundColor: theme.color.orange,
    width: 8,
    height: 8,
    borderRadius: 7,
  },

  coffeeContainer: {
    marginTop: 30,
    gap: 20,
    paddingHorizontal: 30,
  },
  beansWrapper: {
    marginTop: 23,
    marginBottom: 30,
  },
  beansLabel: {
    paddingHorizontal: 30,
    color: theme.text.white,
    fontWeight: theme.fontWeight.fw_500,
    lineHeight: theme.lineHeight.lh_20,
  },

  beansContainer: {
    marginTop: 20,
    gap: 20,
    paddingHorizontal: 30,
  },
});

export default styles;
