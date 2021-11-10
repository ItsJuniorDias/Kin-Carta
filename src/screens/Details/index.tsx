import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';

import CardContact from '../../components/CardContact';

import { detailContact } from '../../store/modules/detail/actions';
import { IContact } from '../../store/modules/contact/types';

import {
  ContentArea,
  Content,
  Avatar,
  NameUser,
  Number,
  DividerHeader,
} from './styles';

interface PropsRoutes {
  params: IContact;
}

const Details = () => {
  const route = useRoute<PropsRoutes>();

  const dispatch = useDispatch();

  const { id, largeImageURL, title, companyName, phone: { home , mobile, work},
  address: { city, country, state, street, zipCode }, birthdate, emailAddress,
  isFavorite } = route.params;

  const data = {
    id,
    isFavorite
  }

  useEffect(() => {
    dispatch(detailContact(data));
  },[]);


  return (
      <ContentArea>
        <ScrollView>
          <Content>
            <Avatar
              source={{
                uri: `${largeImageURL}`
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
        </ScrollView>
      </ContentArea>
  );
}

export default Details;
