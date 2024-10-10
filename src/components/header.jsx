import React, { useState, useEffect } from "react";
import { HandleWhatsClick } from "../utils/whatssap";

export const Header = (props) => {
  // Lista de URLs das imagens de fundo
  const images = [
    "../img/mao.jpg",
    "../img/oleo2.jpg",
    "../img/motor2.jpg",
  ];

  // Estado para controlar o índice da imagem atual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Efeito para trocar a imagem a cada 5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Troca a imagem a cada 5 segundos

    // Limpeza do intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header id="header">
      <div className="intro" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  onClick={() => HandleWhatsClick({
                    phoneNumber: '+5511977154129',
                    message: 'Olá, gostaria de mais informações.'
                  })}
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Entre em contato
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
