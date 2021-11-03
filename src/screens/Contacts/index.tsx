import React from 'react';
import { View, Text } from 'react-native';

import { Container, Title } from './styles';

interface Props {
  title: string;
}

const Contacts = ({ title } : Props) => (
   <Container>
     <Title>{title}</Title>
   </Container>
);

export default Contacts;
