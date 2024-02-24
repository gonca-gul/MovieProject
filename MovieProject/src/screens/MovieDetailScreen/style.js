import {StyleSheet} from 'react-native';
import {grayBackground, primaryWhite} from '../../constants/styles/colors';
import {hp} from '../../shared/helpers/veriables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  body: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flex: 1,
    marginTop: hp(20),
    marginBottom: 18,
    marginHorizontal: 12,
  },
  rowView: {
    flexDirection: 'row', 
    flex: 1
  },
  imageView: {
    alignItems: 'flex-start', 
    marginLeft: 18, 
    bottom: hp(8)
  },
  ratingView: {
    flex: 1, 
    paddingHorizontal: 12, 
    justifyContent: 'center'
  },
  ratingText: {
    fontSize: 14, 
    color: primaryWhite, 
    fontWeight: 600
  },
  ratingContainerStyle: {
    alignItems: 'flex-start', 
    height: 10
  },
  introductionView: {
    flex: 1, 
    paddingHorizontal: 18, 
    marginBottom: 24
  },
  title: {
    fontSize: 24, 
    color: primaryWhite, 
    fontWeight: 700
  },
  year: {
    fontSize: 24, 
    color: primaryWhite, 
    fontWeight: 400
  },
  descriptionView: {
    marginTop: 24, 
    flex: 1
  },
  descriptionTitle: {
    fontSize: 18, 
    color: primaryWhite, 
    fontWeight: 600
  },
  description: {
    fontSize: 16,
    color: primaryWhite,
    fontWeight: 400,
    lineHeight: 24,
    marginTop: 6,
  },
  actorsTitle: {
    fontSize: 18,
    color: primaryWhite,
    fontWeight: 600,
    marginTop: 24,
  },
  actors: {
    fontSize: 16, 
    color: primaryWhite, 
    fontWeight: 400, 
    lineHeight: 18
  },
});

export default styles;
