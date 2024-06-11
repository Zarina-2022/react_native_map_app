//import liraries
import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import {height, width} from '../../utils/constans';
import {Colors} from '../../theme/colors';
import CustomButton from '../../components/ui/customButton';
import {SIGNIN, SIGNUP} from '../../utils/routes';
import {Facebook, Google} from 'iconsax-react-native';

// create a component
const Launch = ({navigation}) => {
  return (
    <SafeAreaView style={screenStyle.safeAreView}>
      <View style={screenStyle.container}>
        <View style={{flex: 2}}>
          <Image
            source={require('../../assets/images/launch.png')}
            style={{
              width: width,
              height: height * 0.3,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Text style={{fontSize: 35, fontWeight: 'bold'}}>Hello</Text>
          <Text
            style={{
              fontSize: 18,
              color: Colors.GRAY,
              textAlign: 'center',
              lineHeight: 20,
              marginTop: 5,
            }}>
            Welcome to Harita Notum app, where you can manage your map tasks.
          </Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <View style={{justifyContent: 'center', flex: 2}}>
            <CustomButton
              onPress={() => navigation.navigate(SIGNIN)}
              title="Sign In"
            />
            <CustomButton
              onPress={() => navigation.navigate(SIGNUP)}
              title="Sign Up"
            />
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text
              style={{
                fontSize: 14,
                color: Colors.GRAY,
                textAlign: 'center',
                lineHeight: 20,
                marginTop: 5,
              }}>
              Sign up using:
            </Text>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <Facebook
                size="32"
                color={Colors.FACEBOOK}
                variant="Bold"
                style={{marginHorizontal: 10}}
              />
              <Google size="32" color={Colors.GOOGLE} variant="Bold" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Launch;
