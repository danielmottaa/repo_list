import React, {Fragment, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import HorizontalLine from '../../shared/HorizontalLine';
import Input from '../../shared/Input';
import api from '../../services/api';
import FooterList from '../../shared/FooterList';
import {useDispatch} from 'react-redux';
import {changeRouteName} from '../../store/ducks/info';
import * as S from './styles';

const Home: React.FC = () => {
  const [data, setData] = useState<any>([]);
  const [searchData, setSearchData] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const {navigate} = useNavigation<any>();
  const dispatch = useDispatch();
  const perPage = 15;

  const getInfoUserGithub = async () => {
    try {
      setLoading(true);
      if (!isSearching) {
        const response = await api.get(
          `/search/repositories?q=react&per_page=${perPage}&page=${page}`,
        );
        setData([...data, ...response.data.items]);
        if (!!response.data.items) {
          setFilteredData([...data, ...response.data.items]);
        }
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const loadMoreItem = () => {
    setPage(page + 1);
  };

  const filterData = ()=>{
    setIsSearching(true);
    const filterData = data?.filter((item: any) => {
      return (
        item?.name?.toLowerCase().indexOf(searchData.toLowerCase()) >= 0
      );
    });
    setFilteredData(filterData);
    setIsSearching(!(!searchData || searchData == ''))
  }

  useEffect(() => {
    getInfoUserGithub();
  }, [page]);

  const renderItem = ({item}: any) => {
    return (
      <Fragment key={item}>
        <S.ContainerContent>
          <S.ContentInLine
            onPress={() => {
              dispatch(changeRouteName(item.name));
              navigate('Internal', {item});
            }}>
            <S.ImageCustom source={{uri: item?.owner?.avatar_url}} />
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
  };

  return (
    <S.Container>
      <S.TitleHome>Repositórios</S.TitleHome>
      <S.BoxInput>
        <Input
          placeholder={'Busca por repositórios'}
          keyboardType={'default'}
          value={searchData}
          onChangeText={text => setSearchData(text)}
          onSubmitEditing={filterData}
        />
      </S.BoxInput>
      <S.BoxFlatlist>
        <S.FlatListCustom
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0.1}
          ListFooterComponent={<FooterList load={loading} />}
        />
      </S.BoxFlatlist>
    </S.Container>
  );
};

export default Home;