import styled from 'styled-components/native'

interface Icolor {
  color: string
}

export const ContainerPokedex = styled.View<Icolor>`
  background-color: ${props => (props.color ? props.color : 'black')};
  width: 100%;
  height: 100%;
`
