import React, { Component } from "react";

const InitialNotesList = [
  {
    title: "ReactJs",
    description: "Reactjs is a JS library",
    link: "https://amazon.com",
    mediaType: "image",
    mediaLink: "https://via.placeholder.com/150",
    backgroundColor: "#ffffff"
  },
  {
    title: "NodeJS",
    description: "Reactjs is a JS library",
    link: "https://amazon.com",
    mediaType: "video",
    mediaLink: "https://www.w3schools.com/html/mov_bbb.mp4",
    backgroundColor: "#ffffff"
  },
  {
    title: "JavaScript",
    description: "Reactjs is a JS library",
    link: "https://amazon.com",
    mediaType: "image",
    mediaLink: "https://via.placeholder.com/150",
    backgroundColor: "#ffffff"
  }
];

class NoteForm extends Component {
  state = {
    NotesList: InitialNotesList,
    title: "",
    description: "",
    link: "",
    mediaType: "image",
    mediaLink: "",
    backgroundColor: "#ffffff"
  };

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  };

  onChangeLink = (event) => {
    this.setState({ link: event.target.value });
  };

  onChangeMediaType = (event) => {
    this.setState({ mediaType: event.target.value });
  };

  onChangeMediaLink = (event) => {
    this.setState({ mediaLink: event.target.value });
  };

  onChangeBackgroundColor = (event) => {
    this.setState({ backgroundColor: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    // Add the new note to the list
    const newNote = {
      title: this.state.title,
      description: this.state.description,
      link: this.state.link,
      mediaType: this.state.mediaType,
      mediaLink: this.state.mediaLink,
      backgroundColor: this.state.backgroundColor
    };
    this.setState((prevState) => ({
      NotesList: [...prevState.NotesList, newNote],
      title: "",
      description: "",
      link: "",
      mediaType: "image",
      mediaLink: "",
      backgroundColor: "#ffffff"
    }));
  };

  render() {
    const { searchQuery } = this.props;
    const { NotesList, title, description, link, mediaType, mediaLink, backgroundColor } = this.state;

    // Filter notes based on search query
    const filteredNotes = NotesList.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="note-form-container">
        <h1>NoteForm</h1>

        <form onSubmit={this.onSubmitForm}>
          <label>Enter Title</label>
          <input type="text" value={title} onChange={this.onChangeTitle} />
          <label>Enter Description</label>
          <textarea
            value={description}
            onChange={this.onChangeDescription}
          />
          <label>Enter Link</label>
          <input type="text" value={link} onChange={this.onChangeLink} />

          <label>Media Type</label>
          <select value={mediaType} onChange={this.onChangeMediaType}>
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>

          <label>Media Link</label>
          <input
            type="text"
            value={mediaLink}
            onChange={this.onChangeMediaLink}
          />

          <label>Background Color</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={this.onChangeBackgroundColor}
          />

          <button type="submit">ADD</button>
        </form>

        <h2>Notes List:</h2>
        {/* Render filtered notes */}
        {filteredNotes.map((note, index) => (
          <div
            key={index}
            style={{ backgroundColor: note.backgroundColor, padding: "10px", margin: "10px" }}
          >
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            {note.mediaType === "image" ? (
              <img src={note.mediaLink} alt="Note media" style={{ maxWidth: "100%" }} />
            ) : (
              <video controls style={{ maxWidth: "100%" }}>
                <source src={note.mediaLink} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default NoteForm;
