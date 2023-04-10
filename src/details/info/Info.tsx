import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Show from '../../models/Show';

const Info = ({show}: Props) => {
  return (
    <View style={styles.container}>
      {show.rating?.average && (
        <View style={styles.row}>
          <Text>{'⭐'}</Text>
          <Text style={styles.bold}>{show.rating?.average}</Text>
          <Text>{'/10'}</Text>
          {show.averageRuntime && <Text>{` | ${show.averageRuntime}m`}</Text>}
        </View>
      )}
      {show.genres.length > 0 && <Text>{`${show.genres.join(', ')}`}</Text>}
      {show.language && <Text>{`Language: ${show.language}`}</Text>}
      {show.premiered && <Text>{`Released: ${show.premiered}`}</Text>}
      {show.ended && <Text>{`Ended: ${show.ended}`}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold',
  },
});

interface Props {
  show: Show;
}

export default Info;
