import { View, TextInput, Image } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/MaterialIcons'
import InputExemple from '../inputSearch'

const ComponentSearch = () => {
  return (
    <View style={{ margin: 16 }}>
      {/* <TextInput
        style={{
          borderRadius: 45,
          justifyContent: 'center',
          borderColor: 'grey',
          borderWidth: 1,
          textAlign: 'center'
        }}
        placeholder="Procurar"
      ></TextInput>
      <Icon name="search" size={32} color="grey" /> */}

      <InputExemple />
    </View>
  )
}

export default ComponentSearch
