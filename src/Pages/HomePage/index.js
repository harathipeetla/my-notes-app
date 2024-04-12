import React, { Component } from 'react';
import NoteForm from '../../components/NoteForm';

class NotesHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '', // Initial state of search query
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <div>
        <h1>My Notes App</h1>
        {/* Search bar */}
        <input
          type='search'
          value={searchQuery}
          onChange={this.handleSearchChange}
          placeholder="Search by title..."
        />
        {/* NoteForm with searchQuery passed as prop */}
        <NoteForm searchQuery={searchQuery} />
      </div>
    );
  }
}

export default NotesHomepage;

