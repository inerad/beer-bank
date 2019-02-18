import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const styles = {
  card: {
    position: 'relative',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
    }
  },
  favButton: {
    position: 'absolute',
    right: '0'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '300px'
  },
  image: {
    maxWidth: '70%',
    maxHeight: '150px',
    marginBottom: '20px'
  }
};

class Beer extends Component {
  static propTypes = {
    favoriteClick: PropTypes.func.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired
  };

  handleBeerClick() {
    console.log('Beer clicked');
  }

  handleFavoriteClick(e) {
    e.stopPropagation();
    this.props.favoriteClick(this.props.id);
  }

  render() {
    const { name, tagline, image_url, classes, isFavorite } = this.props;
    return (
      <Card className={classes.card} onClick={() => this.handleBeerClick()}>
        <IconButton aria-label="Favorite" 
          className={classes.favButton} 
          color={isFavorite ? 'primary' : 'default'} 
          onClick={e => this.handleFavoriteClick(e)}
        >
          <Icon>star</Icon>
        </IconButton>
        <CardContent className={classes.content}>
          <img className={classes.image} alt={name} src={image_url} />
          <Typography variant="h6" align="center" color="primary">
            {name}
          </Typography>
          <Typography variant="subtitle1" paragraph color="textSecondary" align="center">
            {tagline}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Beer);
