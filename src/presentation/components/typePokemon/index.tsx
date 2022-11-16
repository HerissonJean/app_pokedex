import React from 'react'
import { ContainerTypes, TextProps, ViewType } from './styles'
import { defineColor } from '../../../utils/defineColors'

interface ITypePokemonProps {
  type: { name: string }
}

const TypePokemon = ({ type }: ITypePokemonProps) => {
  return (
    <ContainerTypes>
      <ViewType color={defineColor(type.name)}>
        <TextProps>{type.name}</TextProps>
      </ViewType>
    </ContainerTypes>
  )
}

export default TypePokemon
