import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Getting the Weather</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA"
  },
  text:{
    color: "#2c2c2c",
    fontSize: 30
  }
})
