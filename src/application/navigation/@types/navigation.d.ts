import { IPokemon } from '../../../presentation/components/card'

export interface PokedexParams {
  data: IPokemon | undefined
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
