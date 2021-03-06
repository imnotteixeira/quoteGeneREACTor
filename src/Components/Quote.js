import React, { Component } from 'react';


class Quote extends Component {

  constructor(props) {
    super(props);

    this.quoteStyle = {
      fontSize: 28,
      border: '2px solid #45aacc',
      backgroundColor: '#aaddff',
      borderRadius: 10,
      textAlign: 'center',
      display: 'inline-block',
      fontFamily: 'TimesNewRoman',
      padding: 10,
      width: 1000
    };
  }


  render() {
    return (
      <div>
        <p style={this.quoteStyle}>
          {this.props.quote} - {this.props.author}
        </p>
      </div>
    );
  }
}

export default Quote;
