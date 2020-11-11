import React, { Component, Fragment } from 'react'
import LadyItem from './ladyItem'
import './style.css'

class lady extends Component {
  state = {
    inputValue: '',
    list: ['见崎鸣', '初音未来']
  }
  render () {
    return (
      <Fragment>
        <label htmlFor="input">添加人物</label>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
        <button onClick={this.addPerson.bind(this)}>添加人物</button>
        <p>输入的内容:<i>{this.state.inputValue}</i></p>

        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <LadyItem
                  key={index + item}
                  content={item}
                  deletePerson={this.deletePerson.bind(this, index)}
                  index={index}

                />
              )
            })
          }
        </ul>
      </Fragment>
    );
  }
  inputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  addPerson () {
    this.setState({
      list: this.state.inputValue === '' ? [...this.state.list] : [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  deletePerson (index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default lady;