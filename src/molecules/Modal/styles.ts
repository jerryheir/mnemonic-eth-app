import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.bgColor,
    flex: 1,
  },
  modalHeader: {
    height: 45,
    borderBottomColor: colors.darkGray,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    color: colors.primary,
    fontSize: 21,
    fontWeight: 'bold',
  },
  childView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
});
