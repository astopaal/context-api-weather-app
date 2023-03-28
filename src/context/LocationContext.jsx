import {createContext, useState, useEffect, useContext} from "react";

const LocationContext = createContext();

export const LocationProvider = ({children}) => {
    const [latitude, setLatitude] = useState(41.00);
    const [longitude, setlongitude] = useState(28.97);

    const locationData = {
        latitude, longitude, setLatitude, setlongitude
    }


    useEffect(() => {
        let data = require('../assets/cities.json')
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let lt = position.coords.latitude.toFixed(2)
                    let ln = position.coords.longitude.toFixed(2)
                    setLatitude(lt)
                    setlongitude(ln)
                    data.push(
                        {
                            "id": 99,
                            "name": "Konumunuz",
                            "latitude": lt,
                            "longitude": ln

                        })

                    console.log(data)
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