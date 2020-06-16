import React from 'react';
import { WeatherCanvasProps } from './WeatherCanvasProps';
import { StyleSheet, View } from 'react-native';
import { HourIcon } from '../HourIcon/HourIcon';

export const WeatherCanvas: React.FC<WeatherCanvasProps> = ({weather, hour}) => {
  if (weather && hour) {
    const HourIconComponent = HourIcon.get(hour) as any;
    if (HourIconComponent) {
      return (
        <View style={styles.container} pointerEvents={'none'}>
          <HourIconComponent style={styles.svg}/>
        </View>
      );
    } else {
      return <View style={styles.container}/>;
    }
  } else {
    return null
  }
};

const styles = StyleSheet.create({
  svg: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff2e4'
  }
});
