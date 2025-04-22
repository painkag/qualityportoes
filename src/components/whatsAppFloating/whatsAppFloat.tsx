import React from "react";
import { HandleWhatsClick } from "../../utils/whatssap";

export const FloatingWhatsAppButton = () => {
  return (
    <div
      onClick={() => HandleWhatsClick({
        phoneNumber: '5511977154129', // sem o '+'
        message: 'Olá, gostaria de mais informações de serralheria.'
      })}
      className="whatsapp-float"
      style={{ cursor: 'pointer' }}
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp.png"
        alt="WhatsApp"
      />
    </div>
  );
};
