import { MaterialIcons } from '@expo/vector-icons'
import { Icon, Input, Stack } from 'native-base'
import React from 'react'
import { IconStyled } from './style'

const SearchContainer = () => {
  const [show, setShow] = React.useState(false)
  return (
    <Stack space={0} w="100%" justifyContent="center" alignItems="center">
      <Input
        w={{
          base: '95%',
          md: '0%'
        }}
        style={{
          alignItems: 'center',
          textAlign: 'center'
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="search" />}
            size={6}
            ml="0"
            color="muted.400"
          />
        }
        placeholder="Procurar"
      />
    </Stack>
  )
}

export default SearchContainer
