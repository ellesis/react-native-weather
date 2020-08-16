import React from 'react';
import Loading from './loading'
import * as Location from 'expo-location';

export default function App() {
  getLocation = async () => {
    // need permition
    const location = await Location.getCurrentPositionAsync(options)
    console.log(location)
  }

  componentDidMount() {
    this.getLocation()
  }
  
  return (
    <Loading />
  );
}
