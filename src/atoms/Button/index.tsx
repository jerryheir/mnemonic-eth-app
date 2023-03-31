import {
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button = ({text, onPress, buttonStyle, textStyle}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.buttonContainer, buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
