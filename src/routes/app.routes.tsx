import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components'

const { Navigator, Screen} = createNativeStackNavigator();


import HeaderFavorite from '../components/HeaderFavorite';

import Contacts from '../screens/Contacts'
import Details from '../screens/Details'


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
             <HeaderFavorite />
           ),
        }}
      />
    </Navigator>
  )
}
