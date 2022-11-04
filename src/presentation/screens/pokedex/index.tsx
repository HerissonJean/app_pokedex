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

import ContainerPowers from '../../components/ContainerPowers'

import ContainerSize from '../../components/containerSize'
import ic_weight from '../../assets/ic_weight.png'
import ic_height from '../../assets/ic_height.png'
import { Progress } from 'native-base'

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
          <View
            style={{
              width: '98%',
              height: '100%',
              borderRadius: 25,
              margin: 4
              // container estranho
            }}
          >
            {/*  Types */}

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

            {/*  About */}

            <ContainerTypes>
              <TextProps color={defineColor(data && data.types[0].type.name)}>
                About
              </TextProps>
            </ContainerTypes>
            {/*  describe image */}
            <ContainerSize data={data}></ContainerSize>
            {/*  */}
            <ContainerTypes>
              <TextApresentation>
                When it retracts its long neck into its shell, it squirts out
                water with vigorous force.
              </TextApresentation>
            </ContainerTypes>

            {/*  base stats */}
            <ContainerPowers data={data}></ContainerPowers>
          </View>
        </ContainerDatails>
      </View>
    </ContainerPokedex>
  )
}

export default Pokedex
