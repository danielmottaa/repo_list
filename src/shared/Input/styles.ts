import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Heading } from '../../global/typography';
import Colors from '../../global/colors';

export const Container = styled.View``;

const widthScreen = Dimensions.get('screen').width * 0.9;
export const TextInputCustom = styled.TextInput`
  height: 36px;
  width: ${widthScreen}px;
  border-radius: 10px;
  justify-content: center;
  background-color: ${Colors.BACKGROUND};
  padding: 5px 10px 10px 30px;
  ${Heading.SECONDARY};
`;

export const BoxInput = styled.View`
  z-index: 999;
  top: 27px;
  width: 35px;
  align-items: center;
`;