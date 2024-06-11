//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/colors';
import {Star, ArrowCircleRight2} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {DETAIL} from '../../utils/routes';

// create a component
const CustomCallout = ({title, description, point}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Star size={16} color={Colors.ORANGE} variant="Bold" />
          <Text style={{fontWeight: '700', fontSize: 12, marginLeft: 5}}>
            {point}
          </Text>
        </View>
      </View>
      <Text style={{fontSize: 12, fontWeight: '500', color: Colors.GRAY}}>
        {description}
      </Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <TouchableOpacity onPress={() => console.log('merhaba')}>
          <ArrowCircleRight2 size="32" color={Colors.GREEN} variant="Bold" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
    backgroundColor: Colors.WHITE,
    padding: 5,
  },
});

//make this component available to the app
export default CustomCallout;
