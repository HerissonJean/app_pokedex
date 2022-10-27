import { View, Text, Image } from 'react-native'
import React from 'react'
// import Header from '../../components/header'
import HeaderPokedex from '../../components/header'

import Input from '../../components/search'
import Card from '../../components/Card'

import { StatusBar } from 'expo-status-bar'
import ScreenComponent from '../../components/ScreenComponent'
import { FlatList } from './style'
import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context'

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
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/121.png'
    },
    {
      id: 10,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/122.png'
    },
    {
      id: 11,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/123.png'
    },
    {
      id: 12,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/124.png'
    },
    {
      id: 13,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/125.png'
    },
    {
      id: 14,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/126.png'
    },
    {
      id: 15,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/127.png'
    },
    {
      id: 16,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/128.png'
    },
    {
      id: 17,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/129.png'
    },
    {
      id: 18,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/130.png'
    },
    {
      id: 19,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/131.png'
    },
    {
      id: 20,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'
    },
    {
      id: 21,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/133.png'
    },
    {
      id: 22,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/134.png'
    },
    {
      id: 23,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/135.png'
    },
    {
      id: 24,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/136.png'
    },
    {
      id: 25,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/137.png'
    },
    {
      id: 26,
      url:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/138.png'
    }
  ]
  const renderItem = (item: { id: number; url: string }) => (
    <Card url={item.url} />
  )

  const ic_charmander = require('../../assets/ic_charmander.png')

  return (
    <ScreenComponent>
      {/*  
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
      /> */}
      {/* AQUI */}
      <View
        style={{ backgroundColor: '#F57D31', width: '100%', height: '100%' }}
      >
        <HeaderPokedex></HeaderPokedex>
        <View
          style={{
            width: '100%',
            backgroundColor: 'green',
            alignItems: 'center'
          }}
        >
          <Image
            source={ic_charmander}
            style={{
              marginTop: 24,
              alignItems: 'center'
            }}
          ></Image>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: 400,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15
            // borderBottomEndRadius: 15
          }}
        >
          <Text>About</Text>
        </View>
      </View>
    </ScreenComponent>
  )
}

export default Home
