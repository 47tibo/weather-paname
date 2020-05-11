import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import ScrollHour from './components/ScrollHour';
import {getDays, getWeather} from './api/weather/weather';
import {ScrollDay} from './components/ScrollDay/ScrollDay';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [day, setDay] = React.useState(0);
  const [weather, setWeather] = React.useState(null);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
        const response = await getWeather();
        setWeather(response);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollHour
          onHourChange={(hourIndex) => setIndex(hourIndex)}
        />
        <Text>{JSON.stringify(index)}</Text>
        <ScrollDay
          days={getDays(weather)}
          onDayChange={(day) => setDay(day)}
        />
        <Text>{JSON.stringify(day)}</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
