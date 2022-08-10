import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles({
    appBar2: {
        elevation: '{0}',
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginRight: 10
    },
    bell: {
        marginRight: 10
    }
});

function Header() {
    const classes = useStyles();
    
    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar2} >
            <Toolbar>
                <img src="/images/logo.jpg" alt="logo" className={classes.img} />
                <div className={classes.grow} />
                <div className={classes.userSection} >
                    <Button variant="contained" color="primary" className={classes.button} >
                        Novo
                    </Button>

                    <Avatar alt="Willer Seno"/>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;