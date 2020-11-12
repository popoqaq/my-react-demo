import React, { Component, Fragment } from 'react'
import LadyItem from './ladyItem'
import Animation from './Animation'
import './style.css'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class lady extends Component {
  state = {
    inputValue: '',
    list: []
  }
  componentDidMount () {
    axios.get('https://www.easy-mock.com/mock/5fabb5615d1197774d6ab348/ReactDemo01/lady')
      .then((res) => {
        console.log('获取数据成功', JSON.stringify(res));
        this.setState({
          list: res.data.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  render () {
    return (
      <Fragment>
        <label htmlFor="input">添加人物</label>
        <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
        <button onClick={this.addPerson.bind(this)}>添加人物</button>
        <p>输入的内容:<i>{this.state.inputValue}</i></p>
        <p>点击人物名字删除</p>
        <ul>
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                return (
                  <CSSTransition
                    timeout={2000}
                    classNames="animation-text"
                    unmountOnExit
                    appear={true}
                    key={index + item}
                  >
                    <LadyItem
                      key={index + item}
                      content={item}
                      deletePerson={this.deletePerson.bind(this, index)}
                      index={index}
                    />
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
        </ul>
        <Animation />
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