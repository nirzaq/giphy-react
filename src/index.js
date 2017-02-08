import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar'
import GifList from './GifList'
import request from 'superagent'
import './styles/app.css';


class App extends React.Component {
  
  constructor(props) {
      super(props)

      this.state = {
          gifs:[]
      }

      this.handleTermChange = this.handleTermChange.bind(this);
  }
  
  
  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
    
    request.get(url, (err, res) => {
     this.setState({ gifs: res.body.data })
     console.log(res.body.data)
     });
    // fetch(url)
    // .then(response => response.json())
    // .then(result => {
    //   this.setState({gif: result})
    //   console.log(result)
    // })
    }


  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
