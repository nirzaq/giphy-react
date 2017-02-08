import React from 'react'

class SearchBar extends React.Component {
    
    state = {
        term: ''
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div>
            <input onChange={event => this.onInputChange(event.target.value)} type="text" placeholder="Your search here..."/>
            </div>
        );
    }   
    
}

export default SearchBar