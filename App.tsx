
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddScreen } from './src/screens/AddScreen'
import { TotalScreen } from './src/screens/TotalScreen';;
import { Player } from './src/types/Player';
import { RootTabParamList } from './src/types/RootTabParamList';
import { AuthProvider, useAuth } from './src/api/AuthContext';
import { LoginScreen } from './src/screens/LoginScreen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';




const Tab = createBottomTabNavigator<RootTabParamList, "navigatorID">();

const players = [
  new Player("Player 1", 0),
  new Player("Player 2", 0),
  new Player("Player 3", 0),
];

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive.file'],
  webClientId: "51631271989-jfp24tmq4jn4t3lepv19hhh0ddhkiuln.apps.googleusercontent.com"
})


const MainApp = () => {
  const { auth } = useAuth();

  return (
    <NavigationContainer>
      <Tab.Navigator id="navigatorID">
        <Tab.Screen 
          name="Add" 
          component={AddScreen}
          initialParams={{
            players: players
          }}
        />
        <Tab.Screen 
          name="Total" 
          component={TotalScreen}
          initialParams={{
            players: players
          }}
          />
          <Tab.Screen 
          name="Account" 
          component={LoginScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
