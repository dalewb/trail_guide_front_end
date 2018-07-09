import React from 'react';
import PropTypes from 'prop-types';
import { Imge, Item, Button } from 'semantic-ui-react';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

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

  return (
    <Item.Group>
      <Item padded>
        {/*<Item.Image size='medium' src="https://images-na.ssl-images-amazon.com/images/I/417KqQE9s0L.jpg"/>*/}
        <Item.Content>
          <Item.Header as="h2">
            {props.info.name}
          </Item.Header>
          <Item.Meta>
            {props.info.city}
          </Item.Meta>
          <Item.Meta>
            {props.info.state}
          </Item.Meta>
          <Item.Meta>
            Latitude: {props.info.lat}
          </Item.Meta>
          <Item.Meta>
            Latitude: {props.info.lon}
          </Item.Meta>
          <Item.Description>
            Description: {desc}
          </Item.Description>
          <Button size="small" color="#a2bfb0" onClick={() => props.handleLocationClick(props.info)}>
            Add to Your Locations
          </Button>
        </Item.Content>
      </Item>
    </Item.Group>
  );
}

export default connect()(Location);
