import React, { useState, useEffect } from 'react';
import { View, SectionList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import api from '../../services/api';
import { IContact } from '../../store/modules/contact/types';

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
  ContentDivider
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
  const [contact, setContact] = useState([]);

  const [data, setData] = useState([])

  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);

      return result;
    }, {})
  }

  useEffect(() => {
    api.get('').then((response) => {
      const isFavoriteData = groupBy(response.data, 'isFavorite');

      console.log(isFavoriteData.false, 'IS Favorite false');

      const formatDataContact =
      [{ title: 'Favorite Contact', data: [...isFavoriteData.true].sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })},
      { title: 'Other Contact', data: [...isFavoriteData.false].sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      })}];

      console.log(formatDataContact, 'FormatData')

      setContact(formatDataContact);
    })


  }, [])

  console.log(contact, 'Contact Json')
  console.log(data, 'DATA')

  const contacts = useSelector(state => state);

  console.log(contacts, 'State')

  const CardContact = ({
    title,
    avatarUser,
    companyName,
    avatarLarge,
    phone,
    address,
    birthdate,
    emailAddress
  }: any) => {
   return(
     <>
     <ContentRow onPress={() => navigation.navigate('Details', {
       avatarLarge,
       title,
       companyName,
       phone,
       address,
       birthdate,
       emailAddress
     })}>
         <Avatar
           source={{ uri: `${avatarUser}`}}
         />

          <ContactContainer>
           <Title>{title}</Title>
           <SubtTitle>{companyName}</SubtTitle>
         </ContactContainer>
      </ContentRow>
    </>
  )};

  return(
    <Container>
      <SectionList
        sections={contact}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => (
        <ContentDivider>
          <Divider />
         </ContentDivider>
        )}
        // contentContainerStyle={{ paddingBottom: 20, backgroundColor: 'blue' }}
        renderItem={({ item }) => (
            <CardContact
              title={item.name}
              avatarUser={item.smallImageURL}
              avatarLarge={item.largeImageURL}
              companyName={item.companyName}
              phone={item.phone}
              address={item.address}
              birthdate={item.birthdate}
              emailAddress={item.emailAddress}
            />
         )}
        renderSectionHeader={({ section: { title } }) => (
          <ContentSectionHeader>
            <TitleHeaderSection>{title}</TitleHeaderSection>
          </ContentSectionHeader>
        )}
      />
 </Container>
 )
};

export default Contacts;
