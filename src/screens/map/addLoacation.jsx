//import liraries
import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {screenStyle} from '../../styles/screenStyle';
import CustomInput from '../../components/ui/customInput';
import {NoteAdd, NoteText, Calendar, Star1} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import CustomButton from '../../components/ui/customButton';
import {MAP} from '../../utils/routes';

const AddLocation = ({route, navigation}) => {
  const [title, setTitle] = useState('Park');
  const [description, setDescription] = useState('Prepare for IT exam.');
  const [date, setDate] = useState('17.04.2024');
  const [point, setPoint] = useState('4.7');
  const [loading, setLoading] = useState(false);
  const {coordinate} = route?.params;

  const saveNote = () => {
    setLoading(true);
    const form = {
      title: title,
      description: description,
      point: point,
      date: date,
      coordinate: coordinate,
    };
    firestore()
      .collection('Locations')
      .add(form)
      .then(() => {
        Alert.alert('Location added success');
        navigation.navigate(MAP);
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
        onChangeText={value => setPoint(value)}
        value={point}
        inputTitle="Point"
        placeholder="Point"
        icon={<Star1 color={Colors.GRAY} />}
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
          title="Add Location"
        />
      </View>
    </View>
  );
};

export default AddLocation;
