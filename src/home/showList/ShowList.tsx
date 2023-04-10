import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import SearchResult from '../../models/SearchResult';
import {getImageUriOrDefault} from '../../utils/Image.utility';

const ShowList = ({searchResults, navigation}: Props): JSX.Element => {
  if (!searchResults) {
    return <></>;
  }

  return (
    <View style={[styles.container]}>
      {searchResults.length === 0 && <Text>No results found</Text>}
      {searchResults.map((searchResult, index) => (
        <View key={index}>
          <Pressable
            style={styles.link}
            testID="show-item"
            onPress={() =>
              navigation.navigate('Details', {name: searchResult.show.id})
            }>
            <Image
              style={styles.image}
              source={{
                uri: getImageUriOrDefault(searchResult.show.image),
              }}
              testID="show-image"
            />
            <Text style={styles.text}>{searchResult.show.name}</Text>
          </Pressable>
          <View style={styles.divider} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  link: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 150,
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
    marginHorizontal: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

interface Props {
  searchResults: SearchResult[] | undefined;
  navigation: any;
}

export default ShowList;
