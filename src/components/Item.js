import React, { Component } from 'react';

class Item extends Component {

  render() {
    return (
      <div>
        <img src={this.props.info.mediumImage} alt='' ></img>
        <p>Item: {this.props.info.name}</p>
        <p>Price: ${this.props.info.salePrice}</p>
        <button onClick={this.props.handleItemPurchase}>Buy Item</button>
        <button onClick={() => this.props.handleRequestClick(this.props.info)}>Create a Request</button>
      </div>
    )
  }

}

export default Item;
