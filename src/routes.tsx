import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OrphanageMap from './pages/OrphanagesMap'
import OrphanageDetails from './pages/OrphanageDetails'
import OrphanageData from './pages/CreaterOrhange/OrphanageData'
import selectMapPosition from './pages/CreaterOrhange/selectMapPosition'
import Header from './pages/header'

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f2f3f5' },
        }}
      >
        <Screen name="OrphanageMap" component={OrphanageMap} />
        <Screen
          name="OrphanageDetails"
          options={{
            headerShown: true,
            header: () => <Header title="Mapa" />,
          }}
          component={OrphanageDetails}
        />
        <Screen
          name="selectMapPosition"
          options={{
            headerShown: true,
            header: () => <Header title="detalhes" />,
          }}
          component={selectMapPosition}
        />
        <Screen name="OrphanageData" component={OrphanageData} />
      </Navigator>
    </NavigationContainer>
  )
}
