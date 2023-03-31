import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

export const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  mnemonicInput: {
    paddingTop: 11,
    height: 100,
    alignSelf: 'center',
  },
  buttonView: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignSelf: 'flex-end',
    height: 30,
    width: '40%',
    marginRight: 8,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 12,
  },
  mnemonicText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    alignSelf: 'center',
    maxWidth: 300,
    marginVertical: 11,
  },
});
