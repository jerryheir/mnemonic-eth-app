import {View, Text} from 'react-native';
import React from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import {styles} from './styles';

interface MnemonicInputProps {
  mnemonic: string;
  setMnemonic: (a: string) => void;
  onGenerate: () => Promise<string>;
}

const MnemonicInput = ({
  mnemonic,
  setMnemonic,
  onGenerate,
}: MnemonicInputProps) => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewContainer}>
        <Input
          multiline={true}
          value={mnemonic}
          onChangeText={setMnemonic}
          placeholder={'Enter seed phrase'}
          inputStyle={styles.mnemonicInput}
        />
        <Button
          text={'Generate'}
          onPress={onGenerate}
          buttonStyle={styles.buttonView}
          textStyle={styles.buttonText}
        />
      </View>
      <Text style={styles.mnemonicText}>{mnemonic}</Text>
    </View>
  );
};

export default MnemonicInput;
