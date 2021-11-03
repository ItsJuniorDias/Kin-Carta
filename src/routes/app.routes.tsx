import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components'

const { Navigator, Screen} = createNativeStackNavigator();

import Contacts from '../screens/Contacts'

export function AppRoutes() {
  const theme = useTheme();

  return(
    <Navigator
      screenOptions={{
        headerTintColor: theme.colors.black,
        headerStyle: {
          backgroundColor: theme.colors.grayBackground,
        }
      }}
    >
      <Screen
        name="Contacts"
        component={Contacts}
      />
    </Navigator>
  )
}
