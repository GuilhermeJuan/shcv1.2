import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor='#FF6EC7' barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  )
}

//Todas as blibliotecas usadas:
// npm install
// npm install -g expo-cli
// npm install @react-navigation/native
// npm install react-native-web react-dom @expo/webpack-config
// npm install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack
// npm install react-native-animatable
// npm install react-native-calendars
// npm install @react-navigation/bottom-tabs
// npx expo install @expo/vector-icons
// npm install react-native-modal
// npx expo install expo-linear-gradient
// npx expo install react-native-linear-gradient
// npm install react-native-modal-datetime-picker
// npm install react-native-image-picker
// npm install react-native-lottie



//ATUILIZAR PROJETO NO GIT:
// git config --global user.email "guilhermelima156@outlook.com" (em uma maquina diferente)
// git config --global user.name "GuilhermeJuan" (em uma maquina diferente)
// git init (em uma maquina diferente)
// git add .
// git commit -a -m "..."
// git push origin master 
// a

