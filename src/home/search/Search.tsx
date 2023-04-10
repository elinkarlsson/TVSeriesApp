import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

const Search = ({onSearch}: Props): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Search..."
        aria-label="Search input"
        style={styles.input}
        value={searchTerm}
        testID="input"
        onChangeText={setSearchTerm}
      />
      <Pressable
        aria-label="Search button"
        style={styles.button}
        testID="button"
        onPress={() => onSearch(searchTerm)}>
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#2660a4',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

interface Props {
  onSearch(params: string): void;
}

export default Search;
