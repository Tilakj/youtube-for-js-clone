import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import SearchBar from './SearchBar'
import {useStyles} from '../styles'


export default function HeaderBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appHeader}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            JS YouTube
          </Typography>
          <SearchBar classes={classes} handleFormSubmit={props.handleFormSubmit} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
