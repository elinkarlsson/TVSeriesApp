import React from 'react';
import {Alert, StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';
import {useEffect, useState} from 'react';
import Show from '../models/Show';
import {GetShowById} from '../services/api.service';
import Spinner from '../components/Spinner';
import Summary from './summary/Summary';
import Card from './card/Card';

const DetailsScreen = ({route}: Props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Show>();

  useEffect(() => {
    setLoading(true);
    GetShowById(route.params.name)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        Alert.alert(
          'Something went wrong',
          `Please try again or reopen your application. Additional information: ${error}`,
        );
        console.log(error);
        setLoading(false);
      });
  }, [route.params.name]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {loading && <Spinner />}
        {data && (
          <>
            <Text style={styles.title}>{data.name}</Text>
            <Card show={data} />
            <Summary text={data.summary} />
          </>
        )}
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});

interface Props {
  route: any;
}

export default DetailsScreen;
