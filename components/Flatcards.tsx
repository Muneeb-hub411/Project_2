import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flatcards = () => {
  return (
    <View>
      <Text style={styles.heading}>Flatcards</Text>
      <View style={styles.container}>
        <View style={[styles.cardone, styles.card]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.cardtwo, styles.card]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.cardthree, styles.card]}>
          <Text>Blue</Text>
        </View>
        {/* <View>
          <Text>Green</Text>
        </View>
        <View>
          <Text>Blue</Text>
        </View> */}
      </View>
    </View>
  );
};

export default Flatcards;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    marginLeft: 8,
    fontWeight: 'bold',
    color: '#000000',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  cardone: {
    width: 100,
    height: 100,
    backgroundColor: '#cc0000',
  },
  cardtwo: {
    width: 100,
    height: 100,
    backgroundColor: '#8fce00',
  },
  cardthree: {
    width: 100,
    height: 100,
    backgroundColor: '#3d85c6',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 8,
  },
});
