import styled from 'styled-components/native';
import { RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background };
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-weight: bold;
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primaryText}
`;
