import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons';
const { Navigator, Screen} = createNativeStackNavigator();

import Contacts from '../screens/Contacts'
import Details from '../screens/Details'
import { TouchableOpacity } from 'react-native-gesture-handler';

export function AppRoutes() {
  const theme = useTheme();

  return(
    <Navigator
      screenOptions={{
        headerTintColor: theme.colors.black,
        headerStyle: {
          backgroundColor: theme.colors.grayBackground,
        },
      }}
    >
      <Screen
        name="Contacts"
        component={Contacts}
      />

      <Screen
        name="Details"
        component={Details}
        options={{
          title: '',
          headerRight: () => (
           <TouchableOpacity>
            <MaterialIcons name="star" size={24} color={theme.colors.star} />
           </TouchableOpacity>
           ),
        }}
      />
    </Navigator>
  )
}
