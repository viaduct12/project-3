
import React from 'react';

class Searchbar extends React.Component {
    state = {
        term: 'Default text'
    };
    
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search" >Search</label>
                        <input onChange={this.handleChange} name='video-search' type="type" value={this.state.term}/>
                        <button className="astext" type="submit">submit</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default Searchbar;