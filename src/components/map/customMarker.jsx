//import liraries
import {Location} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Colors } from '../../theme/colors';

// create a component
const CustomMarker = () => {
  return (
    <View>
      <Location size="40" color={Colors.RED} variant="Bold" />
    </View>
  );
};

//make this component available to the app
export default CustomMarker;
