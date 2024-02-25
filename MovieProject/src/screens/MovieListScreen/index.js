import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Content from '../../shared/fragment/content';
import CustomText from '../../shared/customText';
import IconSearch from '../../components/icons/iconSearch';
import {API_KEY} from '../../constants/veriable';
import {hp} from '../../shared/helpers/veriables';
import DropShadow from 'react-native-drop-shadow';
import styles from './style';
import _ from 'lodash';
import {primaryWhite} from '../../constants/styles/colors';

function MovieListScreen({navigation}) {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMovies = async (searchText, page = 1) => {
    if (searchText?.length < 2) {
      setMovies([]);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}&page=${page}`,
      );
      const data = await response.json();
      if (data?.Search) {
        setMovies(prevMovies => [...prevMovies, ...data.Search]);
        setHasMore(data.Search.length > 0);
      } else {
        setMovies([]);
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchText?.length > 2) {
      fetchMovies(searchText);
    } else {
      setMovies([]);
      setHasMore(true);
    }
  }, [searchText]);

  const handleLoadMore = _.debounce(() => {
    if (hasMore) {
      setPage(prevPage => prevPage + 1);
      fetchMovies(searchText, page);
    }
  }, 1500);

  const renderItem = ({item}) => (
    <DropShadow style={styles.shadow}>
      <TouchableOpacity
        style={styles.renderItemView}
        onPress={() =>
          navigation?.navigate('MovieDetailScreen', {imdbID: item?.imdbID})
        }>
        <Image
          source={{uri: item?.Poster}}
          style={styles.image}
          width={'100%'}
          height={hp(20)}
        />
        <View style={styles.textView}>
          <CustomText style={styles.itemTitle}>{item?.Title}</CustomText>
          <Text style={styles.itemYear}>({item?.Year})</Text>
        </View>
      </TouchableOpacity>
    </DropShadow>
  );

  return (
    <Content>
      <View style={styles.container}>
        <CustomText style={styles.bigTitle}>SEARCH MOVIE</CustomText>
        <View style={styles.searchView}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor={'#848482'}
            style={styles.textInput}
            onChangeText={text => setSearchText(text)}
            value={searchText}
          />
          <IconSearch style={styles.iconSearch} />
        </View>
        <View>
          {movies?.length === 0 && searchText?.length > 2 ? (
            <CustomText style={styles.noResult}>No result found</CustomText>
          ) : (
            <FlatList
              style={styles.flatlist}
              data={movies}
              renderItem={renderItem}
              keyExtractor={item => item?.imdbID}
              numColumns={2}
              onEndReached={handleLoadMore}
              onEndReachedThreshold={0.9}
              refreshing={false}
              onRefresh={() => fetchMovies(searchText, 1)}
              ListFooterComponent={
                hasMore &&
                loading && (
                  <ActivityIndicator size={'large'} color={primaryWhite} />
                )
              }
            />
          )}
        </View>
      </View>
    </Content>
  );
}
export default MovieListScreen;
