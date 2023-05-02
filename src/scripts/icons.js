
//não chamar essa função
function codeToIcon(weather, day) {

  if(weather === 0 || weather === 1 || weather === 2 && day === 0)
    return '../images/icon-noite.jpg';
  else if(weather === 0 || weather === 1 || weather === 2 && day === 1)
    return '../images/icon-diasol.jpg';
  else if(weather === 3 || weather === 45 || weather === 48 && day === 0)
    return '../images/icon-noite-nublada.jpg';
  else if(weather === 3 || weather === 45 || weather === 48 && day === 1)
  return '../images/icon-nublado.jpg';

  switch (weather) {
      
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
      case 71:
      case 73:
      case 75:
      case 77:
      case 80:
      case 81:
      case 82:
      case 85:
      case 86:
        return '../images/icon-nublado.png';
        break;

      case 95:
      case 96:
      case 99:
        return '../images/icon-nublado.png';
        break;
      default:
        console.log("Código inválido");
    }
}


//chamar essa funcao
function changeIcon(weather, day){
  const url = codeToIcon(weather, day);
  return url;

}