import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        /* backgroundImage: `url(${"/imagens/wood_svg.svg"})`, */
        backgroundColor: "#cfe0e8",
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
            marginRight: 200,
        },

        listItem: {

        },

    },

    [theme.breakpoints.up('xl')]: {
        player: {
            marginRight: 300,
        },

        listItem: {

        },

    },

}));



const Home = () => {

    const classes = useStyles();

    const [srcPlayer, setsrcPlayer] = useState("oi")
    const [target, setTarget] = useState(null)


    useEffect(() => {
        if (target != null) {
            const id = target.id;

            switch (id) {
                case "country":
                    setsrcPlayer("/musicas/country.mp3");
                    break;
                case "dance":
                    setsrcPlayer("/musicas/dance.mp3");
                    break;
                case "pop":
                    setsrcPlayer("/musicas/pop.mp3");
                    break;
                case "rock":
                    setsrcPlayer("/musicas/rock.mp3");
                    break;
                case "gospel":
                    setsrcPlayer("/musicas/gospel.mp3");
                    break;
                case "hip_hop":
                    setsrcPlayer("/musicas/hip_hop.mp3");
                    break;

                case "eletro_music":
                    setsrcPlayer("/musicas/electro_music.mp3");
                    break;
                case "latin_music":
                    setsrcPlayer("/musicas/latin_music.mp3");
                    break;
                default: console.log("oi")
            }
        }
    }, [target])


    useEffect(() => {
        if (target != null) {
            target.play();
        }
    }, [srcPlayer])


    const handlePlayer = (e) => {
        const targetPlayer = e.target;
        setTarget(targetPlayer);
    }

    return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <h3 className={classes.home}>Home </h3>

                <h4 className={classes.tituloPlay}>Aperte o play para ouvir um pouco de nossa qualidade sonora</h4>
            </Grid>


            <Grid container>
                <Grid item xs={1} sm={3} md={3} lg={3}></Grid>

                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <ul>

                        <li className={classes.listItem}>Country
                         <audio onPlay={handlePlayer} src={srcPlayer} id={"country"} preload={'none'} className={classes.player} controls="controls">
                                Your browser does not support the audio element.
                            </audio>
                        </li>

                        <li className={classes.listItem}>Dance
                        <audio
                                onPlay={handlePlayer}
                                src={srcPlayer}
                                id={"dance"}
                                preload="none"
                                className={classes.player}
                                controls="controls">

                            </audio>

                        </li>
                        <li className={classes.listItem}>Pop
                        <audio
                                onPlay={handlePlayer}
                                src={srcPlayer}
                                id={"pop"}
                                preload="none"
                                className={classes.player}
                                controls="controls">

                            </audio>
                        </li>
                        <li className={classes.listItem}>Rock
                        <audio
                                onPlay={handlePlayer}
                                src={srcPlayer}
                                id={"rock"}
                                preload="none"
                                className={classes.player}
                                controls="controls">

                            </audio>
                        </li>
                        <li className={classes.listItem}>Gospel
                        <audio
                                onPlay={handlePlayer}
                                src={srcPlayer}
                                id={"gospel"}
                                preload="none"
                                className={classes.player}
                                controls="controls">

                            </audio>
                        </li>
                        <li className={classes.listItem}>Hip Hop
                        <audio
                                onPlay={handlePlayer}
                                src={srcPlayer}
                                id={"hip_hop"}
                                preload="none"
                                className={classes.player}
                                controls="controls">

                            </audio>
                        </li>
                        <li className={classes.listItem}>Eletro Music
                        <audio
                                onPlay={handlePlayer}
                                src={srcPlayer}
                                id={"eletro_music"}
                                preload="none"
                                className={classes.player}
                                controls="controls">

                            </audio>
                        </li>
                        <li className={classes.listItem}>Latin Music
                        <audio
                                onPlay={handlePlayer}
                                src={srcPlayer}
                                id={"latin_music"}
                                preload="none"
                                className={classes.player}
                                controls="controls">

                            </audio>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={1} md={3} lg={3}></Grid>
            </Grid>

        </div >
    )
}



export default Home;