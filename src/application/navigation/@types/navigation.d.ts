// export interface GameParams {
//   id: string
//   title: string
//   bannerUrl: string
// }

interface PokedexParams {
  // id: number
  url: string
  // name: string
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
