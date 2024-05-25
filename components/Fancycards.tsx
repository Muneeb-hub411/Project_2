import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const Fancycards = () => {
  return (
    <>
      <View>
        <Text style={styles.heading}>Fancycards</Text>
      </View>
      <ScrollView horizontal style={styles.scroller}>
        <View style={[styles.card]}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://media.istockphoto.com/id/1386446426/photo/badshahi-mosque.webp?s=1024x1024&w=is&k=20&c=wcHa8QmQhzMTHo4cgKnhjigEzh-vQYFDVQKkqpdOGxA=',
            }}
          />
          <View style={styles.cardbody}>
            <Text style={styles.title}>Badshahi Masjid</Text>

            <Text style={styles.location}> Lahore, Pakistan </Text>

            <Text>
              The Badshahi Mosque in Lahore, Pakistan, is a majestic Mughal
              architectural masterpiece and a symbol of cultural pride.
            </Text>
          </View>
        </View>
        <View style={[styles.card]}>
          <Image
            style={styles.img}
            source={{
              uri: 'https://media.istockphoto.com/id/1386446426/photo/badshahi-mosque.webp?s=1024x1024&w=is&k=20&c=wcHa8QmQhzMTHo4cgKnhjigEzh-vQYFDVQKkqpdOGxA=',
            }}
          />
          <View style={styles.cardbody}>
            <Text style={styles.title}>Badshahi Masjid</Text>

            <Text style={styles.location}> Lahore, Pakistan </Text>

            <Text>
              The Badshahi Mosque in Lahore, Pakistan, is a majestic Mughal
              architectural masterpiece and a symbol of cultural pride.
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Fancycards;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    marginLeft: 8,
    fontWeight: 'bold',
    color: '#000000',
  },
  card: {
    flex: 1,
    height: 350,
    width: 400,
    backgroundColor: '#616C6F',
    borderRadius: 8,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  img: {
    height: 180,
    marginBottom: 6,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  location: {
    marginBottom: 5,
  },
  cardbody: {
    flex: 1,
    paddingHorizontal: 12,
    flexGrow: 1,
  },
  scroller: {
    flex: 1,
    padding: 6,
  },
});
