import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface PropsMargin {
  noFavorite: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background };
`;

export const TitleHeaderSection = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: bold;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const SubtTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: ${RFValue(4)}px;
`;

export const ContentSectionHeader = styled.View`
  width: 100%;
  height: ${RFValue(28)}px;
  background-color: ${({ theme }) => theme.colors.grayBackground};
  justify-content: center;
  padding: 0px 17px;
  margin-bottom: ${RFValue(21)}px;
`;

export const ContactContainer = styled.View<PropsMargin>`
  width: 100%;
  padding: ${({ noFavorite }) => noFavorite ? '0px 40px': '0px 17px'};
  flex-direction: row;

`;

export const ContentRow = styled(TouchableOpacity)`
  flex-direction: row;
  margin-bottom: ${RFValue(16)}px;
  padding: 0 16px;
`;

export const ContenAvatar = styled.View`
  margin-top: ${RFValue(21)}px;
`;

export const Avatar = styled.Image`
  width: ${RFValue(53)}px;
  height: ${RFValue(53)}px;
  border-radius: ${RFValue(16)}px;
`;

export const ContentDivider = styled.View`
  padding: 0px 17px;
`;

export const Divider = styled.View`
  background-color: ${({ theme }) => theme.colors.divider};
  height: ${RFValue(1)}px;
  padding: 0px 17px;
  margin-bottom: ${RFValue(16)}px;
`;

export const IconContet = styled.View`
  margin-right: ${RFValue(4)}px;
`;

export const Indicator = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;


