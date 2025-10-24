import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";

const FlexScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.Item1}>1</View>
        <View style={styles.Item2}>2</View>
        <View style={styles.Item3}>3</View>
        <View style={styles.Item4}>4</View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    //  flexDirection: row | row-reverse | column | column-reverse;

  },
});

export default FlexScreen;
