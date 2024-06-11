//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {height} from '../../utils/constans';
import {setColors} from '../../utils/functions';
import {useNavigation} from '@react-navigation/native';
import { MAP } from '../../utils/routes';

const FavoriteCard = ({favorite, index}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(MAP)}
      style={{
        backgroundColor: setColors(index),
        padding: 20,
        borderRadius: 10,
        marginVertical: 8,
      }}>
      <View
        style={{
          minHeight: height * 0.14,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {favorite.title}
        </Text>
        <Text
          style={{
            fontSize: 18,
            marginVertical: 8,
            fontWeight: '300',
          }}>
          {favorite.description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>{favorite.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FavoriteCard;
