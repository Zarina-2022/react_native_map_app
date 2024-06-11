//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {height} from '../../utils/constans';
import CustomInput from '../ui/customInput';
import {SearchNormal} from 'iconsax-react-native';

// create a component
const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <CustomInput
          placeholder="Search"
          icon={<SearchNormal color="#b2b2b2" />}
        />
      </View>
      <Text
        style={{
          fontSize: 35,
          fontWeight: '600',
          marginTop:20
        }}>
        Notes
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingTop: height * 0.01,
    paddingBottom: height * 0.03,
  },
});

//make this component available to the app
export default Header;
