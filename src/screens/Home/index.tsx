import React, { Fragment, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import HorizontalLine from '../../shared/HorizontalLine';
import Input from '../../shared/Input';
import api from '../../services/api';
import * as S from './styles';

const Home: React.FC = () => {

  const [dataUser, setDataUser] = useState<any>([]);
  const [searchData, setSearchData] = useState('');
  const [sendRequisition, setSendRequisition] = useState(false)
  const [loading, setLoading] = useState(false);
  const { navigate } = useNavigation<any>();

  useEffect(() => {
    const getInfoUserGithub = async () => {
      setLoading(true)
      try {
        const response = await api.get('/search/repositories?q=TERMO_DA_BUSCA&per_page=15');
        const { data } = response;
        setDataUser(data);
      } catch (error: any) {
        console.log('ERRO:', error.response);
      } finally {
        {
          setLoading(false)
        }
      }
    }
    getInfoUserGithub();
  }, []);

  const filterData = dataUser?.items?.filter((item: any) => {
    return item?.name?.toLowerCase().indexOf(searchData.toLowerCase()) >= 0;
  });

  // console.log(filterData)

  // const renderItem = ({ item }: any) => {
  //   // console.log(item)
  //   return (

  //   );
  // }


  return (
    <S.Container>
      <S.TitleHome>Repositórios</S.TitleHome>
      <S.BoxInput>
        <Input
          placeholder={'Busca por repositórios'}
          keyboardType={'default'}
          value={searchData}
          onChangeText={text => setSearchData(text)}
          onSubmitEditing={() => {
            setSendRequisition(true)
          }}
        />
      </S.BoxInput>
      <S.ScrollViewCustom>
        {filterData?.map((item: any, index: any) => {
          return (
            <Fragment key={index}>
              <S.ContainerContent>
                <S.ContentInLine onPress={() => navigate('Internal', { item })}>
                  <S.ImageCustom source={{ uri: item?.owner?.avatar_url }} />
                  <S.BoxNameRepoAndOwner>
                    <S.NameRepo>{item.name}</S.NameRepo>
                    <S.NameOwner>{item?.owner?.login}</S.NameOwner>
                  </S.BoxNameRepoAndOwner>
                  <S.NumberOfStars>{item.stargazers_count} stars</S.NumberOfStars>
                </S.ContentInLine>
              </S.ContainerContent>
              <HorizontalLine />
            </Fragment>
          );
        })}
      </S.ScrollViewCustom>

      {/* <S.BoxFlatlist>
        <S.FlatListCustom
          data={dataUser}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />

      </S.BoxFlatlist> */}
    </S.Container>
  );
}

export default Home;