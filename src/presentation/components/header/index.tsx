import React from 'react'
import {
  ComponentText,
  Container,
  ComponentImage,
  Container1,
  Container2
} from './style'

import ic_pokeball1 from '../../assets/ic_pokeball.png'
import ic_sort1 from '../../assets/ic_sort.png'

const Header = () => {
  return (
    <Container>
      <Container1>
        <ComponentImage source={ic_pokeball1} />
      </Container1>
      <Container2>
        <ComponentText>Pokédex</ComponentText>
      </Container2>
      <Container1>
        <ComponentImage source={ic_sort1} />
      </Container1>
    </Container>
  )
}

export default Header
