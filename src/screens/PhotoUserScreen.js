import React from "react";
import { Text, View, FlatList, Image, StyleSheet } from "react-native";

class PhotoUserScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      users: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      // Fetch both photos and users at the same time
      const [photoRes, userRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/photos"),
        fetch("https://jsonplaceholder.typicode.com/users"),
      ]);

      const photos = await photoRes.json();
      const users = await userRes.json();

      // Combine them — assign users to photos based on index
      const combined = photos.map((photo, index) => {
        const user = users[index % users.length]; // cycles through all users
        return {
          ...photo,
          user: user.name,
          username: user.username,
          // use working image links instead of broken placeholder URLs
          url: `https://picsum.photos/300?random=${photo.id}`,
          thumbnailUrl: `https://picsum.photos/100?random=${photo.id}`,
        };
      });

      this.setState({ photos: combined, users, loading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    const { photos, loading } = this.state;

    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.header}>📸 Photo & User Feed</Text>

        <FlatList
          data={photos.slice(0, 30)} // show first 30 for performance
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.url }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.username}>By {item.user}</Text>
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
    backgroundColor: "#f7f7f7",
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: "200px",
    height: 200,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  username: {
    fontSize: 14,
    color: "#666",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
  },
});

export default PhotoUserScreen;
