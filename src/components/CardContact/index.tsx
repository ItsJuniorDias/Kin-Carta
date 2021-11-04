import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components'
import { Ionicons } from '@expo/vector-icons';

import {
  ContentBody,
  TitleNumber,
  NumberType,
  IconContent,
  Touch,

} from './styles';

interface PropsCard {
  title: string;
  subTitle: string;
  isNumber?: boolean;
}

const CardContact = ({ subTitle, title, isNumber}: PropsCard) => {
  const theme = useTheme();

  return (
    <ContentBody>
           <View>
            <TitleNumber>{title}</TitleNumber>
            <NumberType>{subTitle}</NumberType>
           </View>

          {isNumber && (
             <IconContent>
             <Touch>
               <Ionicons name="chatbubble-ellipses-outline" size={24} color={theme.colors.blackText} />
              </Touch>
             <Touch>
               <Ionicons name="md-call-outline" size={24} color={theme.colors.blackText} />
             </Touch>
           </IconContent>
          )}
    </ContentBody>
  );
}

export default CardContact;
