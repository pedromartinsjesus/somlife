import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: -17,

    },
    logo: {
        marginTop: 2,
        width: 250,
        height: 100,
        borderRadius: 50,
        boxShadow: '9px 7px 5px rgba(50, 50, 50, 0.77)',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    navigationDesktop: {
        width: '100%',
        textAlign: 'center',
        marginBottom: 5,
    },

    link_menu: {
        textDecoration: 'none',
    },

    link_button: {
        textDecoration: 'none',
    },


    menuItem: {
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: "white",
        }
    },


    [theme.breakpoints.up('sm')]: {
        button: {
            width: 200,
            borderRadius: 50,
            backgroundColor: 'white',
            fontWeight: 'bold',

            '& > :first-child': {
                /*  color: 'white', */
            },

            '&:hover': {
                backgroundColor: 'green',
                color: 'white',
            },
        },
    },

    [theme.breakpoints.up('lg')]: {
        button: {
            marginTop: -30,
        },
        logo: {
            marginTop: 10,
            marginBottom: -20,

        },
    },
}));

function Header() {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <ToolBar variant='dense'>
                    <Hidden smUp>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon onClick={handleClick} />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <Link to="/" className={classes.link_menu}><MenuItem onClick={handleClose} className={classes.menuItem}>Home</MenuItem></Link>
                            <Link to="/contacto" className={classes.link_menu}><MenuItem onClick={handleClose} className={classes.menuItem}>Contacto</MenuItem></Link>
                            <Link to="/como_funciona" className={classes.link_menu}><MenuItem onClick={handleClose} className={classes.menuItem}>Como Funciona</MenuItem></Link>
                        </Menu>
                        <Typography variant="h6" className={classes.title}>
                            Estudio Som Life
                            </Typography>
                    </Hidden>

                    <Hidden xsDown>  <Typography>
                        <img className={classes.logo} src={'/imagens/logo.jpg'} />
                    </Typography>

                    </Hidden>
                </ToolBar>
                {<Hidden xsDown>
                    <Grid container>
                        <Grid item lg={12} className={classes.navigationDesktop} >
                            <Link to="/" className={classes.link_button}><Button className={classes.button}>Home</Button></Link>
                            <Link to="/contacto" className={classes.link_button}><Button className={classes.button}>Contacto</Button></Link>
                            <Link to="/como_funciona" className={classes.link_button}><Button className={classes.button}>Como funciona</Button></Link>
                        </Grid>
                    </Grid>
                </Hidden>}
            </AppBar>

        </div >
    )
}

export default Header;

