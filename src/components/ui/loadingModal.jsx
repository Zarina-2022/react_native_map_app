//import liraries
import React from 'react';
import {View, Text, Modal, ActivityIndicator} from 'react-native';
import {Colors} from '../../theme/colors';

// create a component
const LoadingModal = ({visible}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{backgroundColor:Colors.WHITE,padding:25,borderRadius:5}}>
        <ActivityIndicator size={'large'} color={Colors.GRAY} />
        <Text style={{marginTop:10,fontSize:16,fontWeight:"500"}}>Loading</Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;
