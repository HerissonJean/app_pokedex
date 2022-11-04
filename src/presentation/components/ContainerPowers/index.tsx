import { View, Text } from 'react-native'
import React from 'react'
import { IPokemon } from '../card'
import { ContainerPowers2, TextProps2 } from './style'
import { defineColor } from '../../../utils/defineColors'
import { Progress } from 'native-base'

interface IContainerPowers {
  data: IPokemon | undefined
}

const ContainerPowers = ({ data }: IContainerPowers) => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <ContainerPowers2>
        <TextProps2 color={defineColor(data && data.types[0].type.name)}>
          Base Stats
        </TextProps2>

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
                marginEnd: 4
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
      </ContainerPowers2>
    </View>
  )
}

export default ContainerPowers
