import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("About")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Shop")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductList")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Product List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Api")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go to Api</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Photos")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>PhotoUserScreen</Text>
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

export default HomeScreen;