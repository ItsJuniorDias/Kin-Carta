import React from 'react';
import { View } from 'react-native';

import { useTheme } from 'styled-components'
import { useRoute, RouteProp } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import CardContact from '../../components/CardContact'

import {
  Container,
  Content,
  Avatar,
  NameUser,
  Number,
  DividerHeader,
  Body,
  ContentBody,
  TypeNumber,
  NumberType,
  IconContent,
  Touch
} from './styles';

interface PropsRoutes {
  avatarLarge: string;
  tite: string;
  companyName: string;
  params: any;
}


const Details = () => {
  const theme = useTheme();
  const route = useRoute<PropsRoutes>();
  console.log(route.params, 'PARAMS')

  const { avatarLarge, title, companyName } = route.params;

  return (
    <Container>
       <Content>
         <Avatar
           source={{
             uri: `${avatarLarge}`
           }}
         />

          <NameUser>
            {title}
          </NameUser>
          <Number>{companyName}</Number>
       </Content>

       <DividerHeader />

         <CardContact
           title="Mobile"
           subTitle="916-372-5031"
           isNumber
         />

          <CardContact
           title="Home"
           subTitle="916-391-1816"
           isNumber
         />

         <CardContact
           title="Work"
           subTitle="771-881-8381"
           isNumber
         />

       <DividerHeader />

        <CardContact
           title="Address"
           subTitle="Rua Dauto de oliveira, 502"
         />

         <CardContact
           title="Birthdate"
           subTitle="December 4, 1980"
         />

         <CardContact
           title="Email"
           subTitle="juniordias_@live.com"
         />
    </Container>
  );
}

export default Details;
