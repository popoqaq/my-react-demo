import React, { Component } from 'react'

class ladyItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)

  }
  render () {
    return (
      <li onClick={this.handleClick}>{this.props.content}</li>
    );
  }
  handleClick () {
    this.props.deletePerson(this.props.index)
  }
}

export default ladyItem;