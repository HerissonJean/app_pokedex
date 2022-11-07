import React, { useEffect, useState } from 'react'
import Header from '../../components/header'
import Input from '../../components/search'
import List from '../../components/list'

import ScreenComponent from '../../components/screenComponent'
import Pagination from '../../components/pagination'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'

interface IReq {
  results: [
    {
      name: string
    }
  ]
}

const Home = () => {
  const [data, setData] = useState<IReq>()
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState<string>()

  function handlePage(click: number) {
    setPage(page + click)
  }

  function handleFilter(e: NativeSyntheticEvent<TextInputChangeEventData>) {
    setFilter(e.nativeEvent.text)
  }

  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${(page - 1) * 21}&limit=21`
    )
      .then(res => res.json())
      .then(data => setData(data))
  }, [data])

  return (
    <ScreenComponent>
      <Header />
      <Input handleFilter={e => handleFilter(e)} />
      <List results={data && data.results}></List>
      <Pagination
        pages={page}
        handleClick={(click: number) => handlePage(click)}
      ></Pagination>
    </ScreenComponent>
  )
}

export default Home
