import {StyleSheet, View, FlatList, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import * as React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Lundi 4',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd391aa97f63',
    title: 'Mardi 5',
  },
  {
    id: '58694a0f-3da1dsds-471f-bd96-145571e29d72',
    title: 'Mercredi 6',
  },
  {
    id: '58694a0f-3da1-471f-ds-145571e29d72',
    title: 'JEdui 7',
  },
  {
    id: '58694a0f-dsds-471f-bd96-145571e29d72',
    title: 'vendredi 8',
  },
  {
    id: '58694a0f-3da1-471f-dsss-145571e29d72',
    title: 'samedi 9',
  },
  {
    id: '58694a0f-qds-471f-bd96-145571e29d72',
    title: 'dimanche 10',
  },
  {
    id: 'fsd-3da1-471f-bd96-145571e29d72',
    title: 'lundi 11',
  },
  {
    id: 'sfdf-3da1-471f-bd96-145571e29d72',
    title: 'Mardi 12',
  },
  {
    id: '58694a0f-3da1-471f-bd96-fsdfs977676',
    title: 'mercredi 13',
  },
  {
    id: '58694a0f-3da1-471f-TY8H8PHH8-145571e29d72',
    title: 'jeudi 14',
  }
];

const fullWidth = responsiveWidth(100);
const dayWidth = responsiveWidth(25);

export default function ScrollDay() {
  return (
    <View style={{height: 80, width: fullWidth}} >
      <FlatList
        data={DATA}
        renderItem={({item}) => <Day value={item.title} />}
        keyExtractor={item => item.id}
        horizontal= {true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

function Day({value}) {
  return (
    <View style={styles.day}>
      <Title>{value}</Title>
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
