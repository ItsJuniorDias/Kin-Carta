import React from 'react';
import { useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';

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

interface PhoneProps {
  home: string;
  mobile: string;
  work: string;
}

interface AddressProps {
  city: string;
  country: string;
  state: string;
  street: string;
  zipCode: string;
}

interface AvatarProps {
  id: string;
  avatarLarge: string;
  title: string;
  companyName: string;
  phone: PhoneProps;
  address: AddressProps;
  birthdate: string;
  emailAddress: string;
  isFavorite: boolean
}

interface PropsRoutes {
  params: AvatarProps;
}


const Details = () => {
  const route = useRoute<PropsRoutes>();

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
