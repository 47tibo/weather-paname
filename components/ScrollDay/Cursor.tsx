import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export const Cursor: React.FC = () => {
  return (
    <View
      style={styles.container}
      pointerEvents={'none'}
    >
      <MaterialCommunityIcons name="triangle" size={15} color={Colors.red} style={styles.triangle}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  triangle: {
    marginBottom: -3
  }
});
