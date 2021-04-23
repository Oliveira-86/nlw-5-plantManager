import React from 'react';
import { UserIdentification } from './src/pages/UserIdentification';
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost'


export default function App() {
  const [fontLoading] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontLoading) {
    <AppLoading />
  }

  return (
   <UserIdentification />
  );
}


