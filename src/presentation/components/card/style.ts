import styled from 'styled-components/native'

interface IColor {
  color: string
}

export const CardComponent = styled.TouchableOpacity<IColor>`
  background-color: white;
  width: 120px;
  height: 200px;
  border-radius: 8px;
  border: 2px;
  border-color: ${props => (props.color ? props.color : 'black')};
  margin-right: 8px;
  margin-bottom: 8px;
  justify-content: space-evenly;
`

export const TextComponent = styled.Text<IColor>`
  margin-right: 8px;
  text-align: right;
  height: 8%;
`

export const ContainerColor = styled.View<IColor>`
  background-color: ${props => (props.color ? props.color : 'black')};
`

export const TextNameComponent = styled.Text`
  font-weight: bold;
  color: black;
  height: 20px;
  text-align: center;
`

export const ContainerImage = styled.View`
  width: 100%;
  height: 68%;
  justify-content: 'center';
  align-items: 'center';
`
export const ContainerText = styled.View`
  background-color: 'red';
  height: 10%;
`

export const ImageStyled = styled.Image`
  width: 115px;
  height: 130px;
`
