import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'

import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import mapMarker from '../images/map_marker.png'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import api from '../services/api'

interface Orphanage {
  id: number
  name: string
  latitude: number
  longitude: number
}

export default function OrphanagesMap() {
  const navigation = useNavigation()

  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useFocusEffect(() => {
    api.get('/').then((response) => {
      setOrphanages(response.data)
    })
  })
  function handleNavigateToOrphanagesDetais(id: number) {
    navigation.navigate('OrphanageDetails', { id })
  }

  function navigateToCreateOrphanage() {
    navigation.navigate('selectMapPosition')
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -29.6899559,
          longitude: -51.1480951,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 3.6,
                y: 0.8,
              }}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            >
              <Callout
                tooltip
                onPress={() => handleNavigateToOrphanagesDetais(orphanage.id)}
              >
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{orphanage.name}</Text>
                </View>
              </Callout>
            </Marker>
          )
        })}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {orphanages.length} orfanatos encontrados
        </Text>

        <RectButton
          onPress={navigateToCreateOrphanage}
          style={styles.createOrphanageButton}
        >
          <Feather name="plus" />
        </RectButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8 )',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
  },

  footer: {
    position: 'absolute',
    right: 24,
    left: 24,
    bottom: 32,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 46,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },

  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold',
  },

  createOrphanageButton: {
    width: 46,
    height: 46,
    backgroundColor: '#15c3d6',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
