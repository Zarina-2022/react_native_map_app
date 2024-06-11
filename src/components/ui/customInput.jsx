//import liraries
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {height} from '../../utils/constans';
import { Colors } from '../../theme/colors';

const CustomInput = props => {
  const {icon, inputTitle = null} = props;
  return (
    <View style={{marginVertical: 5,}}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{inputTitle}</Text>
      <View style={styles.container}>
        {icon}
        <TextInput
          {...props}
          style={{
            minHeight: height * 0.055,
            paddingHorizontal: 8,
            fontSize: 16,
            flex: 1,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.LIGHTGRAY,
    flexDirection: 'row',
    paddingHorizontal: 5,
    borderRadius: 8,
    marginVertical: 5,
  },
});
export default CustomInput;
