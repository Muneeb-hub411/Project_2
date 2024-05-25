import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const Contactlist = () => {
  let ContactList = [
    {
      uid: '1',
      name: 'Tayyaba',
      status: 'NVM',
      imgurl: 'https://pixabay.com/static/frontend/3c346409d336d5f09a7f.svg',
    },
    {
      uid: '2',
      name: 'Ibrahim',
      status: 'ZZZ',
      imgurl: 'https://pixabay.com/static/frontend/3c346409d336d5f09a7f.svg',
    },
    {
      uid: '3',
      name: 'Usman',
      status: 'Dr Army Brat',
      imgurl: 'https://pixabay.com/static/frontend/3c346409d336d5f09a7f.svg',
    },
    {
      uid: '4',
      name: 'Rawaha',
      status: 'Khan Zada',
      imgurl: 'https://pixabay.com/static/frontend/3c346409d336d5f09a7f.svg',
    },
  ];
  return (
    <>
      <View>
        <Text style={styles.heading}>Contactlist</Text>
        <ScrollView scrollEnabled={false} style={styles.container}>
          {ContactList.map(({uid, name, status, imgurl}) => (
            <View key={uid} style={styles.usercard}>
              <Image
                style={styles.userimg}
                source={{
                  uri: imgurl,
                }}
              />
              <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.status}>{status}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Contactlist;

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  usercard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#BB2CD9',
    margin: 2,
    padding: 4,
    elevation: 4,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: '#E74292',
  },

  userimg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'grey',
    marginBottom: 4,
  },
  heading: {fontSize: 30, marginLeft: 8, fontWeight: 'bold', color: '#000000'},
  name: {
    marginLeft: 4,
    color: '#EAF0F1',
  },
  status: {
    marginLeft: 4,
    color: '#EAF0F1',
  },
});
