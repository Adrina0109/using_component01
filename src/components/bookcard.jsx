import React from 'react';

function BookCard({ id, name, image, author, genre }) {
  const cardStyle = {
    width: '250px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    margin: '15px',
  };

  const imgStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderBottom: '1px solid #e0e0e0',
  };

  const infoStyle = {
    padding: '15px',
  };

  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '10px',
  };

  const genreStyle = {
    fontSize: '0.9rem',
    color: '#555',
    fontStyle: 'italic',
    margin: '5px 0',
  };

  const authorStyle = {
    fontSize: '0.9rem',
    color: '#555',
    fontWeight: '500',
    margin: '5px 0',
  };


  return (
    <div className="book-card" style={cardStyle}>
      <img src={image} alt={name} style={imgStyle} />
      <div style={infoStyle}>
        <h3 style={titleStyle}>{name}</h3>
        <p style={genreStyle}>Genre: {genre}</p>
        <p style={authorStyle}>Author: {author}</p>
      </div>
    </div>
  );
}

export default BookCard;
