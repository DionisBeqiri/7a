const students = [
    {id: 1, name: 'Michael', surname: 'Johnson', age: 20},
    {id: 2, name: 'Sophia', surname: 'Williams', age: 22},
    {id: 3, name: 'Ethan', surname: 'Brown', age: 21},
    {id: 4, name: 'Olivia', surname: 'Davis', age: 23},
    {id: 5, name: 'James', surname: 'Miller', age: 24},
    {id: 6, name: 'Isabella', surname: 'Wilson', age: 22},
    {id: 7, name: 'Liam', surname: 'Moore', age: 19},
    {id: 8, name: 'Mia', surname: 'Taylor', age: 25},
    {id: 9, name: 'Benjamin', surname: 'Anderson', age: 27},
    {id: 10, name: 'Charlotte', surname: 'Thomas', age: 23},
    {id: 11, name: 'Lucas', surname: 'Jackson', age: 26},
    {id: 12, name: 'Amelia', surname: 'White', age: 21},
    {id: 13, name: 'Elijah', surname: 'Harris', age: 22},
    {id: 14, name: 'Avery', surname: 'Martin', age: 28},
    {id: 15, name: 'Jack', surname: 'Clark', age: 29},
    {id: 16, name: 'Zoe', surname: 'Rodriguez', age: 20}
  ];
  
  const ListScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>List Screen</Text>
        <FlatList
          data={students}
          keyExtractor={student => student.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Text>{item.name} {item.surname}, Age: {item.age}</Text>
          )}
        />
      </View>
    );
  };
  