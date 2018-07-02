import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    maxWidth: '300px',
  },
  root: {
    display: "flex",
    flexGrow: 1,
    flexWrap: "wrap",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function Location(props) {
  let desc = ""
  if (props.info.activities) {
    desc = props.info.activities[0].description
  } else if (props.info.description) {
    desc = props.info.description
  }

  const { classes } = props;
  return (
    <Grid container className={classes.root} spacing={16}>
      <Grid item xs={12}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          title={props.info.name}
          image="https://images-na.ssl-images-amazon.com/images/I/417KqQE9s0L.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.info.name}
          </Typography>
          <Typography component="p">
            {props.info.city}
          </Typography>
          <Typography component="p">
            {props.info.state}
          </Typography>
          <Typography component="p">
            Latitude: {props.info.lat}
          </Typography>
          <Typography component="p">
            Latitude: {props.info.lon}
          </Typography>
          <Button size="small" color="primary" onClick={() => props.handleLocationClick(props.info)}>
            Add to Your Locations
          </Button>
          <Typography component="p">
            Description: {desc}
          </Typography>
        </CardContent>
        {/*<CardActions>
          <Button size="small" color="primary" onClick={props.handleLocationPurchase}>
            Buy Location
          </Button>
          <Button size="small" color="primary" onClick={() => props.handleRequestClick(props.info)}>
            Create a Request
          </Button>
        </CardActions>*/}
      </Card>
      </Grid>
    </Grid>
  );
}

Location.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Location);
