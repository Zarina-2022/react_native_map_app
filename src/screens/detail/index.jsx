//import liraries
import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import {Colors} from '../../theme/colors';
import CustomButton from '../../components/ui/customButton';
import firestore from '@react-native-firebase/firestore';
import { FAVORITES } from '../../utils/routes';
// create a component
const Detail = ({route,navigation}) => {
  const [loading, setLoading] = useState(false);
  const {item} = route.params;

  const addFavorite = () => {

    setLoading(true);
    firestore()
      .collection('Favorites')
      .add(item)
      .then(() => {
        Alert.alert('Location is added successfully into favorites.');
        navigation.navigate(FAVORITES)
      })
      .catch(eror => {
        console.log(eror);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={screenStyle.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 15,
          borderBottomWidth: 0.3,
          borderColor: Colors.GRAY,
        }}>
        <Text style={{fontWeight:"bold"}}>Title:</Text>
        <Text>{item.title}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 15,
          borderBottomWidth: 0.3,
          borderColor: Colors.GRAY,
        }}>
        <Text style={{fontWeight:"bold"}}>Description:</Text>
        <Text>{item.description}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 15,
          borderBottomWidth: 0.3,
          borderColor: Colors.GRAY,
        }}>
        <Text style={{fontWeight:"bold"}}>Rating:</Text>
        <Text>{item.point}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 15,
          borderBottomWidth: 0.3,
          borderColor: Colors.GRAY,
        }}>
        <Text style={{fontWeight:"bold"}}>Longitude:</Text>
        <Text>{item.coordinate.longitude}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 15,
          borderBottomWidth: 0.3,
          borderColor: Colors.GRAY,
        }}>
        <Text style={{fontWeight:"bold"}}>Latitude:</Text>
        <Text>{item.coordinate.latitude}</Text>
      </View>
      <View style={{flex:1,justifyContent:"flex-end",marginVertical:25}}>
      <CustomButton
          loading={loading}
          onPress={() => addFavorite()}
          title="Add to Favorites"
        />
      </View>
    </View>
  );
};
export default Detail;
