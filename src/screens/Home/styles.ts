import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

export const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: colors.bgColor,
    flex: 1,
    padding: 11,
    justifyContent: 'space-between',
  },
  homeButton: {
    alignSelf: 'center',
  },
  homeHeaderText: {
    fontSize: 21,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
