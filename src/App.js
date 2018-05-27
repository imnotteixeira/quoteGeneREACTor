import React, { Component } from 'react';
import PageTitle from './Components/PageTitle';
import Quote from './Components/Quote';
import GetQuoteBtn from './Components/GetQuoteBtn';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      currentQuote : {
        quote : "",
        author: ""
      }
    };


  }

  updateQuote() {
    fetch('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
          {
            headers: {
              'X-Mashape-Key': 'trnzWaUsbnmshEjf1arJgVYCG6oKp1qcweDjsnPqndxlUy8CiB',
              'Accept': 'application/json'
            },
          })
      .then(resposnse => resposnse.json())
      .then(resObject => {
        // console.dir(myJson[0].quote);
        let newState = this.state;
        newState.currentQuote.quote = resObject[0].quote;
        newState.currentQuote.author = resObject[0].author;
        this.setState(newState);
      });
  }

  render() {
    if(this.state.currentQuote.quote != '') {
      return (
        <div className="App">
          <PageTitle />
          <Quote quote={this.state.currentQuote.quote} author={this.state.currentQuote.author}/>
          <GetQuoteBtn onClick={this.updateQuote.bind(this)}/>
        </div>
      );
    } else {
      return (
        <div className="App">
          <PageTitle />
          <GetQuoteBtn onClick={this.updateQuote.bind(this)}/>
        </div>
      );
    }
  }
}

export default App;
