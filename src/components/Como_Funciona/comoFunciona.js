import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
/* import Grid from '@material-ui/core/Grid'; */


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        /*       backgroundColor: "#cfe0e8", */
    },
    lista: {
        textAlign: 'justify',
        paddingRight: 20,
        backgroundColor: "#cfe0e8",

    },
    comoFunciona: {
        textAlign: 'center',
        paddingTop: 10,

    },
}));


const ComoFunciona = () => {


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h3 className={classes.comoFunciona}>Como Funciona</h3>


            <Paper>
                <ol className={classes.lista}>
                    <li>Grave sua voz, ou guitarra e voz em seu telemóvel ou gravador de som</li>
                    <br />
                    <li>Envie pelo whatsApp o audio da musica que foi gravada</li>
                    <br />
                    <li>Aguarde instruções do Produtor Musical</li>
                    <br />
                    <li>O Produtor irá fazer uma demonstração simples da música e lhe enviará pelo whatsApp</li>
                    <br />
                    <li>Tu ouves a música e diz ao produtor a sua opinião</li>
                    <br />
                    <li>Se te apetece continuar a gravação, o Produtor lhe dá o prazo de entrega da musica.
                    Neste ponto tens que fazer o pagamento de 50% do valor combinado.
                </li>
                    <br />
                    <li>Tudo pronto, o Produtor termina a gravação e lhe envia a metade da musica pronta.
                    O estúdio fica no aguardo do pagamento dos 50% para liberar a musica por total.
                </li>

                </ol>
            </Paper>

        </div>
    )
}

export default ComoFunciona;