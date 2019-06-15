import React, {Component} from 'react';


class  Counter extends Component {
  state = {
    value: this.props.value,
    imageUrl: 'https://picsum.photos/200',
    tags: ['tag1','tag2', 'tag3']
  };

  styles = {
    fontSize: 10,
    fontWeight: 'bold'
  };

  renderTags(){
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }

  handleIncrement = () =>{
    //console.log(product);
    this.setState({value: this.state.value + 1});
  };

  render() {

    return (
      <React.Fragment>
        <span style = {this.styles} className = {this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick = {this.handleIncrement}
          className = "btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.renderTags()}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClass(){
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    const {value} = this.state;
    return value === 0 ? 'Zero' : value;
  }

}

export default Counter;
