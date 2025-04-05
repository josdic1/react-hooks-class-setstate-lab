// App.js
import React, { Component } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingList items={itemData} />
      </div>
    );
  }
}

export default App;