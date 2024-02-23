import {StyleSheet} from 'react-native';
import {grayBackground, primaryWhite} from '../../constants/styles/colors';

const styles = StyleSheet.create({
  shadow: {
    flex: 1,
    shadowColor: '#bbbbbb',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  renderItemView: {
    backgroundColor: grayBackground,
    alignItems: 'center',
    flex: 1,
    borderRadius: 12,
    margin: 12,
  },
  image: {
    resizeMode: 'cover',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  textView: {
    margin: 12,
  },
  itemTitle: {
    fontWeight: '700',
    color: primaryWhite,
    fontSize: 12,
  },
  itemYear: {
    fontWeight: '700',
    color: primaryWhite,
    fontSize: 12,
    lineHeight: 24,
  },
  container: {
    marginHorizontal: 10,
    marginTop: 18,
  },
  bigTitle: {
    fontWeight: '700',
    color: primaryWhite,
    fontSize: 22,
  },
  searchView: {
    backgroundColor: grayBackground,
    borderRadius: 12,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 18,
    color: primaryWhite,
  },
  iconSearch: {
    marginRight: 18,
  },
  flatlist: {
    marginTop: 18,
  },
});

export default styles;
