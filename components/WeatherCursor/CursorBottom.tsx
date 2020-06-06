import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export const CursorBottom: React.FC = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="triangle" size={15} color={Colors.red} style={styles.triangle}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  triangle: {
    marginBottom: -3
  }
});
