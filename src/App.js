import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from './api';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

const App = () => {
const [places, setPlaces] = useState([])
const [childClick, setChildClick] = useState(null)

const [coordinates, setCoordinates] = useState({lat: 0, lng: 0})
const [bounds, setBounds] = useState({})

const [isLoading, setIsLoading] = useState(false)
const [type, setType] = useState('restaurants')
const [rating, setRating] = useState('')

useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
        setCoordinates({lat: latitude, lng: longitude})
    })
}, [])

    useEffect(() => {
        setIsLoading(true)
        getPlacesData(type, bounds?.sw, bounds?.ne)
          .then( data => {
            console.log(data);
            setPlaces(data)
            setIsLoading(false)
        })
    }, [bounds, coordinates, type])

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container space={3} style={{ width: '100%'}}>
                <Grid xs={12} md={4}>
                    <List 
                    places={places} 
                    childClick={childClick}
                    isLoading={isLoading}
                    type={type}
                    setType={setType}
                    rating={rating}
                    setRating={setRating}
                    />
                </Grid>
                <Grid xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        setChildClick={setChildClick}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default App;