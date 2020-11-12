import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
    this.toToggole = this.toToggole.bind(this)
  }
  render () {
    return (
      <div>
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="animation-text"
          unmountOnExit
        >
          <div>人物-初音未来</div>
        </CSSTransition>

        <div>
          <button onClick={this.toToggole}>召唤-初音未来</button>
        </div>
      </div>
    );
  }
  toToggole () {
    this.setState({
      isShow: this.state.isShow ? false : true
    })
  }
}

export default Animation;