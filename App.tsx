import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {getDays, getHours, getWeather} from './api/weather/weather';
import {ScrollDay} from './components/ScrollDay/ScrollDay';
import {ScrollHour} from './components/ScrollHour/ScrollHour';
import { HourWeather, WeatherResponse } from './api/weather/weather.models';
import { AppProps } from './App.models';
import { SelectedDay } from './components/ScrollDay/ScrollDay.models';

const App: React.FC<AppProps> = (props) => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [hour, setHour] = React.useState<HourWeather | null>(null);
  const [day, setDay] = React.useState<SelectedDay | null>(null);
  const [weather, setWeather] = React.useState<WeatherResponse | null>(null);

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

  function updateHour(hour: HourWeather) {
    //setHour(hour);
  }

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollHour
          hours={getHours(weather, day?.isToday)}
          onHourChange={updateHour}
        />
        <ScrollDay
          days={getDays(weather)}
          onDayChange={day => setDay(day)}
        />
        <Text>{JSON.stringify(day)}</Text>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
