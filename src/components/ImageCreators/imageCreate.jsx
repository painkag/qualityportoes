import React, { useState } from "react";
const ImageCreators = () => {
  const [showCreators, setShowCreators] = useState(false);

  const handleToggle = () => {
    setShowCreators((prev) => !prev);
  };

  const creators = [
    { name: "Imagem de StockSnap por Pixabay", source: "/img/jumper.jpg"},
    { name: "Imagem de Ryan McGuire por Pixabay", source: "/img/man.jpg" },
    { name: "Creator 3", source: "Link to image 3" },
    // Adicione mais criadores conforme necessário
  ];

  return (
    <div>
      <button onClick={handleToggle} style={{ marginTop: "20px", padding: "10px", fontSize: "16px" }}>
        {showCreators ? "Esconder imagem do criador" : "Mostrar imagem do criador"}
      </button>
      {showCreators && (
        <div style={{ marginTop: "10px" }}>
          <h3>nomes dos criadores:</h3>
          <ul>
            {creators.map((creator, index) => (
              <li key={index}>
                {creator.name} - <a href={creator.source} target="_blank" rel="noopener noreferrer">Ver imagem</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageCreators;
