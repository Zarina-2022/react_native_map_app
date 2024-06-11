import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';

const FloatActionButton = ({icon, customStyle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, customStyle]}>
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    position: 'absolute',
    zIndex: 99,
    bottom: 30,
    width: 60,
    height: 60,
    right: 20,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

//make this component available to the app
export default FloatActionButton;
