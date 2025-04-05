// Item.js
import React, { Component } from "react";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInCart: false,
    };
  }

  handleAddToCart = () => {
    this.setState((prevState) => ({
      isInCart: !prevState.isInCart,
    }));
  };

  render() {
    const { name, category } = this.props;
    const { isInCart } = this.state;
    const itemClass = isInCart ? "in-cart" : "";

    return (
      <li className={itemClass}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button onClick={this.handleAddToCart}>
          {isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}

export default Item;
