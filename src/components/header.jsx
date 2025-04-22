import React, { useState, useEffect } from "react";
import { HandleWhatsClick } from "../utils/whatssap";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importação do Font Awesome

export const Header = (props) => {
  const images = [
    "../img/portao.jpg",
    "../img/portao1.jpg",
    "../img/portao2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

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
                href="https://wa.me/5511977154129?text=Olá,%20gostaria%20de%20mais%20informações."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-custom btn-lg"
              >
                Entre em contato
                </a>
{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Ícone do WhatsApp no canto inferior direito */}
        <div
          className="whatsapp-icon"
          onClick={() => HandleWhatsClick({
            phoneNumber: '+5511977154129',
            message: 'Olá, gostaria de mais informações de serralheria.'
          })}
        >
          <i className="fab fa-whatsapp"></i>
        </div>
      </div>
    </header>
  );
};
