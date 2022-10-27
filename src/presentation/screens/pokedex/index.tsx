import { View, Text } from 'react-native'
import React from 'react'
import Container from '../../components/ScreenComponent'

import {
  background,
  color
} from 'native-base/lib/typescript/theme/styled-system'

const Pokedex = () => {
  return (
    <Container>
      <Text style={{ width: 10, height: 10, color: 'white' }}>Pokedex</Text>
    </Container>
  )
}

export default Pokedex
