import React from 'react';
import '../index.css'; // Assurez-vous d'avoir un fichier CSS nommé Liste.css

function Liste() {
  const elements = ['Élément 1', 'Élément 2', 'Élément 3', 'Élément 4'];

  return (
    <div className="liste-container">
      <ul className="content-style">
        {elements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default Liste;
