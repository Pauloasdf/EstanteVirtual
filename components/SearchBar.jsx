import React from 'react';
import { useState } from "react";
import { SearchOutlined } from '@material-ui/icons';
import { Button, Grid, IconButton, TextField } from '@material-ui/core';
import { useEffect } from 'react';

const SearchBar = () => {
    const [searchText, setSearchText] = useState();
    useEffect(() => {
        console.log(searchText)
    }, [searchText])
    return (
        <form>
            <Grid container direction='row' alignContent='center' justify='flex-start'>
                <Grid item xs={5}>
                    <TextField
                        id="search-bar"
                        className="text"
                        variant="outlined"
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        placeholder="Pesquisar..."
                        size="small"
                        style={{ width: "100%" }}
                    /></Grid>
                <Grid item xs={1}>
                    <Button variant='contained' style={{ height: '100%', width: "100%", marginTop: -1, marginLeft: 5 }}>
                        <SearchOutlined style={{ fill: "blue" }} />
                    </Button></Grid>
            </Grid>
        </form>
    )
};

export default SearchBar;
