//import liraries
import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {screenStyle} from '../../styles/screenStyle';
import {height, width} from '../../utils/constans';
import CustomButton from '../../components/ui/customButton';
import CustomInput from '../../components/ui/customInput';
import {Bag2, Key, Sms, User} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
// create a component
const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('zarinasekerdag@gmail.com');
  const [password, setPassword] = useState('123456');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [job, setJob] = useState('');
  const [loading, setLoading] = useState(false);
  
    // user uid'sini async storage'e (telefon local storage) kaydetmek icin: 
  const setUserUid = async id => {
    try {
      await AsyncStorage.setItem('uid', id);
    } catch (e) {
      console.log('save error', e);
    }
  };
  const saveUser = userId => {
    const form = {
      userId: userId,
      name: name,
      surname: surname,
      job: job,
      email: email,
    };
    firestore()
      .collection('Users')
      .doc(userId) // document id ve user uid 'si ayni olmasi icin (this id of user we can use as primary key of the document)
      .set(form)
      .then(() => {
        console.log('user added success');
      })
      .catch(eror => {
        console.log(eror);
      });
  };
  const handleSignUp = () => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        saveUser(response.user.uid);
        setUserUid(response.user.uid)
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <SafeAreaView style={screenStyle.safeAreView}>
      <ScrollView contentContainerStyle={{padding: 20}}>
        <Image
          source={require('../../assets/images/signIn.png')}
          style={{
            width: width,
            height: height * 0.3,
            resizeMode: 'contain',
            marginBottom: 20,
          }}
        />
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              textAlign: 'center',
              marginVertical: 10,
            }}>
            Sign Up
          </Text>
          <CustomInput
            icon={<Sms color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setEmail(value)}
            value={email}
            inputTitle="Email"
            placeholder="Email"
          />
          <CustomInput
            icon={<Key color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setPassword(value)}
            secureTextEntry
            value={password}
            inputTitle="Password"
            placeholder="Password"
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
            onPress={() => handleSignUp()}
            title="Sign Up"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
