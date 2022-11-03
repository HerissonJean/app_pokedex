import { Text } from 'native-base'
import React from 'react'
import {
  ComponentText,
  Container,
  ComponentImage,
  Container1,
  Container2
} from './style'
import ic_pokeball1 from '../../assets/ic_pokeball.png'
import ic_return1 from '../../assets/ic_return.png'
import { useNavigation } from '@react-navigation/native'

const HeaderPokedex = () => {
  const navigation = useNavigation()

  function handleLogin() {
    navigation.goBack()
  }

  return (
    <Container>
      <Container1 onPress={handleLogin}>
        <ComponentImage source={ic_return1} />
      </Container1>
      <Container2>
        <ComponentText>Charmander</ComponentText>
      </Container2>
      <Container1>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>#001</Text>
      </Container1>
    </Container>
  )
}

export default HeaderPokedex
