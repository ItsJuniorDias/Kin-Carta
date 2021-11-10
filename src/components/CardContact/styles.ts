import styled from 'styled-components/native';
import { RFPercentage, RFValue} from 'react-native-responsive-fontsize';

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
  height: ${RFValue(50)}px;
`;

export const ContentBody = styled.View`
  width: 100%;
  height: ${RFValue(54)}px;
  padding: 16px 16px;
  margin-bottom: ${RFValue(21)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconContent = styled.View`
  width: ${RFPercentage(9)}px;
  flex-direction: row;
  justify-content: space-between;
`;

