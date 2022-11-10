import { View } from 'react-native'
import React from 'react'
import Card from '../card'
import { FlatListStyled } from './style'

interface IList {
  results: [{ name: string }] | undefined | { name: string }[]
}

const List = ({ results }: IList) => {
  return (
    <View>
      <FlatListStyled
        numColumns={3}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'center',
          paddingLeft: 10
        }}
        data={results}
        showsVerticalScrollIndicator={true}
        renderItem={({ item, index }) => <Card data={item} key={index} />}
        keyExtractor={(item, index: any) => index}
      />
    </View>
  )
}

export default List
