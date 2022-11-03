import {
  View,
  Text,
  Image,
  ProgressBarAndroidComponent,
  ProgressBarAndroid
} from 'react-native'
import React from 'react'
import HeaderPokedex from '../../components/headerPokedex'
import { useRoute } from '@react-navigation/native'
import { PokedexParams } from '../../../application/navigation/@types/navigation'
import { ContainerPokedex, TextProps } from './style'
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
      <View
        style={{
          width: '100%',
          height: '45%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <Image
          style={{ width: '100%', height: '100%' }}
          source={{
            uri: data && data.sprites.other['official-artwork'].front_default
          }}
        ></Image>
      </View>

      <View>
        <View
          style={{
            width: '98%',
            height: '65%',
            backgroundColor: 'white',
            borderRadius: 25,
            margin: 4
          }}
        >
          <View
            style={{
              width: '98%',
              height: '100%',
              borderRadius: 25,
              margin: 4
            }}
          >
            {/*  Types */}

            <View
              style={{
                width: '98%',
                height: '10%',
                borderRadius: 25,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  width: '15%',
                  height: '100%',
                  backgroundColor: 'blue',
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <TextProps>Fire</TextProps>
              </View>

              <View
                style={{
                  width: '15%',
                  height: '100%',
                  backgroundColor: 'grey',
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <TextProps>Water</TextProps>
              </View>
            </View>

            {/*  About */}

            <View
              style={{
                width: '98%',
                height: '8%',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 4
              }}
            >
              <TextProps color={defineColor(data && data.types[0].type.name)}>
                About
              </TextProps>
            </View>
            {/*  describe image */}
            <View
              style={{
                width: '98%',
                height: '25%',
                borderRadius: 25,
                justifyContent: 'space-evenly',
                flexDirection: 'row'
              }}
            >
              <View
                style={{
                  width: '20%',
                  height: '80%',
                  backgroundColor: 'yellow',
                  borderRadius: 25,
                  margin: 8,
                  alignSelf: 'center',
                  padding: 8
                }}
              >
                <Image source={ic_weight}></Image>
              </View>
              <View //
                style={{
                  width: '20%',
                  height: '80%',
                  backgroundColor: 'yellow',
                  borderRadius: 25,
                  alignSelf: 'center',
                  padding: 8,

                  margin: 4
                }}
              >
                <Image source={ic_height}></Image>
              </View>
              <View
                style={{
                  width: '20%',
                  height: '80%',
                  backgroundColor: 'yellow',
                  borderRadius: 25,
                  margin: 4,
                  alignSelf: 'center',
                  padding: 6
                }}
              >
                <Text>a</Text>
              </View>
            </View>
            {/*  */}
            <View
              style={{
                width: '98%',
                height: '12%',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: 'black' }}>
                When it retracts its long neck into its shell, it squirts out
                water with vigorous force.
              </Text>
            </View>

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
        </View>
      </View>
    </ContainerPokedex>
  )
}

export default Pokedex
