import { CursorTopProps } from './WeatherCursor.models';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { temperature, windDirection, windSpeed } from '../../utils/weather.utils';
import { TextBold } from '../StyledText';
import Colors from '../../constants/Colors';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export const CursorTop: React.FC<CursorTopProps> = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 2,
    },
    temperature: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    temperatureText: {
      fontSize: 30,
      color: Colors.white
    },
    wind: {
      flex: 1,
      flexDirection: 'row',
    },
    windItem: {
      alignItems: 'center',
      width: props.cursorWidth / 2,
      justifyContent: 'space-between',
      height: 48
    },
    windText: {
      color: Colors.white
    },
    lastWindItem: {
      marginLeft: -27
    },
    windArrow: {
      marginTop: 2
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.temperature}>
        <TextBold style={styles.temperatureText}>{temperature(props.temp)}</TextBold>
        <TextBold style={styles.temperatureText}>&deg;</TextBold>
      </View>
      <View style={styles.wind}>
        <View style={styles.windItem}>
          <MaterialCommunityIcons name="weather-windy" size={24} color={Colors.white} />
          <TextBold style={styles.windText}>{windSpeed(props.wind_speed)}</TextBold>
        </View>
        <View style={[styles.windItem, styles.lastWindItem]}>
          <FontAwesome style={styles.windArrow} name="location-arrow" size={18} color={Colors.white} />
          <TextBold style={styles.windText}>{windDirection(props.wind_deg)}</TextBold>
        </View>
      </View>
    </View>
  );
};

