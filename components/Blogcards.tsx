import {
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Blogcards = () => {
  const openWebsite = (uri: string) => {
    Linking.openURL(uri);
  };
  return (
    <>
      <View>
        <Text style={styles.heading}>Blogcards</Text>
      </View>
      <View style={[styles.card, styles.Cardelevation]}>
        <View style={styles.imgcontainer}>
          <Image
            style={styles.blogimage}
            source={{
              uri: 'https://cdn.pixabay.com/photo/2023/10/19/23/40/wallpaper-8327848_1280.jpg',
            }}
          />
        </View>
        <View style={styles.titlecontainer}>
          <Text style={styles.title}>Blog Title</Text>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            magnam, culpa nobis quos omnis rerum ex alias ad adipisci delectus
            minima sed fugit? Quas velit ratione natus officia voluptas
            accusantium?
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.google.com')}>
            <Text style={styles.readmore}>Read more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Blogcards;

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
  Cardelevation: {
    elevation: 4,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowColor: '#FF3E4D',
  },
  blogimage: {
    height: 180,
    marginBottom: 6,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  imgcontainer: {
    padding: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
  },
  titlecontainer: {
    padding: 8,
  },
  readmore: {
    color: '#0A79DF',
    marginHorizontal: 8,
  },
});
