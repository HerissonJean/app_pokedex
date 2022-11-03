import React from 'react'
import {
  ComponentText,
  Container,
  ComponentImage,
  Container1,
  Container2
} from './style'
import ic_return1 from '../../assets/ic_return.png'
import { useNavigation } from '@react-navigation/native'

interface IDetails {
  color: string | undefined
  name: string | undefined
  id: number | undefined
}

const HeaderPokedex = ({ color, name, id }: IDetails) => {
  const navigation = useNavigation()

  function handleLogin() {
    navigation.goBack()
  }

  return (
    <Container color={color}>
      <Container1 onPress={handleLogin}>
        <ComponentImage source={ic_return1} />
      </Container1>
      <Container2>
        <ComponentText>{name && name.toUpperCase()}</ComponentText>
      </Container2>
      <Container2>
        <ComponentText style={{ color: 'white', fontWeight: 'bold' }}>
          {id}
        </ComponentText>
      </Container2>
    </Container>
  )
}

export default HeaderPokedex
