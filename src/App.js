import './App.css'
import React from 'react'
import { LocationProvider } from './context/LocationContext'
import SelectLocation from './components/SelectLocation'
import { WeatherProvider } from './context/WeatherContext'

const App = () => {
  return (
    <LocationProvider>
      <WeatherProvider>
        <SelectLocation />
      </WeatherProvider>
    </LocationProvider>
  )
}

export default App
