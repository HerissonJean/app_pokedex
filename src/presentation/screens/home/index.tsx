import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/header'
import Input from '../../components/search'
import Card from '../../components/Card'

import { StatusBar } from 'expo-status-bar'
import ScreenComponent from '../../components/ScreenComponent'
import { FlatList } from './style'

const Home = () => {
  const data = [
    {
      id: 1,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/113.png'
    },
    {
      id: 2,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/114.png'
    },
    {
      id: 3,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/115.png'
    },
    {
      id: 4,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/116.png'
    },
    {
      id: 5,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/117.png'
    },
    {
      id: 6,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/118.png'
    },
    {
      id: 7,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/119.png'
    },
    {
      id: 8,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/120.png'
    },
    {
      id: 9,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/113.png'
    },
    {
      id: 10,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/114.png'
    },
    {
      id: 11,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/115.png'
    },
    {
      id: 12,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/116.png'
    },
    {
      id: 13,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/117.png'
    },
    {
      id: 14,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/118.png'
    },
    {
      id: 15,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/119.png'
    },
    {
      id: 16,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/120.png'
    }
  ]
  const renderItem = (item: { id: number; url: string }) => (
    <Card url={item.url} />
  )
  return (
    <ScreenComponent>
      <Header />
      <Input />

      <FlatList
        style={{
          flexDirection: 'column'
        }}
        numColumns={3}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'center',
          paddingLeft: 10
        }}
        data={data}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item: any) => item.id}
      />
    </ScreenComponent>
  )
}

export default Home
