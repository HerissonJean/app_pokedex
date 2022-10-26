import { View, Text, Image } from 'react-native'
import React from 'react'
import { CardComponent, TextCaomponent, TextNameCaomponent } from './style'
import { Center } from 'native-base'

interface ICardProps {
  url: string
}

const Card = ({ url }: ICardProps) => {
  const img_pokemon = require('../../assets/ic_pokemon.png')
  return (
    <CardComponent>
      <TextCaomponent>#001</TextCaomponent>
      <Image
        style={{
          width: 90,
          height: 90,
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
