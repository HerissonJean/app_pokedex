import { View } from 'react-native'
import React from 'react'
import { FlatList } from 'native-base'
import Card from '../card'

interface IList {
  results: [{ name: string }] | undefined
}

const List = ({ results }: IList) => {
  return (
    <View>
      <FlatList
        style={{
          flexDirection: 'column',
          height: '80%',
          marginTop: 16
        }}
        numColumns={3}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'center',
          paddingLeft: 10
        }}
        data={results}
        showsVerticalScrollIndicator={true}
        renderItem={({ item, index }) => <Card data={item} key={index} />}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  )
}

export default List
