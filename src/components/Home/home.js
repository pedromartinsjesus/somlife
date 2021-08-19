import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
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
        float: 'right',
        height: 20,
        marginRight: 10,
    },
    listItem: {
        marginBottom: 30,
    },

}));





const Home = () => {

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <h3 className={classes.home}>Home</h3>

            <h4 className={classes.tituloPlay}>Aperte o play para ouvir um pouco de nossa qualidade sonora</h4>

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
        </div>
    )
}

export default Home;