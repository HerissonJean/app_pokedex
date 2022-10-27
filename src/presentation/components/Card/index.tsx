import { View, Text, Image, ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import React from 'react'
import { CardComponent, TextCaomponent, TextNameCaomponent } from './style'
import { Center } from 'native-base'
import Pokedex from '../../screens/pokedex'

interface ICardProps {
  url: string
}

const Card = ({ url }: ICardProps) => {
  // const img_pokemon = require('../../assets/ic_pokemon.png')

  const navigation = useNavigation()

  function handleLogin() {
    // navigation.navigate()
    ToastAndroid.show('Click! ', ToastAndroid.TOP)
  }

  return (
    <CardComponent onPress={handleLogin}>
      <TextCaomponent>#001</TextCaomponent>
      <Image
        style={{
          width: 100,
          height: 100,
          alignItems: 'center',
          alignContent: 'center',
          alignSelf: 'center'
        }}
        source={{
          uri: url
        }}
      />
      <TextNameCaomponent>Bulbasaur</TextNameCaomponent>
    </CardComponent>
  )
}

export default Card
//'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/113.png'
