import {
  View,
  NativeSyntheticEvent,
  TextInputChangeEventData
} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Icon, Input, Stack } from 'native-base'

interface InputProps {
  handleFilter: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void
}

const ComponentSearch = ({ handleFilter }: InputProps) => {
  return (
    <View>
      <Stack space={0} w="100%" justifyContent="center" alignItems="center">
        <Input
          w={{
            base: '95%',
            md: '0%'
          }}
          onChange={e => handleFilter(e)}
          style={{
            alignItems: 'center',
            textAlign: 'center'
          }}
          InputLeftElement={
            <Icon
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignSelf: 'center',
                marginStart: 5
              }}
              as={<MaterialIcons name="search" />}
              size={6}
              ml="0"
              color="muted.400"
            />
          }
          placeholder="Procurar"
        />
      </Stack>
    </View>
  )
}

export default ComponentSearch
