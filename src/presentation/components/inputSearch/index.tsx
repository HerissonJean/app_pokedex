import { MaterialIcons } from '@expo/vector-icons'
import { Icon, Input, Pressable, Stack } from 'native-base'
import { color } from 'native-base/lib/typescript/theme/styled-system'
import React from 'react'

//alignItems="center" justifyContent="center"

const Example = () => {
  const [show, setShow] = React.useState(false)
  return (
    <Stack space={0} w="100%" justifyContent="center" alignItems="center">
      <Input
        placeholder
        w={{
          base: '95%',
          md: '0%'
        }}
        style={{
          // justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: 'center'
          // backgroundColor: 'yellow'
        }}
        InputLeftElement={
          <Icon
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignSelf: 'center',
              // backgroundColor: 'red'
              marginStart: 5
            }}
            as={<MaterialIcons name="search" />}
            size={6}
            ml="0"
            color="muted.400"
            // justifyContent="space-between"
            // alignItems="center"
            // textAlign="center"
            // backgroundColor="blue"
          />
        }
        placeholder="Procurar"
      />
    </Stack>
  )
}

export default Example
