import { View, Text, Image } from 'react-native'
import React from 'react'
import {
  ContainerAbilities,
  TextGrey,
  ViewHability,
  ViewHabilityColumn
} from './style'

import ic_weight from '../../assets/ic_weight.png'
import ic_height from '../../assets/ic_height.png'
import { IPokemon } from '../card'

interface ISize {
  data: IPokemon | undefined
}

const ContainerSize = ({ data }: ISize) => {
  // console.log(data)
  return (
    <View style={{ width: '100%', height: '20%' }}>
      <ContainerAbilities>
        <ViewHabilityColumn>
          <ViewHability>
            <Image source={ic_weight} style={{ width: 20, height: 20 }}></Image>
            <Text> {data && data.weight / 10} kg</Text>
          </ViewHability>
          <TextGrey>Weight</TextGrey>
        </ViewHabilityColumn>

        <ViewHabilityColumn>
          <ViewHability>
            <Image source={ic_height} style={{ width: 15, height: 20 }}></Image>
            <Text> {data && data.height / 10} m</Text>
          </ViewHability>
          <TextGrey>Height</TextGrey>
        </ViewHabilityColumn>

        <ViewHabilityColumn>
          <ViewHability>
            <Text> {data && data.moves[0].move.name}</Text>
          </ViewHability>
          <TextGrey>Moves</TextGrey>
        </ViewHabilityColumn>
      </ContainerAbilities>
    </View>
  )
}

export default ContainerSize
