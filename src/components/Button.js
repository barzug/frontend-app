import React from 'react';

class Button extends React.Component {
  state = {
    isClicked: false
  }

  handleClick = (event) => {
      event.preventDefault()

      console.log('button clicked')

      // this.setState({isClicked: true})

      this.props.onClick(event)
  }

  render() {
    const text = this.props.isUpperCase ? this.props.children.toUpperCase() : this.props.children

    return (
      <button className={this.state.isClicked ? "red" : ''} onClick={this.handleClick}>{text}</button>
    );
  }
}

export default Button;
