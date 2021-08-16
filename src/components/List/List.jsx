import React, { useState } from 'react'
import { CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';

import useStyles from './styles';

const List = () => {
    const [type, setType] = useState('restaurants')
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h4">
                Restaurants, Hotels & Attractions around you
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default List;
