import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#C0C0C0',
    },

    brand: {
        marginLeft: 10,

    },

    buttonGroup: {
        padding: 5,

    },
}));

function Header() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Grid container>
                    <h3 className={classes.brand}>Estudio Som Life</h3>
                </Grid>

            </Grid>


            <Grid item xs={12}>
                <Grid container justifyContent='center'>
                    <ButtonGroup className={classes.buttonGroup} variant="contained" color="primary" aria-label="contained primary button group">
                        <Button>Home</Button>
                        <Button>Contacto</Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Header;

