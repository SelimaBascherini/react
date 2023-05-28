import React, { useState } from 'react';

const WordList = () => {
  const [phrase, setPhrase] = useState('');
  const words = phrase.split(' ');

  const handleInputChange = (event) => {
    setPhrase(event.target.value);
  };

  return (
    <div>
      <input type="text" value={phrase} onChange={handleInputChange} />
      <ul>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}