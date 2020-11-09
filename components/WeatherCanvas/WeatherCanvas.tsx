import React from 'react';
import {WeatherCanvasProps} from './WeatherCanvasProps';
import {StyleSheet, View} from 'react-native';
import {HourIcon} from '../HourIcon/HourIcon';
import useDebounce from "../../utils/debounce.hook";
import {WeatherConditionImage} from "../WeatherConditionImage/WeatherConditionImage";

export const WeatherCanvas: React.FC<WeatherCanvasProps> = (props) => {
  const debouncedProps = useDebounce(props);
  if(debouncedProps.hour && debouncedProps.weather) {
    const weather = debouncedProps.weather.weather[0];
    const HourIconSvg = HourIcon.get(debouncedProps.hour) as any;
    return (
      <View style={styles.container} pointerEvents={'none'}>
        <WeatherConditionImage iconCode={weather.icon} style={styles.weatherCondition}/>
        <HourIconSvg style={styles.hour}/>
      </View>
    );
  } else {
    return <View style={styles.container}/>;
  }
};

const styles = StyleSheet.create({
  hour: {
    flex: 1
  },
  weatherCondition: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1
  },
  container: {
    flex: 1
  }
});
