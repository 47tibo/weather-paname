import * as React from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView, ScrollViewComponent, StyleSheet, View } from 'react-native';
import {responsiveWidth,} from "react-native-responsive-dimensions";
import {HoursList} from './HoursList';
import { ScrollHourProps } from './ScrollHour.models';
import Colors from '../../constants/Colors';

const hourWidth = responsiveWidth(33);

const ScrollHourComponent: React.FC<ScrollHourProps> = ({day, hours, onHourChange}) => {
  const scrollViewRef = React.useRef<any>(null);
  React.useEffect(() => {
    scrollViewRef.current.scrollTo({x: 0});
    onHourChange(hours[0])
  }, [hours]);

  function onScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.ceil(offsetX / hourWidth);
    onHourChange(hours[index]);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
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
  container: {
    height: 80,
    backgroundColor: Colors.white
  },
  emptyHour: {
    width: hourWidth,
    flex: 1
  }
});

export const ScrollHour = React.memo(
  ScrollHourComponent,
  (prev, next) => {
    if (prev.day?.isToday === false && next.day?.isToday === false) {
      return prev.day.dt === next.day.dt;
    } else {
      return prev.day?.isToday === next.day?.isToday;
    }
});
