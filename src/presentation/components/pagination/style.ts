import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 94%;
  border: 0.5px;
  margin: 2px 12px 0px;
  border-color: grey;
  border-radius: 10px;
  padding: 7px 17px 4px 11px;
`

export const IconContainer = styled.TouchableOpacity`
  width: 30%;
  justify-content: center;
  align-items: center;
`

export const PageContainer = styled.View`
  text-align: center;
`

export const TextStyled = styled.Text`
  font-size: 25px;
  text-align: center;
  color: '#6E6E6E';
  font-weight: bold;
`
