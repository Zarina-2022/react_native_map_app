//import liraries
import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {screenStyle} from '../../styles/screenStyle';
import CustomButton from '../../components/ui/customButton';
import CustomInput from '../../components/ui/customInput';
import {Bag2, Sms, User} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import Avatar from '../../components/ui/avatar';
import { PROFILE } from '../../utils/routes';

// create a component
const ProfileUpdate = ({route,navigation}) => {
  const {user} = route?.params;

  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [job, setJob] = useState(user.job);
  const [image, setImage] = useState(user.image);
  const [loading, setLoading] = useState(false);

  const updateUser = () => {
    setLoading(true);
  
    const form = {
      name: name !== undefined ? name : user.name,
      surname: surname !== undefined ? surname : user.surname,
      job: job !== undefined ? job : user.job,
      image: image !== undefined ? image : user.image,
    };
  
    // Filter out undefined values from the form object because Firestore does not support storing 'undefined' values.
    const validForm = Object.keys(form)
      .filter(key => form[key] !== undefined)
      .reduce((obj, key) => {
        obj[key] = form[key];
        return obj;
      }, {});
  
    firestore()
      .collection('Users')
      .doc(user.userId)
      .update(validForm)
      .then(() => {
        Alert.alert("User updated successfully");
        navigation.navigate(PROFILE);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <SafeAreaView style={screenStyle.safeAreView}>
      <ScrollView contentContainerStyle={{padding: 20}}>
        <Avatar
          select={true}
          user={user}
          onChangeImage={(image, mimType) =>
            setImage(`data:${mimType};base64,${image}`)
          }
        />
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <CustomInput
            editable={false}
            icon={<Sms color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setEmail(value)}
            value={email}
            inputTitle="Email"
            placeholder="Email"
          />
          <CustomInput
            icon={<User color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setName(value)}
            value={name}
            inputTitle="Name"
            placeholder="Name"
          />
          <CustomInput
            icon={<User color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setSurname(value)}
            value={surname}
            inputTitle="Surname"
            placeholder="Surname"
          />
          <CustomInput
            icon={<Bag2 color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setJob(value)}
            value={job}
            inputTitle="Job"
            placeholder="Job"
          />
        </View>
        <View style={{marginVertical: 20, justifyContent: 'center'}}>
          <CustomButton
            loading={loading}
            onPress={() => updateUser()}
            title="Update"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileUpdate;
