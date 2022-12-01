import styled from 'styled-components/native';
import { Heading } from '../../global/typography';
import Colors from '../../global/colors';
import { FlatList, ScrollView } from 'react-native';

export const Container = styled.View`
  padding: 40px 20px 20px 20px;
  background-color: ${Colors.WITHE};
`;

export const TitleHome = styled.Text`
  margin-top: 30px;
  color: ${Colors.BLACK};
  ${Heading.PRIMARY}
`;

export const BoxInput = styled.View`
  margin-top: 10px;
`;

export const BoxFlatlist = styled.View`
  margin-top: 20px;
`;

export const FlatListCustom = styled(FlatList)`
  margin-bottom: 300px;
`;

export const ContainerContent = styled.View``;

export const ContentInLine = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 10px;
`;

export const ImageCustom = styled.Image`
  height: 52px;
  width: 52px;
  border-radius: 25px;
`;

export const BoxNameRepoAndOwner = styled.View`
  margin-left: 10px;
  flex: 1;
  justify-content: center;;
`;

export const NameRepo = styled.Text`
  font-weight: bold;
  color: ${Colors.BLACK};
  ${Heading.SECONDARY};
`;

export const NameOwner = styled.Text`
  color: ${Colors.SUPPORT_900};
  ${Heading.SUBTITLE_SMALL};
`;

export const NumberOfStars = styled.Text`
  color: ${Colors.SUPPORT_900};
  ${Heading.SUBTITLE_SMALL};
`;

export const ScrollViewCustom = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false
})`
  margin-bottom: 190px;
`;