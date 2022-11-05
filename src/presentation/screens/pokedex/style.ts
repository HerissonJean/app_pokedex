import styled from 'styled-components/native'

interface Icolor {
  color: string
}

interface IType {
  color?: string | undefined
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
  align-self: center;
  font-size: 16px;
`

export const ContainerImage = styled.View`
  width: 100%;
  height: 45%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

export const ImagePokemon = styled.Image`
  width: 100%;
  height: 100%;
`
export const ContainerDatails = styled.View`
  width: 98%;
  height: 65%;
  background-color: white;
  border-radius: 30px;
  margin: 4px;
`

export const ContainerTypes = styled.View`
  width: 98%;
  height: 10%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const ViewType = styled.View<IType>`
  width: 15%;
  height: 100%;
  background-color: ${props => (props.color ? props.color : 'red')};
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`
export const ContainerAbilities = styled.View`
  width: 98%;
  height: 25%;
  justify-content: space-evenly;
  flex-direction: row;
`
export const ViewHability = styled.View`
  width: 20%;
  height: 80%;
  background-color: yellow;
  border-radius: 25px;
  margin: 8px;
  align-self: center;
  padding: 8px;
`

export const TextApresentation = styled.Text`
  color: black;
`
export const ContainerPowers = styled.View`
  width: 98%;
  height: 40%;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  margin-right: 4px;
`
