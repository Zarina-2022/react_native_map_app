//import liraries
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView, Alert} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Geolocation from '@react-native-community/geolocation';
import firestore from '@react-native-firebase/firestore';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  CalloutSubview,
  Callout,
} from 'react-native-maps';
import CustomMarker from '../../components/map/customMarker';
import CustomCallout from '../../components/map/customCallout';
import FloatActionButton from '../../components/ui/floatActionButton';
import {LocationAdd, Map1} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import {COORDINATESELECT, DETAIL} from '../../utils/routes';
// create a component
const Map = ({navigation}) => {
  const [currentPosition, setCurrentPossition] = useState(null);
  const [mapType, setMapType] = useState('standart');
  const [locations, setLocation] = useState([]);
  const changeMapType = () => {
    if (mapType === 'standart') {
      setMapType('satellite');
    } else {
      setMapType('standart');
    }
  };
  const getLocation = async () => {
    await firestore()
      .collection('Locations')
      .get()
      .then(querySnapshot => {
        const fetchedLocations = [];
        querySnapshot.forEach(documentSnapshot => {
          fetchedLocations.push({
            id: documentSnapshot.id,
            title: documentSnapshot.data().title,
            description: documentSnapshot.data().description,
            date: documentSnapshot.data().date,
            point: documentSnapshot.data().point,
            coordinate: documentSnapshot.data().coordinate,
          });
        });
        setLocation(fetchedLocations);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
      });
  };
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        setCurrentPossition(pos.coords);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };
  useEffect(() => {
    getCurrentPosition();
    getLocation()
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FloatActionButton
          onPress={() => changeMapType()}
          icon={
            <Map1
              size={30}
              color={mapType == 'standart' ? Colors.BLACK : Colors.GREEN}
              variant={mapType == 'standart' ? 'Outline' : 'Bold'}
            />
          }
          customStyle={{
            right: 10,
            top: 20,
          }}
        />
        <FloatActionButton
          onPress={() => navigation.navigate(COORDINATESELECT)}
          icon={<LocationAdd size={30} color={Colors.WHITE} />}
          customStyle={{
            backgroundColor: Colors.GREEN,
            bottom: 30,
          }}
        />
        <MapView
          mapType={mapType}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: currentPosition?.latitude,
            longitude: currentPosition?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {locations.map((marker, index) => (
            <Marker
              key={index}
              title={marker.title}
              description={marker.description}
              coordinate={marker.coordinate}>
              <CustomMarker />
              <Callout
                onPress={() => navigation.navigate(DETAIL, {item: marker})}>
                <CalloutSubview>
                  <CustomCallout
                    title={marker.title}
                    description={marker.description}
                    point={marker.point}
                  />
                </CalloutSubview>
              </Callout>
            </Marker>
          ))}
          <Marker
            title="Konumum"
            coordinate={{
              latitude: currentPosition?.latitude,
              longitude: currentPosition?.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
