import React from 'react';
import { View, SectionList, Text } from 'react-native';

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

  const CardContact = ({ title, avatarUser, companyName, avatarLarge }: any) => {
    console.log(title, 'item')
   return(
     <>
     <ContentRow onPress={() => navigation.navigate('Details', {
       avatarLarge,
       title,
       companyName,
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
        sections={DATAobject}
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
