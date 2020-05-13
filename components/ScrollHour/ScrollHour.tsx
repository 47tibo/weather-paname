import * as React from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, View } from 'react-native';
import {responsiveWidth,} from "react-native-responsive-dimensions";
import {HoursList} from './HoursList';
import { ScrollHourProps } from './ScrollHour.models';

const hourWidth = responsiveWidth(33);

export const ScrollHour: React.FC<ScrollHourProps> = ({hours, onHourChange}) => {
  function onScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.ceil(offsetX / hourWidth);
    onHourChange(hours[index]);
  }

  return (
    <View style={{height: 80}}>
      <ScrollView
        snapToInterval={hourWidth}
        horizontal={true}
        decelerationRate="fast"
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={500}
        onScroll={onScroll}
      >
        <View style={styles.emptyHour}>
        </View>
        {HoursList(hours, hourWidth)}
        <View style={styles.emptyHour}>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyHour: {
    backgroundColor: '#7183ff',
    width: hourWidth,
    flex: 1
  }
});
