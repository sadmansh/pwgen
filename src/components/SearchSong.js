import React, { Component } from 'react';

class SearchSong extends Component {
    render() {
        return (
            <div className="search">
                <input type="text" placeholder="What's your favorite song?" />
            </div>
        )
    }
}

export default SearchSong;