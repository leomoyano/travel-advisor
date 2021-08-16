import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Divider, Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlinedIcon } from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';

import useStyles from './styles';

const Map = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-widht: 600px)');

    const coorditates = { lat: 0, lng: 0 }

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBkXaINz5zmAUVWA5Y_wbcLIrUX5XIWG7o' }}
                defaultCenter={coorditates}
                center={coorditates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map
