//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StatusBar,
  RefreshControl,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Colors} from '../../theme/colors';
import {screenStyle} from '../../styles/screenStyle';
import LoadingModal from '../../components/ui/loadingModal';
import FavoriteCard from '../../components/favorites/favoriteCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [pending, setPending] = useState(true);

  const getFavorites = async () => {
    setPending(true);
    await firestore()
      .collection('Favorites')
      .get()
      .then(querySnapshot => {
        const fetchedNotes = [];
        querySnapshot.forEach(documentSnapshot => {
          fetchedNotes.push({
            id: documentSnapshot.id,
            title: documentSnapshot.data().title,
            description: documentSnapshot.data().description,
            date: documentSnapshot.data().date,
          });
        });
        setFavorites(fetchedNotes);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setPending(false);
      });
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <View style={screenStyle.container}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle={'dark-content'} />
      {pending ? (
        <LoadingModal visible={pending} />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={pending} onRefresh={getFavorites} />
          }
          data={favorites}
          renderItem={({item, index}) => (
            <FavoriteCard favorite={item} index={index} />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default Favorites;
