import { View, Text, Image } from 'react-native'
import React from 'react'
import HeaderPokedex from '../../components/headerPokedex'
import { useRoute } from '@react-navigation/native'
import { PokedexParams } from '../../../application/navigation/@types/navigation'
import {
  ContainerPokedex,
  TextProps,
  ContainerImage,
  ImagePokemon,
  ContainerDatails,
  ContainerTypes,
  ViewType,
  ContainerAbilities,
  ViewHability,
  TextApresentation
} from './style'
import { defineColor } from '../../../utils/defineColors'

import ContainerPowers from '../../components/containerPowers'

import ContainerSize from '../../components/containerSize'

const Pokedex = () => {
  const route = useRoute()
  const { data } = route.params as PokedexParams

  return (
    <ContainerPokedex color={defineColor(data && data.types[0].type.name)}>
      <HeaderPokedex
        color={defineColor(data && data.types[0].type.name)}
        name={data && data.name}
        id={data && data.id}
      ></HeaderPokedex>
      <ContainerImage>
        <ImagePokemon
          source={{
            uri: data && data.sprites.other['official-artwork'].front_default
          }}
        ></ImagePokemon>
      </ContainerImage>

      <View>
        <ContainerDatails>
          <TextProps color={defineColor(data && data.types[0].type.name)}>
            Types
          </TextProps>
          <View
            style={{
              width: '98%',
              height: '100%',
              borderRadius: 25,
              marginStart: 8,
              marginTop: 8,
              alignSelf: 'center',
              alignItems: 'center'
            }}
          >
            <ContainerTypes>
              <ViewType
                style={{
                  backgroundColor: 'blue'
                }}
              >
                <TextProps>Fire</TextProps>
              </ViewType>

              <ViewType>
                <TextProps>Water</TextProps>
              </ViewType>
            </ContainerTypes>
            <ContainerTypes>
              <TextProps color={defineColor(data && data.types[0].type.name)}>
                Details
              </TextProps>
            </ContainerTypes>
            <ContainerSize data={data}></ContainerSize>

            <TextProps color={defineColor(data && data.types[0].type.name)}>
              Habilities
            </TextProps>
            <ContainerPowers data={data}></ContainerPowers>
          </View>
        </ContainerDatails>
      </View>
    </ContainerPokedex>
  )
}

export default Pokedex
