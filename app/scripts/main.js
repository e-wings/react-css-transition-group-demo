import React from 'react'
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={items: ['hello', 'world', 'click', 'me']};
  }
  handleAdd() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  }
  handleRemove(i) {
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }
  render() {
    var items = this.state.items.map(function(item, i) {
      return (
        <h2 className="todo-item" key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </h2>
      );
    }.bind(this));
    return (
      <div>
        <button onClick={this.handleAdd.bind(this)}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
};

ReactDOM.render(
  <Home/>, document.getElementById('app')
)