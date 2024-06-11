//import liraries
import React, { useState} from 'react';
import {View, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {screenStyle} from '../../styles/screenStyle';
import CustomInput from '../../components/ui/customInput';
import {NoteAdd, NoteText, Calendar} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import CustomButton from '../../components/ui/customButton';
import { useNavigation } from '@react-navigation/native';
import { NOTES } from '../../utils/routes';

// create a component
const EditNote = ({route}) => {
  const {note} = route?.params;
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [date, setDate] = useState(note.date);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation()

  const saveNote = () => {
    setLoading(true);
    const form = {
      title: title,
      description: description,
      date: date,
    };
    firestore()
      .collection('Notes')
      .doc(note?.id)
      .update(form)
      .then(() => {
        Alert.alert('Note is updated successfully!');
        navigation.navigate(NOTES)
      })
      .catch(error => {
        Alert.alert('Note updating is failed !', error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={screenStyle.container}>
      <CustomInput
        onChangeText={value => setTitle(value)}
        value={title}
        inputTitle="Title"
        placeholder="Title"
        icon={<NoteAdd color={Colors.GRAY} />}
      />
      <CustomInput
        onChangeText={value => setDescription(value)}
        value={description}
        inputTitle="Description"
        placeholder="Description"
        icon={<NoteText color={Colors.GRAY} />}
      />
      <CustomInput
        onChangeText={value => setDate(value)}
        value={date}
        inputTitle="Date"
        placeholder="Date"
        icon={<Calendar color={Colors.GRAY} />}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <CustomButton
          loading={loading}
          onPress={() => saveNote()}
          title="UPDATE NOTE"
        />
      </View>
    </View>
  );
};

export default EditNote;
