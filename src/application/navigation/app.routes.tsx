import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../../presentation/screens/home'
import Pokedex from '../../presentation/screens/pokedex'

export function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="pokedex" component={Pokedex} />
    </Navigator>
  )
}
