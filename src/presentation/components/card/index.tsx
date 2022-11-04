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
import { PokedexParams } from '../../../application/navigation/@types/navigation'

interface ICardProps {
  data: {
    name: string
  }
}
export interface IPokemon {
  id: number  
  abilities: [{ ability: { name: string; url: string } }]
  base_experience: string
  forms:[name:string, url: string]
  height:number
  moves: [{move:{name:string}}]
  name: string
  sprites: { front_default: string , other: {home:{front_default:string},dream_world:{front_default:string}, 'official-artwork':{front_default:string} } }
  types: [{ type: { name: string } }]
  stats: [
    { base_stat: number; effort: number; stat: { name: string; url: string } }
  ]
  weight: number
}

const Card = ({ data }: ICardProps) => {
  const navigation = useNavigation()

  const [pokemon, setPokemon] = useState<IPokemon>()
  const pokemonData: PokedexParams = { data: pokemon }

  function handleLogin({ data }: PokedexParams) {
    navigation.navigate('pokedex', { data })
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${data.name}`)
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [data])

  return (
    <CardComponent
      onPress={() => handleLogin(pokemonData)}
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
