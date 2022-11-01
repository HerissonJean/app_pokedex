import styled from 'styled-components/native'

interface IText {
  marginleft: string
}
export interface ICompImage {
  marginStart: string
  marginEnd: string
}

export const ComponentText = styled.Text`
  font-size: 30px;
  color: black;
  margin-left: 10px;
  font-weight: bold;
`

export const ComponentImage = styled.Image`
  width: 16px;
  height: 16px;
`

export const Container = styled.View`
  flex-direction: row;
  margin-top: 36px;
  padding-left: 16px;
  padding-right: 16px;
`

export const Container1 = styled.TouchableOpacity`
  width: 10%;
  justify-content: center;
`

export const Container2 = styled.View`
  flex-direction: row;
  width: 80%;
`
