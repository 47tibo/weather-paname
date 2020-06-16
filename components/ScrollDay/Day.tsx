import { responsiveWidth } from 'react-native-responsive-dimensions';
import * as React from 'react';
import { DayProps } from './ScrollDay.models';
import { StyleSheet, View } from 'react-native';
import { TextRegular } from '../StyledText';
import Colors from '../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

const dayWidth = responsiveWidth(33);
const shadowSize = dayWidth / 1.4;
const calendarSize = 90;
const calendarBorderRadius = 20;

export const Day: React.FC<DayProps> = ({value}) => {
  if (value.weekday) {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['transparent', 'rgba(1,1,1,.035)','transparent']}
          start={[0.5, 0.5]}
          end={[1, 1]}
          locations={[0,  0.75, 0.95]}
          style={styles.backgroundShadow}
        />
        <View style={styles.centeredSquare}>
          <View style={styles.background}/>
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
  backgroundShadow: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: calendarBorderRadius,
    width: shadowSize,
    height: shadowSize,
    top: 27,
    left: 27
  },
  centeredSquare: {
    width: calendarSize,
    height: calendarSize,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: calendarBorderRadius,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.lightGrey
  },
  weekday: {
    fontSize: 12,
    position: 'relative'
  },
  day: {
    marginTop: -2,
    marginBottom: -4,
    fontSize: 36,
    color: Colors.red,
    position: 'relative'
  },
  month: {
    fontSize: 12,
    position: 'relative'
  }
});
