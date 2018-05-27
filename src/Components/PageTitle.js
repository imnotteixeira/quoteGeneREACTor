import React, { Component } from 'react';

class Quote extends Component {

  constructor(props) {
    super(props);

    this.titleStyle = {
      fontSize: 40,
      color: 'white',
      backgroundColor: '#45aacc',
      borderRadius: 10,
      textAlign: 'center',
      padding: 20,
      margin: 50,
      width: 400,
      display: 'inline-block'
    };
  }


  render() {
    return(
      <div>
        <div style={this.titleStyle}>
          Quote GeneREACTor!
        </div>
      </div>
    );
  }
}

export default Quote;
