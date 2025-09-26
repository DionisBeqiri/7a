import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";

const ProductComp = ({props}) => {
    return (
        <View style={styles.product}>
            <Image 
            //source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png' }}
            source={props.image}
            style={styles.productImage}
            />
            <Text style={styles.productName}>{props.productName}</Text>
            <Text style={styles.productPrice}>${props.productPrice}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
product: {
    alignItems: 'center',
    margin: 10,
  },
productImage: {
    width: 100,
    height: 100,
  },
productName: {
    fontSize: 16,
    marginTop: 5,
  },
productPrice: {
    fontSize: 14,
    color: 'gray',
  }
});

export default ProductComp;