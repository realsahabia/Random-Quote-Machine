import React, { Component } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const quoteData = [
  { text: 'The purpose of our lives is to be happy.', author: "Dalai Lama" },
  { text: 'Life is what happens when you’re busy making other plans.', author: "John Lennon" },
  { text: 'Get busy living or get busy dying.', author: "Stephen King" },
  { text: 'You only live once, but if you do it right, once is enough.', author: "Mae West" },
  { text: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.', author: "Thomas A. Edison" },
];

//component for quotebox
class QuoteBox extends Component {
  constructor(props) {
    super(props);
    
    this.state ={
      quote: '',
      author: ''
    }
    
    this.getQuote = this.getQuote.bind(this)
  }
   
  //method to fetch quotes from quoteData
  getQuote() {
   //A variable to index quotes randomly
   const randomIndex = Math.floor(Math.random() * quoteData.length)
   const randomQuote = quoteData[randomIndex]
    
   //update local state after fetching random quote
   this.setState({
        quote: randomQuote.text,
        author: randomQuote.author
      });
  }
  
  //displays the random quote on first load
  componentDidMount(){
    this.getQuote();
  }
    
  render() {
    const {quote, author} = this.state;
    return (
      <div id="quote-box">
        <p id="text"><i class="fa fa-quote-left" aria-hidden="true"></i>
{quote}</p>
        <p id="author">{'~ ' + author}</p>
        <div className="actions">
        <button id="new-quote" onClick={this.getQuote}>New Quote</button>
        <a id="tweet-quote" href={`twitter.com/intent/tweet?text="${quote}" - ${author}`} target="_black">
<i className="fa fa-twitter-square" aria-hidden="true"></i>  
          </a>
        </div>
     </div>
    );
  }
};

//main component
const App = () => {
  return (
      <div className="main">
        <QuoteBox />
      </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#app"));
