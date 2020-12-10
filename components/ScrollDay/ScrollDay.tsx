import { FlatList, StyleSheet, View } from 'react-native';
import * as React from 'react';
import { ScrollDayProps, SelectedDay, ViewableItemsChangedInfo } from './ScrollDay.models';
import { DayWeather } from '../../api/weather/weather.models';
import { Day } from './Day';
import Colors from '../../constants/Colors';
import {Cursor} from './Cursor';

function emptyDayWeather1(): DayWeather {
  return {
    dt: 47,
    day: '',
    month: '',
    weekday: '',
  };
}

function emptyDayWeather2(): DayWeather {
  return {
    dt: 1515,
    day: '',
    month: '',
    weekday: '',
  };
}

export const ScrollDay: React.FC<ScrollDayProps> = ({days, onDayChange}) => {
  const onViewRef = React.useRef((info: ViewableItemsChangedInfo) => {
    // 2 or 3 items visible entirely
    const viewableItems = info.viewableItems;
    const length = viewableItems.length;
    const itemCenter = viewableItems[length - 2];
    if (itemCenter) {
      const day: SelectedDay = {
        dt: itemCenter.item.dt,
        isToday: itemCenter.index === 1
      };
      onDayChange(day);
    }
  });
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 100});
  const paddedDays = [emptyDayWeather1()].concat(days).concat([emptyDayWeather2()]);

  return (
    <View style={styles.container}>
      <FlatList
        data={paddedDays}
        renderItem={({item}) => <Day value={item}/>}
        keyExtractor={day => day.dt.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        bounces={false}
        scrollEventThrottle={16}
      />
      <Cursor/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    height: 145,
    backgroundColor: Colors.white
  }
});
