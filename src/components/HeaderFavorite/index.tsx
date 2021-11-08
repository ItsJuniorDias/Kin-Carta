import React, { useState }  from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useSelector, useDispatch } from 'react-redux';

import { passToFavorite } from '../../store/modules/contact/actions';

import { useTheme } from 'styled-components'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


import { Container } from './styles';

const HeaderFavorite: React.FC = () => {
  const navigation = useNavigation();

  const [ iconFavorite, setIconFavorite ] = useState(false);

  const detail = useSelector(state => state.detail);
  const dispatch = useDispatch();

  console.log(detail, 'Header Favorite')

  const { isFavorite } = detail;

  console.log(isFavorite)

  const theme = useTheme();

  const handleFavorite = () => {
    dispatch(passToFavorite(detail));

    navigation.goBack();
  }

  return (
  <TouchableOpacity onPress={() => handleFavorite()}>
     {isFavorite && <MaterialIcons name="star" size={24} color={theme.colors.star} />}
     {!isFavorite && <MaterialIcons name="star-outline" size={24} color={theme.colors.black} />}
   </TouchableOpacity>
  );
}

export default HeaderFavorite;
