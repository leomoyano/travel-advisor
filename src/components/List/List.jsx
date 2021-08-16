import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import React from 'react'

import useStyles from './styles';

const List = () => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Restaurants, Hotels & Attractions around you
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select></Select>
            </FormControl>
        </div>
    )
}

export default List;
