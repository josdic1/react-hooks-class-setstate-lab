// ShoppingList.js
import React, { Component } from "react";
import Item from "./Item";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
      selectedCategory: "All"
    };
  }
  

  handleClick = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };
  
  handleFilterChange = (e) => {
    this.setState({ selectedCategory: e.target.value });
  };
  

  render() {
    const appClass = this.state.isDarkMode ? "App dark" : "App light";

    return (
      <div className={appClass}>
        <header>
          <h1>Shopster</h1>
          <button onClick={this.handleClick}>
            {this.state.isDarkMode ? "Dark" : "Light" } Mode
          </button>
        </header>
        <select onChange={this.handleFilterChange} value={this.state.selectedCategory}>
  <option value="All">All</option>
  <option value="Produce">Produce</option>
  <option value="Dairy">Dairy</option>
  <option value="Dessert">Dessert</option>
</select>
<ul className="Items">
  {this.props.items
    .filter((item) =>
      this.state.selectedCategory === "All"
        ? true
        : item.category === this.state.selectedCategory
    )
    .map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
    ))}
</ul>


      </div>
    );
  }
}

export default ShoppingList;