import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Lato_900Black, Lato_400Regular, useFonts } from "@expo-google-fonts/lato";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync();

import Hero from './components/Hero';
import FoodList from './components/FoodList';
import TabBar from './components/TabBar';
const BackgroundHome = require('./assets/bg-light-effect-1.png');

export default function App() {
  const [loaded, error] = useFonts({
    Lato_900Black,
    Lato_400Regular
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={BackgroundHome} style={styles.backgroudImage}/>
      <Hero />
      <FoodList />
      <TabBar />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242329',
    justifyContent: 'flex-start',
    paddingTop: 40,
    paddingHorizontal: 28
  },

  backgroudImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 375,
    height: 375,
  }
});
