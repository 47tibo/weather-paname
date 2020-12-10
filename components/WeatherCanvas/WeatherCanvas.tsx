import React from 'react';
import {WeatherCanvasProps} from './WeatherCanvasProps';
import {StyleSheet, View} from 'react-native';
import {HourIcon} from './HourIcon/HourIcon';
import useDebounce from "../../utils/debounce.hook";
import {WeatherConditionImage} from "./WeatherConditionImage/WeatherConditionImage";
import {CityText} from './CityText';

export const WeatherCanvas: React.FC<WeatherCanvasProps> = (props) => {
  const debouncedProps = useDebounce(props);
  if(debouncedProps.hour && debouncedProps.weather) {
    const weather = debouncedProps.weather.weather[0];
    const HourIconSvg = HourIcon.get(debouncedProps.hour) as any;
    return (
      <View style={styles.container} pointerEvents={'none'}>
        <CityText style={styles.cityText}/>
        <WeatherConditionImage iconCode={weather.icon} style={styles.weatherCondition}/>
        <HourIconSvg style={styles.hour}/>
      </View>
    );
  } else {
    return <View style={styles.container}/>;
  }
};

const styles = StyleSheet.create({
  cityText: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2
  },
  weatherCondition: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1
  },
  hour: {
    flex: 1
  },
  container: {
    flex: 1
  }
});
