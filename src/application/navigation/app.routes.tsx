import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../../presentation/screens/home'
import Pokedex from '../../presentation/screens/pokedex'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
    </Navigator>
  )
}
//      ;<Screen name="pokedex" component={Pokedex} />
