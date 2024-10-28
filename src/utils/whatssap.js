export function HandleWhatsClick({ phoneNumber, message }) {
  // Chama a função de rastreamento de conversão
  window.gtag_report_conversion(); // Use a função global definida
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}
