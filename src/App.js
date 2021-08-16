import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

const App = () => {

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container space={3} style={{ width: '100%'}}>
                <Grid xs={12} md={4}>
                    <List />
                </Grid>
                <Grid xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
        </>
    )
}

export default App;