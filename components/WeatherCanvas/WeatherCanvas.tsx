import React from 'react';
import { WeatherCanvasProps } from './WeatherCanvasProps';
import {Image, StyleSheet, View} from 'react-native';
import { HourIcon } from '../HourIcon/HourIcon';
import useDebounce from "../../utils/debounce.hook";
import {responsiveWidth} from "react-native-responsive-dimensions";

const fullWidth = responsiveWidth(100);

export const WeatherCanvas: React.FC<WeatherCanvasProps> = (props) => {
  const debouncedProps = useDebounce(props);
  if(debouncedProps.hour) {
    const HourIconComponent = HourIcon.get(debouncedProps.hour) as any
    return (
      <View style={styles.container} pointerEvents={'none'}>
        {/*<HourIconComponent style={styles.svg}/>*/}
        <Image source={{uri: 'https://tibo47-weather.s3.eu-west-3.amazonaws.com/Thunderstorm/Thunderstorm.png'}}
               resizeMode={'cover'}
               style={{width: fullWidth, height: '100%'}} />
      </View>
    );
  } else {
    return <View style={styles.container}/>;
  }
};

const styles = StyleSheet.create({
  svg: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#f60e30'
  }
});
