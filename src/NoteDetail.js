import React from 'react';

const NoteDetail = ({ note }) => {
  return (
    <div className="note-details">
      <h2>{note.title}</h2>
      <p>{note.details}</p>
      <p>Timestamp: {note.timestamp.toLocaleString()}</p>
    </div>
  );
}

export default NoteDetail;
