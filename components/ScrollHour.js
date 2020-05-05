import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import styled from 'styled-components/native'
import {responsiveWidth,} from "react-native-responsive-dimensions";

const HOURS = [];
for (let i = 0; i < 24; i += 1) {
  HOURS.push({value: `${i}:00`});
}

const hourWidth = responsiveWidth(33);

export default function ScrollHour({onHourChange}) {
  function onScroll(event) {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.ceil(offsetX / hourWidth);
    onHourChange(index);
  }
  
  return (
    <View style={{height: 80}} >
      <ScrollView
        snapToInterval={hourWidth}
        horizontal= {true}
        decelerationRate="fast"
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={500}
        onScroll={onScroll}
      >
        {HOURS.map(hour => Hour(hour))}
      </ScrollView>
    </View>
  );
}

function Hour({ value }) {
  return (
    <View style={styles.hour} key={value}>
      <Title>{value}</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  hour: {
    backgroundColor: '#7183ff',
    width: hourWidth,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const Title = styled.Text`
  font-size: 20;
`;
