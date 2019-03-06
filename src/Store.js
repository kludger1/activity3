import React, { Component } from 'react';
import Items from './components/StoreItems';

class Store extends Component {
  state = {
    items: [
      {name: "shoes", description: "nice black shoes", cost: "59.99", id: 1 },
      {name: "pants", description: "nice pink pants", cost: "45.99", id: 2 },
      {name: "shirt", description: "nice yellow shirt", cost: "60.99", id: 3 },
      {name: "ring", description: "nice gold ring", cost: "50.99", id: 4 }
    ]
  }
  render() {
    return (
      <div className="App">
      <Items items={this.state.items} />
      </div>
    );
  }
}

export default Store;
