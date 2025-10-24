import react from "react";
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";

class ApiScreen extends react.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        };
    }

    async componentDidMount() {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const dataJson = await data.json();
        this.setState({ posts: dataJson });
    }

    render() {
        const { posts } = this.state;
        return (
            <View style={styles.container}>
                <Text>Api Screen</Text>
                <FlatList
                    data={posts} // Fixed the data prop to use the correct state variable
                    keyExtractor={item => item.id.toString()} // Fixed the keyExtractor to use 'item' instead of 'post'
                    renderItem={({ item }) => (
                        <View style={styles.postContainer}>
                            <Text>{item.title}</Text>
                            <Text>{item.body}</Text>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    postContainer: {
        marginBottom: 20,
        padding: 10,
        
    }
    });
export default ApiScreen;