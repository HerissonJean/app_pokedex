import styled from 'styled-components/native'

interface IText {
  color: string
}
export interface ICompImage {
  marginStart: string
  marginEnd: string
}

export const ComponentText = styled.Text<IText>`
  font-size: 25px;
  color: ${props => (props.color ? props.color : 'black')};
  margin-left: 4px;
  margin-right: 20px;
  font-weight: bold;
  border-radius: 5px;
  padding: 2px;
  align-self: center;
  background-color: white;
`

export const ComponentText2 = styled.Text<IText>`
  font-size: 25px;
  color: white;
  margin-left: 4px;
  margin-right: 20px;
  font-weight: bold;
  border-radius: 5px;
  padding: 2px;
  align-self: center;
`

export const ComponentImage = styled.Image`
  width: 24px;
  height: 24px;
`

export const Container = styled.View<IText>`
  flex-direction: row;
  width: 100%;
  height: 4%;
  background-color: ${props => (props.color ? props.color : 'black')};
  margin-top: 42px;
  padding-left: 16px;
  padding-right: 16px;
`

export const Container1 = styled.TouchableOpacity`
  width: 10%;
  justify-content: center;
`

export const Container2 = styled.View<IText>`
  flex-direction: row;
  align-items: center;
  width: 70%;
  border-radius:5px;
  /* background-color: ${props => (props.color ? props.color : 'black')}; */
`

export const Container3 = styled.View`
  flex-direction: row;
  width: 15%;
  flex: 1;
  align-items: baseline;
`
