import React from 'react';
import Colors from '../../global/colors';
import { IFooterList } from './Models';

import * as S from './styles';

const FooterList: React.FC<IFooterList> = ({ load }) => {
  if(!load) return null;
  
  return (
    <S.Container>
      <S.LoadingCustom size={25} color={Colors.BLACK} />
    </S.Container>
  );
}

export default FooterList;