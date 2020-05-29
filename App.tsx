import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { getCurrentWeather, getDays, getHours, getWeather } from './api/weather/weather';
import {ScrollDay} from './components/ScrollDay/ScrollDay';
import {ScrollHour} from './components/ScrollHour/ScrollHour';
import { HourWeather, WeatherResponse } from './api/weather/weather.models';
import { AppProps } from './App.models';
import { SelectedDay } from './components/ScrollDay/ScrollDay.models';
import { WeatherCursor } from './components/WeatherCursor/WeatherCursor';

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
          ...FontAwesome.font,
          ...MaterialCommunityIcons.font,
          'NunitoSans': require('./assets/fonts/NunitoSans-Regular.ttf'),
          'NunitoSansBold': require('./assets/fonts/NunitoSans-Bold.ttf'),
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
        <ScrollDay
          days={getDays(weather)}
          onDayChange={day => setDay(day)}
        />
        <Text style={styles.canvas}>{JSON.stringify(getCurrentWeather(day, hour, weather))}</Text>
        <FontAwesome name="square" size={200} color="red" />
        <ScrollHour
          day={day}
          hours={getHours(weather, day?.isToday)}
          onHourChange={hour => setHour(hour)}
        />
        <WeatherCursor
          weather={getCurrentWeather(day, hour, weather)}
        />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  canvas: {
    //flex: 1,
    backgroundColor: '#ffa82c',
  },
  svg: {
    backgroundColor: '#ff75e5'
  }
});

export default App;
