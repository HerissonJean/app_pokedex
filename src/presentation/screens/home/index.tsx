import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import Input from '../../components/search'
import Card from '../../components/card'
import List from '../../components/list'

import ScreenComponent from '../../components/screenComponent'
import { FlatList } from './style'

interface IReq {
  results: [
    {
      name: string
    }
  ]
}

const Home = () => {
  const [data, setData] = useState<IReq>()

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50')
      .then(res => res.json())
      .then(data => setData(data))
  }, [data])

  // const renderItem = (item: { id: number; url: string }) => (
  //   <Card results={item.url} />
  // )

  return (
    <ScreenComponent>
      <Header />
      <Input />

      {/* <FlatList
        style={{
          flexDirection: 'column'
        }}
        numColumns={3}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'center',
          paddingLeft: 10
        }}
        data={data}
        showsVerticalScrollIndicator={true}
        renderItem={({ item, index }) => <Card name={item} key={index} />}
        keyExtractor={(item: any) => item.id}
      /> */}
      <List results={data && data.results}></List>
    </ScreenComponent>
  )
}

export default Home
