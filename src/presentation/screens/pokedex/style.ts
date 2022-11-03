import styled from 'styled-components/native'

interface Icolor {
  color: string
}

export const ContainerPokedex = styled.View<Icolor>`
  background-color: ${props => (props.color ? props.color : 'black')};
  width: 100%;
  height: 100%;
`

export const TextProps = styled.Text<Icolor>`
  color: ${props => (props.color ? props.color : 'white')};
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
`
