import {StyleSheet} from 'react-native';
import {primaryWhite} from '../../constants/styles/colors';
import {hp, wp} from '../../shared/helpers/veriables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentStyle:{
    backgroundColor:"transparent"
  },
  imageBackground: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  actorsView:{
    marginTop: 24
  },
  goBack:{
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width:wp(8),
    height:hp(4),
    marginLeft:12,marginTop:12,
    justifyContent:"center",
    alignItems:"center",
    opacity:0.5
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
    fontWeight: "600"
  },
  ratingContainerStyle: {
    alignItems: 'flex-start', 
    height: 10
  },
  introductionView: {
    flex: 1, 
    paddingHorizontal: 18, 
    //marginBottom: 24
  },
  title: {
    fontSize: 24, 
    color: primaryWhite, 
    fontWeight: "700"
  },
  year: {
    fontSize: 24, 
    color: primaryWhite, 
    fontWeight: "400"
  },
  descriptionView: {
    marginTop: 24, 
    marginBottom: 24},
  descriptionTitle: {
    fontSize: 18, 
    color: primaryWhite, 
    fontWeight: "600"
  },
  description: {
    fontSize: 16,
    color: primaryWhite,
    fontWeight: "400",
    lineHeight: 24,
    marginTop: 6,
  },
  actorsTitle: {
    fontSize: 18,
    color: primaryWhite,
    fontWeight: "600",
  },
  actors: {
    fontSize: 16, 
    color: primaryWhite, 
    fontWeight: "400", 
    lineHeight: 18
  },
});

export default styles;
