import styled from 'styled-components/native'

interface Icolor {
  color: string
}

interface IType {
  color?: string | undefined
}

export const ContainerTypes = styled.View`
  width: 50%;
  height: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`

export const ViewType = styled.View<Icolor>`
  height: 100%;
  background-color: ${props => (props.color ? props.color : 'green')};

  border-radius: 25px;
  justify-content: center;
`
export const TextProps = styled.Text<Icolor>`
  color: ${props => (props.color ? props.color : 'white')};
  font-weight: bold;
  margin: 4px;
  font-size: 16px;
`
