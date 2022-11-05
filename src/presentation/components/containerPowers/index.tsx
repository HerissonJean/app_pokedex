import { View, Text } from 'react-native'
import React from 'react'
import { IPokemon } from '../card'
import {
  ContainerPowers2,
  TextProps2,
  Container,
  ViewColumn,
  ViewRow,
  ViewRow2
} from './style'
import { defineColor } from '../../../utils/defineColors'
import { defineHabilities } from '../../../utils/defineHabilities'

import { Progress } from 'native-base'

interface IContainerPowers {
  data: IPokemon
}

const ContainerPowers = ({ data }: IContainerPowers) => {
  console.log(defineHabilities(data.stats[1].stat.name))
  return (
    <Container>
      <ContainerPowers2>
        <ViewColumn>
          <ViewRow>
            <View style={{ width: '20%' }}>
              <TextProps2 color={defineColor(data && data.types[0].type.name)}>
                {defineHabilities(data.stats[0].stat.name)}-
                {data && data.stats[0].base_stat}
              </TextProps2>
            </View>

            <ViewRow2>
              <Progress
                style={{ width: '95%', alignSelf: 'flex-end' }}
                value={data && data.stats[0].base_stat}
                colorScheme="gray"
              />
            </ViewRow2>
          </ViewRow>
        </ViewColumn>
        {/* aa */}
        <ViewColumn>
          <ViewRow>
            <View style={{ width: '20%' }}>
              <TextProps2 color={defineColor(data && data.types[0].type.name)}>
                {defineHabilities(data.stats[1].stat.name)}-
                {data && data.stats[1].base_stat}
              </TextProps2>
            </View>

            <ViewRow2>
              <Progress
                style={{ width: '95%', alignSelf: 'flex-end' }}
                value={data && data.stats[1].base_stat}
                colorScheme="gray"
              />
            </ViewRow2>
          </ViewRow>
        </ViewColumn>
        {/* //kkk */}
        <ViewColumn>
          <ViewRow>
            <View style={{ width: '20%' }}>
              <TextProps2 color={defineColor(data && data.types[0].type.name)}>
                {defineHabilities(data.stats[2].stat.name)}-
                {data && data.stats[2].base_stat}
              </TextProps2>
            </View>

            <ViewRow2>
              <Progress
                style={{ width: '95%', alignSelf: 'flex-end' }}
                value={data && data.stats[2].base_stat}
                colorScheme="gray"
              />
            </ViewRow2>
          </ViewRow>
        </ViewColumn>
        {/* //kkk */}
        <ViewColumn>
          <ViewRow>
            <View style={{ width: '20%' }}>
              <TextProps2 color={defineColor(data && data.types[0].type.name)}>
                {defineHabilities(data.stats[3].stat.name)}-
                {data && data.stats[3].base_stat}
              </TextProps2>
            </View>

            <ViewRow2>
              <Progress
                style={{ width: '95%', alignSelf: 'flex-end' }}
                value={data && data.stats[3].base_stat}
                colorScheme="gray"
              />
            </ViewRow2>
          </ViewRow>
        </ViewColumn>
        {/* //kkk */}
        <ViewColumn>
          <ViewRow>
            <View style={{ width: '20%' }}>
              <TextProps2 color={defineColor(data && data.types[0].type.name)}>
                {defineHabilities(data.stats[4].stat.name)}-
                {data && data.stats[4].base_stat}
              </TextProps2>
            </View>

            <ViewRow2>
              <Progress
                style={{ width: '95%', alignSelf: 'flex-end' }}
                value={data && data.stats[4].base_stat}
                colorScheme="gray"
              />
            </ViewRow2>
          </ViewRow>
        </ViewColumn>
        {/* //kkk */}
        <ViewColumn>
          <ViewRow>
            <View style={{ width: '20%' }}>
              <TextProps2 color={defineColor(data && data.types[0].type.name)}>
                {defineHabilities(data.stats[5].stat.name)}-
                {data && data.stats[5].base_stat}
              </TextProps2>
            </View>

            <ViewRow2>
              <Progress
                style={{ width: '95%', alignSelf: 'flex-end' }}
                value={data && data.stats[5].base_stat}
                colorScheme="gray"
              />
            </ViewRow2>
          </ViewRow>
        </ViewColumn>

        {/* //kkk */}
      </ContainerPowers2>
    </Container>
  )
}

export default ContainerPowers
