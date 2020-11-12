import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ladyItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)

  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    }
    if (nextProps.name !== this.props.name) {
      return true
    }
    return false;
  }

  render () {
    console.log('1');
    return (
      <li onClick={this.handleClick}>
        {this.props.name} {this.props.content}
      </li>
    );
  }
  handleClick () {
    this.props.deletePerson(this.props.index)
  }
}

ladyItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

ladyItem.defaultProps = {
  name: ''
}

export default ladyItem;