import { View, Text } from 'react-native'
import React from 'react'
import { ContainerTypes, TextProps, ViewType } from './styles'

interface ITypePokemonProps {
  type: { name: string }
}

const TypePokemon = ({ type }: ITypePokemonProps) => {
  console.log(type)
  return (
    <ContainerTypes>
      <ViewType
        style={{
          backgroundColor: 'blue'
        }}
      >
        <TextProps>{type.name}</TextProps>
      </ViewType>
    </ContainerTypes>
  )
}

export default TypePokemon
