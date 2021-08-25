import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        /* backgroundImage: `url(${"/imagens/wood_svg.svg"})`, */
        /* backgroundImage: 'linear-gradient(brown,yellow,green)', */
        backgroundImage: 'linear-gradient(brown,orange,white)',

    },

    home: {
        marginLeft: 10,
        textAlign: 'center',
        color: 'white',
    },

    tituloPlay: {
        textAlign: 'center',
        paddingTop: 30,
        marginBottom: 20,
        color: 'white',
    },

    player: {

    },
    listItem: {
        fontWeight: 'bold',
        marginLeft: -25,
    },

    imgProducao: {
        border: '10px solid rgba(255,255,255,0.3)',
        boxShadow: '20px 20px 60px 10px pink',
    },

    studioImage: {
        width: '100%',
        marginTop: 1,
        boxShadow: '9px 7px 5px rgba(50, 50, 50, 0.77)',
        maxWidth: 500,
    },


    gifMusica: {
        height: 50,
    },

    sideDescription: {
        textAlign: 'center',

    },

    sideContent: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
    },

    footer: {
        justifyContent: 'center',
        textAlign: 'center',
    },

    [theme.breakpoints.up('xl')]: {
        player: {
            marginRight: 200,
        },
    },

    [theme.breakpoints.up('lg')]: {
        player: {
            marginRight: 200,

        },
        imgProducao: {
            width: 500,
        },

        listItem: {

        },
    },

    [theme.breakpoints.up('md')]: {
        gridImagem: {
        },
        tituloPlay: {
            textAlign: 'left',
            marginLeft: 100,
        },
        imgProducao: {
            float: 'right',
            width: 500,
        },
    },

    [theme.breakpoints.down('sm')]: {

        tituloPlay: {
            textAlign: 'left',
            marginLeft: 100,
        },
        imgProducao: {
            width: 300,
            marginTop: 50,
            marginLeft: 80,
        },
    },


}));



const Home = (props) => {

    const classes = useStyles();

    /* const { width } = props; */

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
                <h3 className={classes.home}>{/* Home {width} */} </h3>
                <h4 className={classes.tituloPlay}>Ouça nossa qualidade sonora</h4>
            </Grid>


            <Grid container>
                <Grid item xs={1} sm={1} lg={1}></Grid>

                <Grid item xs={6} sm={4} md={1} lg={3}>
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
                <Hidden xsDown>
                    <Grid item xs={1} md={8} lg={6} sm={7} className={classes.gridImagem}>
                        <img alt={"Imagem de produção musical"} className={classes.imgProducao} src="/imagens/producao_musical.jpg" />
                    </Grid>
                </Hidden>

            </Grid>


            {/*  <Divider /> */}
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Typography variant='h4'>Estudio Som Life</Typography>
                        <Typography>Desde 2006,  gerando vida através do som</Typography>
                    </CardContent>
                </Card>

            </Grid>

            <Grid container>

                <Grid item xs={12} lg={6}>
                    <img alt="Imagem de Mesa de mistura" className={classes.studioImage} src="/imagens/mix_table.jpg" />
                </Grid>



                <Grid item xs={12} lg={6} className={classes.sideContent}>

                    <Typography variant={'h2'} className={classes.sideDescription}>
                        Qualidade sonora, produção musical de alto nível
                        < Grid container>
                            <Grid item lg={12}>
                                <img alt={"Imagem gif animado notas musicais"} className={classes.gifMusica} src="https://www.imagensanimadas.com/data/media/1377/nota-musica-imagem-animada-0021.gif" />
                            </Grid>
                        </Grid>
                    </Typography>

                </Grid>

            </Grid>

        </div >
    )
}



export default withWidth()(Home);