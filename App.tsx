import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Flatcards from './components/Flatcards';
import Elevatedcards from './components/Elevatedcards';
import Fancycards from './components/Fancycards';
import Blogcards from './components/Blogcards';
import Contactlist from './components/Contactlist';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Flatcards />
          <Elevatedcards />

          <Fancycards />
          <Blogcards />
          <Contactlist />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
