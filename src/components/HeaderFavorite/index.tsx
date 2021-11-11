import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useSelector, useDispatch } from 'react-redux';

import { passToFavorite, removeFromFavorite } from '../../store/modules/contact/actions';

import {  RootState, AppDispatch } from '../../store';

import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native';

const HeaderFavorite = () => {
  const navigation = useNavigation();

  const detail = useSelector<RootState>(state => state.detail);
  const dispatch = useDispatch<AppDispatch>();

  const { isFavorite } = detail;

  const theme = useTheme();

  const handleFavorite = () => {
    if(isFavorite) {
      dispatch(removeFromFavorite(detail));
    } else {
      dispatch(passToFavorite(detail));
    }

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
