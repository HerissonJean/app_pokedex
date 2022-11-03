import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
  CardComponent,
  ContainerColor,
  ContainerText,
  TextComponent,
  TextNameComponent
} from './style'
import { View } from 'native-base'
import React, { useEffect, useState } from 'react'
import { defineColor } from '../../../utils/defineColors'

interface ICardProps {
  data: {
    name: string
  }
}
interface IPokemon {
  id: number
  name: string
  sprites: { front_default: string }
  types: [{ type: { name: string } }]
}

const Card = ({ data }: ICardProps) => {
  const navigation = useNavigation()

  const [pokemon, setPokemon] = useState<IPokemon>()

  function handleLogin() {
    navigation.navigate('pokedex', {})
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${data.name}`)
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [data])

  return (
    <CardComponent
      onPress={handleLogin}
      color={defineColor(pokemon && pokemon.types[0].type.name)}
    >
      <TextComponent>{pokemon && pokemon.id}</TextComponent>
      <ContainerColor
        color={defineColor(pokemon && pokemon.types[0].type.name)}
      >
        <Image
          style={{
            width: 115,
            height: 130
          }}
          source={{
            uri: pokemon && pokemon.sprites.front_default
          }}
        />
      </ContainerColor>

      <ContainerText>
        <TextNameComponent>
          {pokemon && pokemon.name.toUpperCase()}
        </TextNameComponent>
      </ContainerText>
    </CardComponent>
  )
}

export default Card
