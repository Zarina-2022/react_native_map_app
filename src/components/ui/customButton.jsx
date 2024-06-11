//import liraries
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {height} from '../../utils/constans';
import {Colors} from '../../theme/colors';

const CustomButton = ({loading, title, style, onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      disabled={loading}
      style={[
        styles.container,
        loading ? styles.disableButton : styles.activeButton,
        style,
      ]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={Colors.WHITE} />
      ) : (
        <Text
          style={{
            fontWeight: 'bold',
            color: Colors.WHITE,
            fontSize: 15,
          }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.06,
    borderRadius: 100,
    marginVertical: 5,
  },
  disableButton: {
    backgroundColor: Colors.GRAY,
  },
  activeButton: {
    backgroundColor: Colors.BLACK,
  },
});

export default CustomButton;
