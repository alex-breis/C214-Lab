function calcularIMC(peso, altura) {
    if (altura <= 0) {
      return 'NaN'; // Retorna "NaN" se a altura for igual a zero
    }
  
    const alturaMetros = altura / 100; // Converte altura de centímetros para metros
    const resultado = (peso / (alturaMetros * alturaMetros)).toFixed(2); // Calcula o IMC com duas casas decimais

    if (resultado < 0){
        return 'NaN';
    } else {
        return resultado;
    }
    
}

module.exports = { calcularIMC }; // Exporta a função calcularIMC