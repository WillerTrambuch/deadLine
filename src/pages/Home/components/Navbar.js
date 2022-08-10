import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@mui/material/ListSubheader';
import { ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        width: 275,
        marginRight: theme.spacing(2),
    },
    button: {
        width: '100%'
    },
}));

function Navbar() {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button} > Registrar </Button>
            <ListSubheader>Principais Tags</ListSubheader>

            <ListItem button>
                Exibir Mais Tags
            </ListItem>
        </Paper>
    )
}

export default Navbar;