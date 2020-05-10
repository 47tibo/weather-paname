import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {responsiveWidth,} from "react-native-responsive-dimensions";
import {HoursList} from './HoursList';

const hourWidth = responsiveWidth(33);

export default function ScrollHour({onHourChange}) {
  function onScroll(event) {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.ceil(offsetX / hourWidth);
    onHourChange(index);
  }
  
  return (
    <View style={{height: 80}}>
      <ScrollView
        snapToInterval={hourWidth}
        horizontal= {true}
        decelerationRate="fast"
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={500}
        onScroll={onScroll}
      >
        <View style={styles.emptyHour}>
        </View>
        {HoursList(hourWidth)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyHour: {
    backgroundColor: '#7183ff',
    width: hourWidth,
    flex: 1
  }
});
