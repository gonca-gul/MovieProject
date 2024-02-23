import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
  View,
} from 'react-native';
import Content from '../../shared/fragment/content';
import CustomText from '../../shared/customText';
import IconSearch from '../../components/icons/iconSearch';
import {API_KEY} from '../../constants/veriable';
import {hp} from '../../shared/helpers/veriables';
import DropShadow from 'react-native-drop-shadow';
import styles from './style';

function MovieListScreen() {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async searchText => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`,
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchText.length > 2) {
      const timer = setTimeout(() => {
        fetchMovies(searchText);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setMovies([]);
    }
  }, [searchText]);

  const renderItem = ({item}) => (
    <DropShadow style={styles.shadow}>
      <View style={styles.renderItemView}>
        <Image
          source={{uri: item.Poster}}
          style={styles.image}
          width={'100%'}
          height={hp(20)}
        />
        <View style={styles.textView}>
          <CustomText style={styles.itemTitle}>{item.Title}</CustomText>
          <Text style={styles.itemYear}>({item.Year})</Text>
        </View>
      </View>
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
          {loading && <ActivityIndicator />}
          <FlatList
            style={styles.flatlist}
            data={movies}
            renderItem={renderItem}
            keyExtractor={item => item.imdbID}
            numColumns={2}
          />
        </View>
      </View>
    </Content>
  );
}
export default MovieListScreen;
