import * as React from 'react';
import {useState, useEffect} from 'react';
import {FlatList, StyleSheet, View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native'
import {
  responsiveWidth,
} from "react-native-responsive-dimensions";
import useAxios from 'axios-hooks'


export const API_KEY = '345e941e9f02f909c7f3a37e078a3904'; // 47tibo-weather

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

const scrolling = (e) => {
  console.log(e.nativeEvent.contentOffset.x);
};

const lat = '44.133160';
const lon = '0.660590';

export default function ScrollHour() {
  const [{ data, loading, error }, getWeather] = useAxios(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  
  return (
    <View style={{height: 80}} >
      <ScrollView
        snapToInterval={responsiveWidth(33)}
        horizontal= {true}
        decelerationRate="fast"
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={getWeather}
      >
      {DATA.map(item => Item(item))}
    </ScrollView>
    <Title>{JSON.stringify(data)}</Title>
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
