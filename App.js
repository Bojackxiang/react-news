import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>今天很开心</Text>
      <Text>今天很开心</Text>
      <Text>今天很开心</Text>
      <Text>今天很开心</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor:'pink',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 40,
  }
})
