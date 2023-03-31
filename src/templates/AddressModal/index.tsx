import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import ModalHOC from '../../molecules/Modal';
import {colors} from '../../utils/constants';
import {styles} from './styles';
import Button from '../../atoms/Button';

interface AddressModalProps {
  loading?: boolean;
  visible: boolean;
  onClose: () => void;
  address: string;
  getWallet: () => void;
  balance: string | number;
}

const AddressModal = ({
  visible,
  loading,
  onClose,
  balance,
  address,
  getWallet,
}: AddressModalProps) => {
  return (
    <ModalHOC
      title={loading ? 'Generating Wallet ...' : 'Wallet'}
      onClose={onClose}
      onShow={getWallet}
      visible={visible}>
      {loading ? (
        <ActivityIndicator size={36} color={colors.primary} />
      ) : (
        <>
          <View style={styles.balanceContainer}>
            <Text style={styles.addressHeaderText}>{'ETH ADDRESS'}</Text>
            <Text style={styles.addressSubText}>
              {address
                ? address
                : 'ERROR: Address not generated. Please try again'}
            </Text>
            <Text>
              Balance:{' '}
              <Text style={styles.addressHeaderText}>{balance} ETH</Text>
            </Text>
            <Button text={'CLOSE'} onPress={onClose} />
          </View>
        </>
      )}
    </ModalHOC>
  );
};

export default AddressModal;
