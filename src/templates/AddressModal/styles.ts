import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

export const styles = StyleSheet.create({
  addressContainer: {},
  addressHeaderText: {
    color: colors.mainText,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  addressSubText: {
    borderColor: colors.darkGray,
    paddingVertical: 5,
    paddingHorizontal: 11,
    borderRadius: 8,
    color: colors.primary,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 11,
  },
  balanceContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
