import * as React from 'react';
import {FlatList, StyleSheet, View, Text, ScrollView} from 'react-native';
import styled from 'styled-components'
import {
  responsiveWidth,
} from "react-native-responsive-dimensions";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '0:00',
    key: '22'
  },
  {
    id: '3ac68afc-c605-dsvs-a4f8-fbd91aa97f63',
    title: '1:00',
    key: '242'
  
  },
  {
    id: '58694a0f-3da1-471f-bdvvv96-145571e29d72',
    title: '2:00',
    key: '6464'
  },
  {
    id: 'scsc-3da1-471f-bd96-145571e29d72',
    title: '3:00',
    key: '874'
  },
  {
    id: '58694a0f-csc-471f-bd96-145571e29d72',
    title: '4:00',
    key: '34'
  },
  {
    id: 'kncsq-3da1-471f-bd96-145571e29d72',
    title: '5:00',
    key: '455R'
  },
];

const viewabilityConfig = {
  itemVisiblePercentThreshold: 100
}

export default function ScrollHour() {
  return (
    <View style={{height: 80}} >
      <ScrollView
        snapToInterval={190}
        horizontal= {true}
        decelerationRate="fast"
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
      {DATA.map(item => Item(item))}
    </ScrollView>
    </View>
  );
}

function Item({ title, id }) {
  return (
    <View style={styles.item} key={id}>
      <Title>{title}</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#7183ff',
    width: responsiveWidth(33),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const Title = styled.Text`
  font-size: 20;
`;
