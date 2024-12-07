import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; 

// Create Stack Navigator
const Stack = createNativeStackNavigator();

// Komponen Home Screen
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('List')}
      >
        <Ionicons name="list" size={30} color="#234873" /> {/* Use a valid icon name */}
        <Text style={styles.buttonText}>Go to List</Text>
      </TouchableOpacity>
    </View>
  );
};

// Komponen List Screen
const ListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

// Komponen Utama
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="List" component={ListScreen} options={{ title: 'List' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  buttonText: { 
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10, 
  },
});