import React from 'react';
import { View, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components'
import { useRoute, RouteProp } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import CardContact from '../../components/CardContact'

import { detailContact } from '../../store/modules/detail/actions'

import {
  ContentArea,
  Container,
  Content,
  Avatar,
  NameUser,
  Number,
  DividerHeader,
  Header
} from './styles';

interface AvatarProps {
  avatarLarge: string;
  title: string;
  companyName: string;
}

interface PropsRoutes {
  params: AvatarProps;
}


const Details = () => {
  const theme = useTheme();
  const route = useRoute<PropsRoutes>();
  console.log(route.params, 'PARAMS')

  const dispatch = useDispatch();

  const { id, avatarLarge, title, companyName, phone: { home , mobile, work},
  address: { city, country, state, street, zipCode }, birthdate, emailAddress,
  isFavorite } = route.params;

  const data = {
    id,
    isFavorite
  }

  dispatch(detailContact(data));

  return (
      <ContentArea>
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

            {!mobile === '' && <CardContact
              title="Mobile"
              subTitle={mobile}
              isNumber
            />}

            {home && <CardContact
              title="Home"
              subTitle={home}
              isNumber
            />}

            {work &&  <CardContact
              title="Work"
              subTitle={work}
              isNumber
            />}

          <DividerHeader />

            <CardContact
              title="Address"
              subTitle={`${street} - ${city}, ${state} ${zipCode}, ${country}`}
            />

            <CardContact
              title="Birthdate"
              subTitle={birthdate}
            />

            <CardContact
              title="Email"
              subTitle={emailAddress}
            />
        </Container>
      </ContentArea>
  );
}

export default Details;
