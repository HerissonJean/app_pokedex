import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { CardComponent, TextComponent, TextNameComponent } from './style'
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
      <View>
        <Image
          style={{
            width: 115,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center'
          }}
          source={{
            uri: pokemon && pokemon.sprites.front_default
          }}
        />
      </View>

      <View
        style={{
          backgroundColor: 'red',
          height: 26,
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 5,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TextNameComponent>{pokemon && pokemon.name}</TextNameComponent>
      </View>
    </CardComponent>
  )
}

export default Card
