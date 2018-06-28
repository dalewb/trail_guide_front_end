import React, { Component } from 'react';

class Item extends Component {

  render() {
    return (
      <div>
        <p>Item: {this.props.info.name}</p>
        <p>Normal Price: {this.props.info.msrp}</p>
        <p>Sale Price: {this.props.info.salePrice}</p>
      </div>
    )
  }
  
}

export default Item;
