import react from "react";
import { Text, View,ScrollView, StyleSheet, FlatList, Image } from "react-native";
import data from '../data/countries.json';


class CountriesScreen extends react.Component {

    constructor() {
        super();
        this.state = {
            countries: [],
        };
    }

    componentDidMount() {
        this.setState({ countries: data });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Countries List</Text>
                <FlatList
                    data={this.state.countries}
                    keyExtractor={country => country.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.countryContainer}>
                            <Image
                                source={{ uri: item.flag }}
                                style={{ width: 50, height: 30, marginRight: 10 }}
                            />
                            <View>
                                <Text style={{ fontSize: 18 }}>{item.name}</Text>
                                <Text style={{ color: 'gray' }}>Capital: {item.capital}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    countryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
    },

});

export default CountriesScreen;