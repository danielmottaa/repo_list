import React, { Fragment, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import HorizontalLine from '../../shared/HorizontalLine';
import Input from '../../shared/Input';
import api from '../../services/api';
import * as S from './styles';
import FooterList from '../../shared/FooterList';

const Home: React.FC = () => {

  const [data, setData] = useState<any>([]);
  const [searchData, setSearchData] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { navigate } = useNavigation<any>();

  const perPage = 20;



  useEffect(() => {
    getInfoUserGithub();
  }, []);

  const getInfoUserGithub = async () => {
    try {
      setLoading(true)
      const response = await api.get(`/search/repositories?q=diego3g&${perPage}&page=${page}`);
      setData([...data, ...response.data.items]);
      setPage(page + 1);
      setLoading(false)
    } catch (error: any) {
      console.log('ERRO:', error.response);
    }
  }
  const filterData = data?.filter((item: any) => {
    return item?.name?.toLowerCase().indexOf(searchData.toLowerCase()) >= 0;
  });

  const renderItem = ({ item }: any) => {
    return (
      <Fragment key={item}>
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
  }

  return (
    <S.Container>
      <S.TitleHome>Repositórios</S.TitleHome>
      <S.BoxInput>
        <Input
          placeholder={'Busca por repositórios'}
          keyboardType={'default'}
          value={searchData}
          onChangeText={text => setSearchData(text)}
        />
      </S.BoxInput>
      <S.BoxFlatlist>
        <S.FlatListCustom
          data={filterData}
          renderItem={renderItem}
          keyExtractor={((item: any) => item.id.toString())}
          showsVerticalScrollIndicator={false}
          onEndReached={getInfoUserGithub}
          onEndReachedThreshold={0.1}
          ListFooterComponent={<FooterList load={loading} />}
        />

      </S.BoxFlatlist>
    </S.Container>
  );
}

export default Home;