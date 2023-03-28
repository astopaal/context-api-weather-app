import './App.css'
import React from 'react'
import { LocationProvider } from './context/LocationContext'
import SelectLocation from './components/SelectLocation/SelectLocation'
import { WeatherProvider } from './context/WeatherContext'
import WeatherForecast from './components/WeatherForecast/WeatherForecast'

const App = () => {
  return (
    <div className='items-center flex flex-col mt-20'>
      <LocationProvider>
        <WeatherProvider>
          <SelectLocation />
          <br/>
          <br/>
          <WeatherForecast />
        </WeatherProvider>
      </LocationProvider>
    </div>
  )
}

export default App
