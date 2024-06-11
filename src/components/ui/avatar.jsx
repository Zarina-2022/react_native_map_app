//import liraries
import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {width} from '../../utils/constans';
import {User} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import ImagePicker from 'react-native-image-crop-picker';

const Avatar = ({user, onChangeImage, select}) => {
  // simulator oldugu icin camerayi acamiyoruz, o yuzden sadece galeri icin kod yazacagiz:
  const openGalery = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      includeBase64: true, // resmin text olarak gelmesi icin
      cropping: true,
    }).then(image => {
      onChangeImage(image.data, image.mime);
    });
  };

  return (
    <TouchableOpacity
      // edit user button tiklanmadi ise disabled true. Yani resmi sadece update kisminda degistirebiliriz
      disabled={!select}
      onPress={openGalery}
      style={styles.container}>
      {user?.image ? (
        <Image
          style={{
            width: width * 0.25,
            height: width * 0.25,
            borderRadius: 1000,
            resizeMode: 'contain',
          }}
          source={{
            uri: user.image,
          }}
        />
      ) : (
        <User size={40} variant="Bold" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.25,
    height: width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.SOFTGRAY,
    borderRadius: 1000,
    margin: 30,
    alignSelf: 'center',
  },
});

export default Avatar;
