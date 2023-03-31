import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    marginVertical: 11,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});
