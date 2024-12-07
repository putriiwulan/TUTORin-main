import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

// Import the necessary components
import Logopertama from './app/Logopertama';
import Logokedua from './app/Logokedua';
import Logoketiga from './app/Logoketiga';
import LoginScreen from './app/login';
import GenderSelectionScreen from './app/gender'; // Ensure you import GenderSelectionScreen
import HomeScreen from './app/home';
import FiturkursusScreen from './app/Fiturkursus'; // Corrected import path
import BioScreen from './app/bio';
import scienceScreen from './app/science';
import Profilmentor from './app/Profilmentor';
import ProfilH from './app/ProfileH';
import payScreen from './app/pay';
import list from './app/list';
import MyCourses from './app/mycourses';
import LangScreen from './app/bahasa';
import ArtsScreen from './app/Arts';
import fisikaScreen from './app/fisika';
import Profilmentor1 from './app/Profilmentor1';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Logopertama"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: ({ current, next, layouts }) => {
            const progress = current.progress;
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      >
        <Stack.Screen name="Logopertama" component={Logopertama} />
        <Stack.Screen name="Logokedua" component={Logokedua} />
        <Stack.Screen name="Logoketiga" component={Logoketiga} />
        <Stack.Screen name="gender" component={GenderSelectionScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="Fiturkursus" component={FiturkursusScreen} />
        <Stack.Screen name="science" component={scienceScreen} />
        <Stack.Screen name='bio' component={BioScreen} />
        <Stack.Screen name='Profilmentor' component={Profilmentor} />
        <Stack.Screen name= 'ProfileH'component={ProfilH} />
        <Stack.Screen name='pay' component={payScreen} />
        <Stack.Screen name='list' component={list} />
        <Stack.Screen name='bahasa' component={LangScreen}/>
        <Stack.Screen name='Arts' component={ArtsScreen} />
        <Stack.Screen name='fisika' component={fisikaScreen} />
        <Stack.Screen name='Profilmentor1' component={Profilmentor1} />
        {/* <Stack.Screen name='mycourses' component={MyCourses} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}