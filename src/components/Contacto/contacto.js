import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    tituloContacto: {
        padding: 5,
        textAlign: 'center',
    },
    telemovelPaper: {
        marginTop: 30,
        marginLeft: 50,
        paddingLeft: 30,
        padddingTop: 30,
        paddingRight: 20,
        marginBottom: 50,/* OBS. Coloquei esse margin bottom apenas pra abrir espaço no final da div
                            porque o backgroundColor do root estava pequeno na tela. Foi só pra dar mais
                            espaço de cor na tela.  */
        width: 'max-content',
        textAlign: 'center',
    },
    telemovelNumber: {
        fontWeight: "bold",

    },
    logoZap: {
        marginTop: 23,
        marginLeft: 30,
        float: 'left',
    },
    contactoDescricao: {
        marginLeft: 30,
    },

}));

const Contacto = () => {

    const classes = useStyles();

    return (

        <div className={classes.root}>

            <Grid container spacing={1}>

                <Grid item xs={12}>


                    <h3 aria-label="Contacto" className={classes.tituloContacto}> Contacto </h3>
                    <Paper className={classes.contactoDescricao}>

                        Envie sua música, ou faça contacto através do número de telemóvel
                      </Paper>
                    <img alt="Logo WhatsApp" className={classes.logoZap} src="/imagens/whatsApp.svg" />
                    <Paper className={classes.telemovelPaper}>
                        <span className={classes.telemovelNumber}>926 429 016</span>
                    </Paper>

                </Grid>
            </Grid>
        </div>


    )
}

export default Contacto;