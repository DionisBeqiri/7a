import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const ShopScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Shop Screen</Text>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    marginBottom: 20
  },
   button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: 150,
    height: 50,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18
  }
});

export default ShopScreen;