import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import Input from '../../components/search'

import { StatusBar } from 'expo-status-bar'
import ScreenComponent from '../../components/ScreenComponent'

const Home = () => {
  return (
    <ScreenComponent>
      <Header />
      <Input />
    </ScreenComponent>
  )
}

export default Home
