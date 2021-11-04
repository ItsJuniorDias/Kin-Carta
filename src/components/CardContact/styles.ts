import styled from 'styled-components/native';
import { RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`

`;


export const TitleNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: bold;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const NumberType = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.blackText};
  margin-top: ${RFValue(4)}px;
`;

export const Touch = styled(TouchableOpacity)``;

export const ContentBody = styled.View`
  width: 100%;
  height: ${RFValue(54)}px;
  /* background-color: red; */
  padding: 16px 16px;
  margin-bottom: ${RFValue(21)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconContent = styled.View`
  width: ${RFPercentage(9)}px;
  flex-direction: row;
  /* background-color: blue; */
  justify-content: space-between;
`;

