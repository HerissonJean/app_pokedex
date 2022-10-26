// import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { Routes } from './src/application/navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NativeBaseProvider } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  )
}
