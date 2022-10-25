import React from 'react'
import {
  ComponentText,
  Container,
  ComponentImage,
  Container1,
  Container2
} from './style'
const ic_pokeball = require('../../assets/ic_pokeball.png')
const ic_sort = require('../../assets/ic_sort.png')

const Header = () => {
  return (
    <Container>
      <Container1>
        <ComponentImage source={ic_pokeball} />
      </Container1>
      <Container2>
        <ComponentText>Pokédex</ComponentText>
      </Container2>
      <Container1>
        <ComponentImage source={ic_sort} />
      </Container1>
    </Container>
  )
}

export default Header
