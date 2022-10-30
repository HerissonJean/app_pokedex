import { SafeAreaView } from 'react-native'
import React, { ReactNode } from 'react'
import { StatusBar } from 'expo-status-bar'

//
interface IScreenComponent {
  children: ReactNode
}

const ScreenComponent = ({ children }: IScreenComponent) => {
  return (
    <SafeAreaView>
      <StatusBar />
      {children}
    </SafeAreaView>
  )
}

export default ScreenComponent
