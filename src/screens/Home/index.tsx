import React, {useState, useCallback} from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import {ethers} from 'ethers';
import {entropyToMnemonic} from 'bip39';
import {randomBytes} from 'react-native-randombytes';
import axios from 'axios';
import * as Keychain from 'react-native-keychain';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import MnemonicInput from '../../molecules/MnemonicInput';
import Button from '../../atoms/Button';
import {styles} from './styles';
import AddressModal from '../../templates/AddressModal';
import {colors} from '../../utils/constants';
import {INFURA_API_KEY} from '../../utils/config';

const network = {
  name: 'mainnet',
  chainId: 1,
};

// const provider = new ethers.providers.JsonRpcProvider(
//   `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
//   network,
// );

const URL = `https://${network.name}.infura.io/v3/${INFURA_API_KEY}`;

function Home(): JSX.Element {
  const [address, setAddress] = useState('');
  const [mnemonic, setMnemonic] = useState('');
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState('');
  const handleGenerateMnemonic = async () => {
    const entropy = randomBytes(16);
    const phrase = entropyToMnemonic(entropy);
    setMnemonic(phrase);
    return phrase;
  };
  const getWallet = useCallback(async () => {
    setLoading(true);

    const phrase = mnemonic; // 'truck almost sugar country false state grunt tape embark boil guitar coffee';

    if (!ethers.utils.isValidMnemonic(phrase)) {
      setVisible(false);
      setLoading(false);
      return Alert.alert('Error: ', 'Invalid Seed Phrase');
    }
    const wallet = ethers.Wallet.fromMnemonic(phrase);
    setAddress(wallet.address); // privateKey can also be accessed as wallet.privateKey

    // Get balance
    const payload = {
      jsonrpc: '2.0',
      id: 1,
      method: 'eth_getBalance',
      params: [wallet.address, 'latest'],
    };
    // const provider_balance = await provider.getBalance(wallet.address);
    const response = await axios.post(URL, payload);
    const provider_balance = response.data.result;
    const etherBalance = ethers.utils.formatEther(provider_balance);
    setBalance(etherBalance);

    // Store encrypted keystoreJson in encrypted keychain
    const keystoreJson = await wallet.encrypt('password'); // const w = await ethers.Wallet.fromEncryptedJson(keystoreJson, 'password');
    const keystore = JSON.stringify(keystoreJson);
    await Keychain.setGenericPassword('keystore', keystore); // save it locally in secure keychain assuming phone is secure

    setLoading(false);
  }, [mnemonic]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : colors.bgColor,
    flex: 1,
  };

  const onOpen = () => {
    if (mnemonic) {
      setLoading(true);
      setVisible(true);
    }
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={styles.homeHeaderText}>Enter Seed Phrase</Text>
      <View
        style={[
          {
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          },
          styles.homeContainer,
        ]}>
        <MnemonicInput
          mnemonic={mnemonic}
          setMnemonic={setMnemonic}
          onGenerate={handleGenerateMnemonic}
        />
        <Button
          text={'CONTINUE'}
          onPress={onOpen}
          buttonStyle={styles.homeButton}
        />
      </View>
      <AddressModal
        visible={visible}
        loading={loading}
        getWallet={getWallet}
        balance={balance}
        address={address}
        onClose={onClose}
      />
    </SafeAreaView>
  );
}

export default Home;
