//import liraries
import React from 'react';
import {FAVORITES, MAP, NOTES, PROFILE} from '../../utils/routes';

import {Heart, Map, Profile,Notepad2} from 'iconsax-react-native';
// create a component
const TabIcon = ({name, focused, color, size}) => {
  if (name === MAP) {
    return (
      <Map color={color} variant={focused ? (variant = 'Bold') : 'Outline'} />
    );
  } else if (name === PROFILE) {
    return (
      <Profile
        color={color}
        variant={focused ? (variant = 'Bold') : 'Outline'}
      />
    );
  } else if (name === FAVORITES) {
    return (
      <Heart
        color={color}
        variant={focused ? (variant = 'Bold') : 'Outline'}
      />
    );
  } else if (name === NOTES) {
    return (
      <Notepad2 color={color} variant={focused ? (variant = 'Bold') : 'Outline'} />
    );
  }
};

export default TabIcon;
