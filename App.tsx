import React from 'react'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import Routes from './src/routes'
import { useFonts } from 'expo-font'
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito'

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  })

  if (!fontsLoaded) {
    return null
  }
  return <Routes />
}