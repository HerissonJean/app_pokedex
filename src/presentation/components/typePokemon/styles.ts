import styled from 'styled-components/native'

interface Icolor {
  color: string
}

interface IType {
  color?: string | undefined
}

export const TextProps = styled.Text<Icolor>`
  color: ${props => (props.color ? props.color : 'white')};
  align-items: center;
  justify-content: center;
  font-weight: bold;
  align-self: center;
  font-size: 16px;
`

export const ContainerTypes = styled.View`
  width: 50%;
  height: 30%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ViewType = styled.View<IType>`
  height: 100%;
  background-color: ${props => (props.color ? props.color : 'red')};
  margin: 4px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`
