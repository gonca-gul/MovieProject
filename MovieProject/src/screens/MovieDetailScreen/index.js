import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {API_KEY} from '../../constants/veriable';
import CustomText from '../../shared/customText';
import {hp, wp} from '../../shared/helpers/veriables';
import styles from './style';
import Content from '../../shared/fragment/content';
import IconBack from '../../components/icons/iconBack';

function MovieDetailScreen({route, navigation}) {
  const imdbID = route.params?.imdbID;
  const [movieDetail, setMovieDetail] = useState(null);

  const fetchMovieDetails = async imdbID => {
    try {
      const storedMovieDetails = await AsyncStorage?.getItem(imdbID);
      if (storedMovieDetails) {
        setMovieDetail(JSON.parse(storedMovieDetails));
      } else {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`,
        );
        const data = await response.json();
        await AsyncStorage?.setItem(imdbID, JSON.stringify(data));
        setMovieDetail(data);
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchMovieDetails(imdbID);
  }, [imdbID]);
  if (movieDetail === null) {
    return (
      <Content>
        <ActivityIndicator size="large" color="#00ff00" />
      </Content>
    );
  }
  return (
    <Content contentStyle={styles.contentStyle}>
      <View style={styles.container}>
        <Image
          source={{uri: movieDetail?.Poster}}
          style={styles.imageBackground}
          blurRadius={5}
        />
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          style={styles.goBack}>
          <IconBack />
        </TouchableOpacity>
        <View style={styles.body}>
          <View style={styles.rowView}>
            <View style={styles.imageView}>
              <Image
                source={{uri: movieDetail?.Poster}}
                resizeMode="contain"
                width={wp(55)}
                height={hp(40)}
              />
            </View>
            <View style={styles.ratingView}>
              <CustomText style={styles.ratingText}>
                IMDB Rating: {movieDetail?.imdbRating}
              </CustomText>
              <AirbnbRating
                ratingContainerStyle={styles.ratingContainerStyle}
                count={5}
                defaultRating={movieDetail?.imdbRating / 2}
                size={15}
                isDisabled={true}
              />
            </View>
          </View>
          <View style={styles.introductionView}>
            <CustomText style={styles.title}>
              {movieDetail?.Title}
              <CustomText style={styles.year}>
                {' '}
                ({movieDetail?.Year})
              </CustomText>
            </CustomText>
            <View style={styles.descriptionView}>
              <CustomText style={styles.descriptionTitle}>Introduce</CustomText>
              <CustomText style={styles.description}>
                {movieDetail?.Plot}
              </CustomText>
              <View style={styles.actorsView}>
                <CustomText style={styles.actorsTitle}>
                  Actors:
                  <CustomText style={styles.actors}>
                    {' '}
                    {movieDetail?.Actors}
                  </CustomText>
                </CustomText>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Content>
  );
}
export default MovieDetailScreen;
