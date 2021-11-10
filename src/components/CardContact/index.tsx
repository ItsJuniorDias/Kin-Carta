import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components'
import { Ionicons } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  ContentBody,
  TitleNumber,
  NumberType,
  IconContent,
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
             <TouchableOpacity>
               <Ionicons
                 name="chatbubble-ellipses-outline"
                 size={24}
                 color={theme.colors.blackText}
                />
              </TouchableOpacity>

             <TouchableOpacity>
               <Ionicons
                name="md-call-outline"
                size={24}
                color={theme.colors.blackText}
              />
             </TouchableOpacity>
           </IconContent>
          )}
    </ContentBody>
  );
}

export default CardContact;
