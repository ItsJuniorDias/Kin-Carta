import styled from 'styled-components/native';
import { RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const ContentArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(54)}px;
  background-color: ${({ theme }) => theme.colors.grayBackground};;
`;

export const Content = styled.View`
  width: 100%;
  height: ${RFPercentage(31)}px;
  align-items: center;
  padding-top: ${RFValue(24)}px;
`;

export const Avatar = styled.Image`
  width: ${RFValue(104)}px;
  height: ${RFValue(104)}px;
  border-radius: ${RFValue(31)}px;
`;

export const NameUser = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: bold;
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-top: ${RFValue(10)}px;
`;

export const Number = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: bold;
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: ${RFValue(4)}px;
`;

export const DividerHeader = styled.View`
  width: 100%;
  height: ${RFValue(32)}px;
  background-color: ${({ theme }) => theme.colors.grayBackground};
`;



