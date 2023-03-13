import React from 'react'
import SearchBar from '../components/SearchBar'
import { Grid } from '@material-ui/core';

export default function Search() {
    return (
        <div style={{ marginTop: 10 }}>
            <Grid container style={{ margin: 20 }}>
                <Grid item xs={12}>
                    <SearchBar />
                </Grid>
            </Grid>
        </div>
    )
}
