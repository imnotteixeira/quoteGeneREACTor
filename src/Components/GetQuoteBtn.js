import React, { Component } from 'react';

class Quote extends Component {

  constructor(props) {
    super(props);

    this.btnStyle = {
      fontSize: 18,
      color: 'white',
      backgroundColor: '#036282',
      borderRadius: 10,
      textAlign: 'center',
      padding: 20,
      display: 'inline-block',
      cursor: 'pointer'
    };
  }

  render() {
    return (
      <div style={this.btnStyle} onClick={this.props.onClick}>
        Fetch Me a Quote!
      </div>
    );
  }
}

export default Quote;
