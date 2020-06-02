import { responsiveWidth } from 'react-native-responsive-dimensions';
import * as React from 'react';
import { DayProps } from './ScrollDay.models';
import { StyleSheet, View } from 'react-native';
import { TextRegular } from '../StyledText';
import Colors from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

const dayWidth = responsiveWidth(33);

export const Day: React.FC<DayProps> = ({value}) => {
  if (value.weekday) {
    return (
      <View style={styles.container}>
        <View style={styles.centeredSquare}>
          <FontAwesome name="square" size={100} color="#cacaca" style={styles.backgroundIcon}/>
          <TextRegular style={styles.weekday}>{value.weekday}</TextRegular>
          <TextRegular style={styles.day}>{value.day}</TextRegular>
          <TextRegular style={styles.month}>{value.month}</TextRegular>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}/>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: dayWidth,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredSquare: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundIcon: {
    ...StyleSheet.absoluteFillObject,
    left: 8
  },
  weekday: {
    fontSize: 12,
    position: 'relative'
  },
  day: {
    fontSize: 28,
    color: Colors.red,
    position: 'relative'
  },
  month: {
    fontSize: 12,
    position: 'relative'
  }
});
