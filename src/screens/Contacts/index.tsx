import React, { useEffect } from 'react';
import { View, SectionList, ActivityIndicator } from 'react-native';

import { useDispatch ,useSelector } from 'react-redux';
import {  RootState, AppDispatch } from '../../store';

import { useTheme } from 'styled-components'
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { listContactRequest } from '../../store/modules/contact/actions';

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
import { IContact } from '../../store/modules/contact/types';

const Contacts = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const dispatch = useDispatch<AppDispatch>();

  const contactData = useSelector<RootState>(state => state.contact);

  useEffect(() => {
    dispatch(listContactRequest());
  },[])

  const CardContactSection = ({
    id,
    name,
    smallImageURL,
    companyName,
    largeImageURL,
    phone,
    address,
    birthdate,
    emailAddress,
    isFavorite
  }: IContact) => {
   return(
     <>
     <ContentRow activeOpacity={0.6} onPress={() => navigation.navigate('Details', {
       id,
       largeImageURL,
       name,
       companyName,
       phone,
       address,
       birthdate,
       emailAddress,
       isFavorite
     })}>
         <Avatar
           source={{ uri: `${smallImageURL}`}}
         />

          <ContactContainer noFavorite={!isFavorite} >
           {isFavorite && (
              <IconContet>
               <MaterialIcons name="star" size={18} color={theme.colors.star} />
             </IconContet>
           )}

            <View>
              <Title>{name}</Title>
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
        renderItem={({ item }) => (
            <CardContactSection
              id={item.id}
              name={item.name}
              smallImageURL={item.smallImageURL}
              largeImageURL={item.largeImageURL}
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
