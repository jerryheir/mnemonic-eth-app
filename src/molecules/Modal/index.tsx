import {SafeAreaView, View, Text, Modal} from 'react-native';
import React from 'react';
import {styles} from './styles';

interface ModalHOCProps {
  visible: boolean;
  onClose: () => void;
  onShow: () => void;
  title: string;
  children?: JSX.Element;
}

const ModalHOC = ({
  visible,
  onClose,
  onShow,
  title,
  children,
}: ModalHOCProps) => {
  return (
    <Modal visible={visible} onShow={onShow} onRequestClose={onClose}>
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text onPress={onClose} style={styles.modalText}>
            {title}
          </Text>
        </View>
        <View style={styles.childView}>{children}</View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalHOC;
