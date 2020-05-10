import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import * as React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const dayWidth = responsiveWidth(33);

export default function ScrollDay({days, onDayChange}) {
  const onViewRef = React.useRef(info => {
    // 2 or 3 items visible entirely
    const viewableItems = info.viewableItems;
    const length = viewableItems.length;
    onDayChange(viewableItems[length - 2]);
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 100 });
  const paddedDays = [{key: 'first_empty'}].concat(days).concat([{key: 'last_empty'}]);
  
  return (
    <View style={{height: 80}} >
      <FlatList
        data={paddedDays}
        renderItem={({item}) => <Day value={item} />}
        keyExtractor={day => day.key}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        bounces={false}
        scrollEventThrottle={16}
      />
    </View>
  );
}

function Day({value}) {
  if(value.weekday) {
    return (
      <View style={styles.day}>
        <Title>{value.weekday}</Title>
        <Title>{value.day}</Title>
        <Title>{value.month}</Title>
      </View>
    );
  } else {
    return (
      <View style={styles.day}/>
    );
  }
}

const styles = StyleSheet.create({
  day: {
    backgroundColor: '#ff51db',
    width: dayWidth,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const Title = styled.Text`
  font-size: 20;
`;
