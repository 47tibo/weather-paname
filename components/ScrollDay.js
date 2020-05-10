import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import * as React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const fullWidth = responsiveWidth(100);
const dayWidth = responsiveWidth(33);

export default function ScrollDay({days, onDayChange}) {
  const onViewRef = React.useRef(info => {
    // 2 or 3 items visible entirely
    const viewableItems = info.viewableItems;
    const length = viewableItems.length;
    onDayChange(viewableItems[length - 2]);
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 100 });
  
  return (
    <View style={{height: 80, width: fullWidth}} >
      <FlatList
        data={days}
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
  return (
    <View style={styles.day}>
      <Title>{value.weekday}</Title>
    </View>
  );
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
