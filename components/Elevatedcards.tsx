import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Elevatedcards = () => {
  return (
    <>
      <Text style={styles.heading}>Elevatedcards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={styles.card}>
          <Text>Tap</Text>
        </View>
        <View style={styles.card}>
          <Text>me</Text>
        </View>
        <View style={styles.card}>
          <Text>to</Text>
        </View>
        <View style={styles.card}>
          <Text>scroll</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Elevatedcards;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    marginLeft: 8,
    fontWeight: 'bold',
    color: '#000000',
  },
  container: {
    flex: 1,
    padding: 8,
  },
  card: {
    height: 100,
    width: 100,
    flex: 1,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: 'red',
  },
});
