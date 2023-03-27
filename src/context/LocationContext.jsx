import { createContext, useState, useEffect, useContext } from "react";

const LocationContext = createContext();

export const LocationProvider = ({children}) => {
    const [latitude, setLatitude] = useState(37.86);
    const [longitude, setlongitude] = useState(32.48);

    const locationData = {
        latitude, longitude, setLatitude, setlongitude
    }

    useEffect(() => {

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setLatitude(position.coords.latitude.toFixed(2))
              setlongitude(position.coords.longitude.toFixed(2))
            },
            (error) => {
              alert("Lütfen konum izni verin ya da bir konum seçin")
            },
          )
        } else {
          alert('Geolocation is not supported by this browser.')
        }
    }, [])

    return (
        <LocationContext.Provider value={locationData}>{children}</LocationContext.Provider>
    ) 
}

export const useLocation = () => useContext(LocationContext)