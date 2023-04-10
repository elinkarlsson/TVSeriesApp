import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {getImageUriOrDefault} from '../../utils/Image.utility';
import Show from '../../models/Show';
import Info from '../info/Info';

const Card = ({show}: Props) => {
  return (
    <View style={styles.container}>
      <Image
        testID="show-image"
        resizeMode="cover"
        style={styles.image}
        alt={`Cover of the TV series ${show.name}`}
        source={{
          uri: getImageUriOrDefault(show.image),
        }}
      />
      <Info show={show} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 150,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});

interface Props {
  show: Show;
}

export default Card;
