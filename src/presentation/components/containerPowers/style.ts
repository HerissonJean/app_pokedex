import styled from 'styled-components/native'

interface Icolor {
  color: string
}

export const TextProps2 = styled.Text<Icolor>`
  color: ${props => (props.color ? props.color : 'white')};
  font-weight: bold;
  font-size: 16px;
  flex-direction: row;
  flex: 1;
`

export const ContainerPowers2 = styled.View`
  width: 98%;
  height: 40%;
  border-radius: 25px;
  justify-content: center;
  margin-top: 4px;
  margin-right: 4px;
`

export const Container = styled.View`
  width: 100%;
  height: 80%;
`
export const ViewColumn = styled.View`
  flex-direction: column;
  flex: 1;
  width: 100%;
`
export const ViewRow = styled.View`
  flex-direction: row;
  flex: 1;
  width: 98%;
`
export const ViewRow2 = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-self: center;
  width: 30%;
`
export const Vieww = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-self: center;
  width: 30%;
`
