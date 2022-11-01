interface PokedexParams {
  id?: number
  urlImage?: string
  name?: string
  color?: string
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      // pokedex: GameParams
      pokedex: PokedexParams
    }
  }
}
