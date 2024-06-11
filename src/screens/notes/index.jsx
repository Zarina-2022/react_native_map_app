//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StatusBar,
  RefreshControl,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import FloatActionButton from '../../components/ui/floatActionButton';
import {Add} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import NoteCard from '../../components/notes/noteCard';
import {screenStyle} from '../../styles/screenStyle';
import Header from '../../components/notes/header';
import {ADDNOTE} from '../../utils/routes';
import LoadingModal from '../../components/ui/loadingModal';

// create a component
const Notes = ({navigation}) => {
  const [notes, setNotes] = useState([]);
  const [pending, setPending] = useState(true);

  const getNotes = async () => {
    setNotes(true);
    await firestore()
      .collection('Notes')
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
        setNotes(fetchedNotes);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setPending(false);
      });
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <View style={screenStyle.container}>
      <StatusBar backgroundColor={Colors.WHITE} barStyle={'dark-content'} />
      {pending ? (
        <LoadingModal visible={pending} />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={pending} onRefresh={getNotes} />
          }
          ListHeaderComponent={<Header />}
          data={notes}
          renderItem={({item, index}) => <NoteCard note={item} index={index} />}
          keyExtractor={item => item.id}
        />
      )}

      <FloatActionButton
        onPress={() => navigation.navigate(ADDNOTE)}
        icon={<Add size={30} color={Colors.WHITE} />}
        customStyle={{
          backgroundColor: Colors.BLACK,
          bottom: 50,
        }}
      />
    </View>
  );
};

export default Notes;
