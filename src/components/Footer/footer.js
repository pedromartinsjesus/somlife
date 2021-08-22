import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    footer: {
        textAlign: 'center',
    },

}));

const Footer = () => {

    const classes = useStyles();
    return (
        <>
            <Divider />
            <Grid container>
                <Grid item xs={12} className={classes.footer}>
                    <footer>
                        <p>Produtor Musical: Pedro Martins<br></br>
                            <a href="mailto:atendimentosomlife@gmail.com">atendimentosomlife@gmail.com</a>
                        </p>
                    </footer>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;