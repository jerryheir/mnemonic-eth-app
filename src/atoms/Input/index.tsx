import {StyleProp, TextInput} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface InputProps {
  value: string;
  onChangeText: (a: string) => void;
  inputStyle?: StyleProp<any>;
  placeholder?: string;
  multiline?: boolean;
}

const Input = ({
  value,
  onChangeText,
  inputStyle,
  placeholder,
  multiline,
}: InputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={[styles.inputContainer, inputStyle]}
      placeholder={placeholder}
      multiline={multiline}
      autoFocus={true}
      autoCorrect={false}
      autoComplete={'off'}
      autoCapitalize={'none'}
    />
  );
};

export default Input;
