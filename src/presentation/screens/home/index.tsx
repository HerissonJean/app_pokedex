import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import Input from '../../components/search'
import List from '../../components/list'

import ScreenComponent from '../../components/screenComponent'

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

  return (
    <ScreenComponent>
      <Header />
      <Input />
      <List results={data && data.results}></List>
    </ScreenComponent>
  )
}

export default Home
