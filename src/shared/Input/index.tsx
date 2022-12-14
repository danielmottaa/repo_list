import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

import Colors from '../../global/colors';
import { IInput } from './Models';

import * as S from './styles';

const Input: React.FC<IInput> = ({ placeholder, keyboardType, value, onChangeText, onSubmitEditing }) => {
  return (
    <S.Container>
      <S.BoxInput>
        <Icon testID={'iconSearch'} name={'search1'} size={20} color={Colors.SUPPORT_900} />
      </S.BoxInput>
      <S.TextInputCustom
        testID={'input'}
        placeholder={placeholder}
        placeholderTextColor={Colors.SUPPORT_900}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </S.Container>
  );
}

export default Input;