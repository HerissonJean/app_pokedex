import { Image, ToastAndroid } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import React from 'react'
import { CardComponent, TextComponent, TextNameComponent } from './style'
import { Center, View } from 'native-base'

interface ICardProps {
  url: string
}

const Card = ({ url }: ICardProps) => {
  const navigation = useNavigation()

  function handleLogin() {
    navigation.navigate('pokedex', { url })
  }

  return (
    <CardComponent onPress={handleLogin}>
      <TextComponent>#001</TextComponent>
      <View
        style={{
          backgroundColor: 'grey',
          width: '100%',
          height: '80%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image
          style={{
            width: 115,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center'
          }}
          source={{
            uri: url
          }}
        />
      </View>

      <View
        style={{
          backgroundColor: 'red',
          height: 30,
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 5,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TextNameComponent>Bulbasaurrr</TextNameComponent>
      </View>
    </CardComponent>
  )
}

export default Card
