import { Text } from 'native-base'
import React from 'react'
import {
  ComponentText,
  Container,
  ComponentImage,
  Container1,
  Container2
} from './style'
const ic_pokeball = require('../../assets/ic_pokeball.png')
const ic_return = require('../../assets/ic_return.png')

const HeaderPokedex = () => {
  return (
    <Container>
      <Container1>
        <ComponentImage source={ic_return} />
      </Container1>
      <Container2>
        <ComponentText>Charmander</ComponentText>
      </Container2>
      <Container1>
        <Text>#001</Text>
      </Container1>
    </Container>
  )
}

export default HeaderPokedex
