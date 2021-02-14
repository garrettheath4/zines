import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import 'turn.js'

export class Turn extends React.Component {
  //TODO: Use React.useRef instead of using `this.el`
  static defaultProps = {
    style: {},
    className: '',
    options: {},
  }

  componentDidMount() {
    if (this.el) {
      $(this.el).turn(Object.assign({}, this.props.options))
    }
    document.addEventListener('keydown', this.handleKeyDown, false)
  }

  componentWillMount() {
    if (this.el) {
      $(this.el)
        .turn('destroy')
        .remove()
    }
    document.removeEventListener('keydown', this.handleKeyDown, false)
  }

  handleKeyDown = event => {
    if (event.keyCode === 37) {
      $(this.el).turn('previous')
    } else if (event.keyCode === 39) {
      $(this.el).turn('next')
    }
  }

  render() {
    return (
      <div
        className={this.props.className}
        style={Object.assign({}, this.props.style)}
        reef={el => (this.el = el)}
      >
        {this.props.children}
      </div>
    )
  }
}
