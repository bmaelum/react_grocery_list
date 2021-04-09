import React from 'react';


class App extends React.Component {
  constructor(props){ 
    super(props)
    this.state = {
      items: [
        {
          name: "Broccoli",
          number: 3,
          purchased: false,
        },
        {
          name: "Bananas",
          number: 6,
          purchased: false,
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1 className="title">Grocery List</h1>

        <form>
        <div className="field has-addons">
          <div className="control">
            <input
            style={{ maxWidth : "6em"}}
            className="input"
            type="number"
            placeholder="2"
            min="1"
            aria-label="number to purchase" />
          </div>

          <div className="control is-expanded">
            <input
            className="input"
            type="text"
            placeholder="Item to buy"
            aria-label="item to purchase" />
          </div>

          <div className="control">
            <input
            className="button is-info"
            type="submit"
            value="Add Item" />
          </div>
        </div>
        </form>
      </div>
    );

  }
    
}

export default App;
