import React from "react";

import {AppBar, Toolbar, Typography, IconButton, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

import coronavirus from '../../resource/coronavirus.svg'
import styles from './TopNav.module.css'

const TopNav = () => {

    return (
        <div className={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
                        <img src={coronavirus} alt="COVID-19" height="50" />
                    </IconButton>
                    <Typography variant="h6" className={styles.title}>
                        Covid-19 Tracker
                </Typography>
                    <IconButton className={styles.menuButton} color="inherit" aria-label="menu">
                        <GitHubIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopNav;