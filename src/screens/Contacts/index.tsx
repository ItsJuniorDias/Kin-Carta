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
        id: "19",
        smallImageURL: "https://s3.amazonaws.com/technical-challenge/v3/images/winnie-the-pooh-small.jpg",
        companyName: "Honey Bear, Inc",
      },
      {
        name: "Miss Piggy",
        id: "13",
        smallImageURL: "https://s3.amazonaws.com/technical-challenge/v3/images/miss-piggy-small.jpg",
        companyName: "Muppets, Baby",
      },
    ]
  },
  {
    title: "Other Contacts",
    data: [
      {
        name: "Winnie-the-Pooh",
        id: "19",
        smallImageURL: "https://s3.amazonaws.com/technical-challenge/v3/images/winnie-the-pooh-small.jpg",
        companyName: "Honey Bear, Inc",
      },
      {
        name: "Miss Piggy",
        id: "13",
        smallImageURL: "https://s3.amazonaws.com/technical-challenge/v3/images/miss-piggy-small.jpg",
        companyName: "Muppets, Baby",
      },
    ]
  },
];



const Contacts = ({ title } : Props) => {

  const ItemFirst = ({ props }) => {
    console.log(props, 'Item')
   return (
    <ContactContainer>
      <Text>{props}</Text>
    </ContactContainer>
  )};

  const Item = ({ title, avatarUser, companyName }: any) => {
    console.log(title, 'item')
   return(
     <>
     <ContentRow>
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
        renderItem={({ item }) => (
            <Item
              title={item.name}
              avatarUser={item.smallImageURL}
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
