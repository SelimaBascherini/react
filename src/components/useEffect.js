import React, { useState, useEffect } from 'react';

function MiaComponente() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Si è verificato un errore durante il recupero dei dati:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dati dall'API:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}