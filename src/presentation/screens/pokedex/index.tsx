import { View, Text, Image } from 'react-native'
import React from 'react'
import HeaderPokedex from '../../components/headerPokedex'
import { useRoute } from '@react-navigation/native'
import { PokedexParams } from '../../../application/navigation/@types/navigation'

const Pokedex = () => {
  const route = useRoute()

  console.log(route)
  const { data } = route.params as PokedexParams
  console.log(data)

  const mockData = {
    nome: 'Jose'
  }
  return (
    <View style={{ backgroundColor: '#F57D31', width: '100%', height: '100%' }}>
      <HeaderPokedex></HeaderPokedex>
      <View
        style={{
          width: '100%',
          height: '40%',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: 'black'
        }}
      >
        <View>
          <Text style={{ color: 'white' }}> X </Text>
        </View>
        {/* <Image
          style={{ width: '70%', height: '70%' }}
          source={{ uri: data?.name }}
        ></Image> */}
        <View>
          <Text style={{ color: 'white' }}> X </Text>
        </View>
      </View>

      <View>
        <View
          style={{
            width: '98%',
            height: '70%',
            backgroundColor: 'white',
            borderRadius: 25,
            margin: 4
          }}
        >
          <View
            style={{
              width: '98%',
              height: '80%',
              backgroundColor: 'red',
              borderRadius: 25,
              margin: 4,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <View
              style={{
                width: '98%',
                height: '10%',
                backgroundColor: 'blue',
                borderRadius: 25,
                margin: 4,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  width: '15%',
                  height: '60%',
                  backgroundColor: 'red',
                  borderRadius: 25,
                  margin: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>Fire</Text>
              </View>

              <View
                style={{
                  width: '15%',
                  height: '60%',
                  backgroundColor: 'orange',
                  borderRadius: 25,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={{ fontWeight: 'bold' }}>Water</Text>
              </View>
            </View>
            <View
              style={{
                width: '98%',
                height: '10%',
                backgroundColor: 'blue',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 4
              }}
            >
              <Text style={{ color: 'white' }}>About</Text>
            </View>
            <View
              style={{
                width: '98%',
                height: '30%',
                backgroundColor: 'purple',
                borderRadius: 25,
                margin: 4,
                justifyContent: 'space-evenly',
                flexDirection: 'row'
              }}
            >
              <View
                style={{
                  width: '20%',
                  height: '80%',
                  backgroundColor: 'yellow',
                  borderRadius: 25,
                  margin: 4
                }}
              ></View>
              <View
                style={{
                  width: '20%',
                  height: '80%',
                  backgroundColor: 'yellow',
                  borderRadius: 25,
                  margin: 4
                }}
              ></View>
              <View
                style={{
                  width: '20%',
                  height: '80%',
                  backgroundColor: 'yellow',
                  borderRadius: 25,
                  margin: 4
                }}
              ></View>
            </View>
            <View
              style={{
                width: '98%',
                height: '10%',
                backgroundColor: 'green',
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 4
              }}
            >
              <Text>{data && data.name}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Pokedex
