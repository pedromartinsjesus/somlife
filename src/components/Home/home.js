import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import withWidth from '@material-ui/core/withWidth';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },

    home: {
        marginLeft: 10,
        textAlign: 'center',
    },

    tituloPlay: {
        textAlign: 'center',
        marginBottom: 40,
    },

    player: {


    },
    listItem: {

    },

    [theme.breakpoints.up('lg')]: {
        player: {
            marginLeft: 20,
        },

        listItem: {

        },

    },

}));





const Home = (props) => {

    const classes = useStyles();

    const { width } = props;


    return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <h3 className={classes.home}>Home {width} </h3>

                <h4 className={classes.tituloPlay}>Aperte o play para ouvir um pouco de nossa qualidade sonora</h4>
            </Grid>


            <Grid container>
                <Grid item xs={1} sm={3} md={3} lg={3}></Grid>

                <Grid item xs={6} sm={3} md={3} lg={8}>
                    <ul>

                        <li className={classes.listItem}>Country
                         <audio className={classes.player} controls="controls">
                                <source src="/musicas/country.mp3" type="audio/mp3"></source>
                            </audio>
                        </li>

                        <li className={classes.listItem}>Dance
                        <audio className={classes.player} controls="controls">
                                <source src="/musicas/dance.mp3" type="audio/mp3"></source>
                            </audio>
                        </li>
                        <li className={classes.listItem}>Pop
                        <audio className={classes.player} controls="controls">
                                <source src="/musicas/pop.mp3" type="audio/mp3"></source>
                            </audio>
                        </li>
                        <li className={classes.listItem}>Rock
                        <audio className={classes.player} controls="controls">
                                <source src="/musicas/rock.mp3" type="audio/mp3"></source>
                            </audio>
                        </li>
                        <li className={classes.listItem}>Gospel
                <audio className={classes.player} controls="controls">
                                <source src="/musicas/gospel.mp3" type="audio/mp3"></source>
                            </audio>
                        </li>
                        <li className={classes.listItem}>Hip Hop
                <audio className={classes.player} controls="controls">
                                <source src="/musicas/hip_hop.mp3" type="audio/mp3"></source>
                            </audio>
                        </li>
                        <li className={classes.listItem}>Eletro Music
                <audio className={classes.player} controls="controls">
                                <source src="/musicas/electro_music.mp3" type="audio/mp3"></source>
                            </audio>
                        </li>
                        <li className={classes.listItem}>Latin Music
                <audio className={classes.player} controls="controls">
                                <source src="/musicas/latin_music.mp3" type="audio/mp3"></source>
                            </audio>
                        </li>
                    </ul>
                </Grid>
                <Grid xs={1} md={3} lg={1}></Grid>
            </Grid>

        </div >
    )
}



export default withWidth()(Home);