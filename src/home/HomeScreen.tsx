import React, {useState} from 'react';
import {Keyboard} from 'react-native';
import {Alert, SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import SearchResult from '../models/SearchResult';
import Search from './search/Search';
import {SearchShow} from '../services/api.service';
import ShowList from './showList/ShowList';
import Spinner from '../components/Spinner';

const HomeScreen = ({navigation}: Props): JSX.Element => {
  const [data, setData] = useState<SearchResult[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const search = (searchTerm: string) => {
    setLoading(true);
    Keyboard.dismiss();
    SearchShow(searchTerm)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        Alert.alert(
          'Something went wrong',
          `Please try again or reopen your application. Additional information: ${error}`,
        );
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>TV Series Search App!</Text>
        <Text style={styles.text}>
          Use the search input below to find interesting TV series and read more
          about them.
        </Text>
        <Search onSearch={search} />
        {loading && <Spinner />}
        <ShowList searchResults={data} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 20,
    backgroundColor: '#edf7f6',
  },
  title: {
    marginBottom: 10,
    fontFamily: 'Iowan Old Style',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    marginBottom: 10,
  },
});

interface Props {
  navigation: any;
}

export default HomeScreen;
