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
            <ContainerAbilities>
              <ViewHability>
                <Image
                  source={ic_weight}
                  style={{ width: 20, height: 20 }}
                ></Image>
              </ViewHability>
              <ViewHability>
                <Image source={ic_height}></Image>
              </ViewHability>
              <ViewHability>
                <Text>a</Text>
              </ViewHability>
            </ContainerAbilities>
            {/*  */}
            <ContainerTypes>
              <TextApresentation>
                When it retracts its long neck into its shell, it squirts out
                water with vigorous force.
              </TextApresentation>
            </ContainerTypes>

            {/*  base stats */}
            <View
              style={{
                width: '98%',
                height: '40%',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 4,
                marginStart: 4
              }}
            >
              <TextProps color={defineColor(data && data.types[0].type.name)}>
                Base Stats
              </TextProps>

              {/* aqui */}
              <View
                style={{
                  flexDirection: 'column',
                  flex: 1,
                  width: '98%'
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    width: '98%'
                  }}
                >
                  <Text style={{ color: 'black', alignSelf: 'center' }}>
                    {data && data.stats[0].stat.name.toUpperCase()}{' '}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      alignSelf: 'center',
                      marginEnd: 4,
                      color: 'fff'
                    }}
                  >
                    {data && data.stats[0].base_stat}
                  </Text>
                  <Progress
                    style={{ width: '50%', alignSelf: 'center' }}
                    color="#fff"
                    value={data && data.stats[0].base_stat}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    width: '98%'
                  }}
                >
                  <Text style={{ color: 'black', alignSelf: 'center' }}>
                    {data && data.stats[1].stat.name.toUpperCase()}{' '}
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'center',
                      marginEnd: 4,
                      color: 'fff'
                    }}
                  >
                    {data && data.stats[1].base_stat}
                  </Text>
                  <Progress
                    style={{ width: '50%', alignSelf: 'center' }}
                    color="#fff"
                    value={data && data.stats[1].base_stat}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    width: '98%'
                  }}
                >
                  <Text style={{ color: 'black', alignSelf: 'center' }}>
                    {data && data.stats[2].stat.name.toUpperCase()}{' '}
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'center',
                      marginEnd: 4,
                      color: 'fff'
                    }}
                  >
                    {data && data.stats[2].base_stat}
                  </Text>
                  <Progress
                    style={{ width: '50%', alignSelf: 'center' }}
                    color="#fff"
                    value={data && data.stats[2].base_stat}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    width: '98%'
                  }}
                >
                  <Text style={{ color: 'black', alignSelf: 'center' }}>
                    {data && data.stats[3].stat.name.toUpperCase()}{' '}
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'center',
                      marginEnd: 4,
                      color: 'fff'
                    }}
                  >
                    {data && data.stats[3].base_stat}
                  </Text>
                  <Progress
                    style={{ width: '50%', alignSelf: 'center' }}
                    color="#fff"
                    value={data && data.stats[3].base_stat}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    width: '98%'
                  }}
                >
                  <Text style={{ color: 'black', alignSelf: 'center' }}>
                    {data && data.stats[4].stat.name.toUpperCase()}{' '}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      alignSelf: 'center',
                      marginEnd: 4
                    }}
                  >
                    {data && data.stats[4].base_stat}
                  </Text>
                  <Progress
                    style={{ width: '50%', alignSelf: 'center' }}
                    color="#fff"
                    value={data && data.stats[4].base_stat}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    width: '98%'
                  }}
                >
                  <Text style={{ color: 'black', alignSelf: 'center' }}>
                    {data && data.stats[5].stat.name.toUpperCase()}{' '}
                  </Text>
                  <Text
                    style={{
                      alignSelf: 'center',
                      marginEnd: 4,
                      color: 'black'
                    }}
                  >
                    {data && data.stats[5].base_stat}
                  </Text>
                  <Progress
                    style={{ width: '60%', alignSelf: 'center' }}
                    color="#fff"
                    value={data && data.stats[5].base_stat}
                  />
                </View>
              </View>
            </View>
          </View>
        </ContainerDatails>
      </View>
    </ContainerPokedex>
  )
}

export default Pokedex
