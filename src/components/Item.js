import React from 'react';
import { Card, Image, Button, Grid } from 'semantic-ui-react';
import RequestForm from './RequestForm';
import { Popup } from 'semantic-ui-react';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

function Item(props) {
  return (
    <Grid.Column>
    <Card>
      <Image src={props.info.largeImage} />
        <Card.Content>
          <Card.Header>{props.info.name}</Card.Header>
          <Card.Meta>Price: ${props.info.salePrice}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Button onClick={props.handleItemPurchase}>
            Buy Item
          </Button>
          <Popup
            trigger={<Button content="Create Request" />}
            content={<RequestForm handleRequestSubmit={props.handleRequestSubmit}/>}
            on='click'
          />
        </Card.Content>
    </Card>
  </Grid.Column>
  );
}

export default connect()(Item);
