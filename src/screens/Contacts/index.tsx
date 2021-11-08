import React, { useState, useEffect } from 'react';
import { View, SectionList, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { useDispatch ,useSelector } from 'react-redux';

import { useTheme } from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons';

import api from '../../services/api';
import { IContact } from '../../store/modules/contact/types';

import { listContactRequest, detailContact } from '../../store/modules/contact/actions'

import groupBy from '../../utils/groupBy';


import {
  Container,
  TitleHeaderSection,
  ContentSectionHeader,
  ContactContainer,
  Avatar,
  ContentRow,
  Title,
  SubtTitle,
  Divider,
  ContentDivider,
  IconContet,
  Indicator
} from './styles';

interface Props {
  title: string;
}

const DATAobject = [
  {
    title: "Favorite Contacts",
    data: [
      {
        name: "Winnie-the-Pooh",
        id: '19',
        smallImageURL: "https://s3.amazonaws.com/technical-challenge/v3/images/winnie-the-pooh-small.jpg",
        largeImageURL: "https://s3.amazonaws.com/technical-challenge/v3/images/winnie-the-pooh-large.jpg",
        companyName: "Honey Bear, Inc",
      },
      {
        name: "Miss Piggy",
        id: "13",
        smallImageURL: "https://s3.amazonaws.com/technical-challenge/v3/images/miss-piggy-small.jpg",
        largeImageURL: "https://s3.amazonaws.com/technical-challenge/v3/images/miss-piggy-large.jpg",
        companyName: "Muppets, Baby",
      },
    ]
  },
  {
    title: "Other Contacts",
    data: [
      {
        name: "Miss Piggy",
        id: "14",
        smallImageURL: "https://s3.amazonaws.com/technical-challenge/v3/images/miss-piggy-small.jpg",
        largeImageURL: "https://s3.amazonaws.com/technical-challenge/v3/images/miss-piggy-large.jpg",
        companyName: "Muppets, Baby",
      },
      {
        name: "Winnie-the-Pooh",
        id: "20",
        smallImageURL: "https://s3.amazonaws.com/technical-challenge/v3/images/winnie-the-pooh-small.jpg",
        largeImageURL: "https://s3.amazonaws.com/technical-challenge/v3/images/winnie-the-pooh-large.jpg",
        companyName: "Honey Bear, Inc",
      },
    ]
  },
];



const Contacts = ({ title, navigation } : Props) => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const contactData = useSelector(state => state.contact);

  useEffect(() => {
    dispatch(listContactRequest());
  },[])

  console.log(contactData, 'data useSelector Contact');

  const CardContact = ({
    id,
    title,
    avatarUser,
    companyName,
    avatarLarge,
    phone,
    address,
    birthdate,
    emailAddress,
    isFavorite
  }: any) => {

   return(
     <>
     <ContentRow activeOpacity={0.6} onPress={() => navigation.navigate('Details', {
       id,
       avatarLarge,
       title,
       companyName,
       phone,
       address,
       birthdate,
       emailAddress,
       isFavorite
     })}>
         <Avatar
           source={{ uri: `${avatarUser}`}}
         />

          <ContactContainer noFavorite={!isFavorite} >
           {isFavorite && (
              <IconContet>
               <MaterialIcons name="star" size={18} color={theme.colors.star} />
             </IconContet>
           )}

            <View>
              <Title>{title}</Title>
              <SubtTitle>{companyName}</SubtTitle>
           </View>
         </ContactContainer>
      </ContentRow>
    </>
  )};

  return(
    <Container>
      {contactData.length === 2  ? (
        <SectionList
        sections={contactData}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => (
        <ContentDivider>
          <Divider />
         </ContentDivider>
        )}
        // contentContainerStyle={{ paddingBottom: 20, backgroundColor: 'blue' }}
        renderItem={({ item }) => (
            <CardContact
              id={item.id}
              title={item.name}
              avatarUser={item.smallImageURL}
              avatarLarge={item.largeImageURL}
              companyName={item.companyName}
              phone={item.phone}
              address={item.address}
              birthdate={item.birthdate}
              emailAddress={item.emailAddress}
              isFavorite={item.isFavorite}
            />
         )}
        renderSectionHeader={({ section: { title } }) => (
          <ContentSectionHeader>
            <TitleHeaderSection>{title}</TitleHeaderSection>
          </ContentSectionHeader>
        )}
      />
      ): (
        <Indicator>
         <ActivityIndicator />
        </Indicator>
      )}
 </Container>
 )
};

export default Contacts;
