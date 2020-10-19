import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

interface headerProps {
  title: String
  showCancel?: boolean
}

export default function Header({ title, showCancel = true }: headerProps) {
  const navigation = useNavigation()

  function handleGoBackToMainPage() {
    navigation.navigate('OrphanageMap')
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#5b5d6" />
      </BorderlessButton>
      <Text>{title}</Text>

      {showCancel ? (
        <BorderlessButton onPress={handleGoBackToMainPage}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    paddingTop: 44,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#8fa7b3',
    fontSize: 16,
  },
})
