import { Typography } from '@material-ui/core';
import React from 'react';
import Button from '../Button/Button';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import classes from './Team.module.css';

const Team = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Typography variant="h3" align="center">
        Our Team
      </Typography>
      <div className={classes.boxes}>
        {/*   <Card className={classes.box}>
          <img className={classes.img} src={img3} alt='team member 1' />
          <Typography variant='h6' align='center'>
            Muhammad Yasmin
          </Typography>
          <Typography variant='body1' align='center'>
            S.V.P
          </Typography>
          <CardActions disableSpacing>
            <span className={classes.learnMore}> Learn More</span>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography>
                Muhammad Yasmin is the Senior Vice President of EPO
              </Typography>
            </CardContent>
          </Collapse>
        </Card> */}
      </div>
    </div>
  );
};

export default Team;
