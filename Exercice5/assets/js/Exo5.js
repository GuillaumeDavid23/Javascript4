//FONCTION DE BASE
function getStringLength(string){
    let stringLength;
    if(string.length === 1){
      stringLength = "La chaîne contient qu'un seul caractère";
      console.log(stringLength);
    } else {
      stringLength = `La chaîne contient ${string.length} caractères`;
      console.log(stringLength);
    }
    return stringLength;
  }

  //FONCTION FLECHEES
const getStringLengthArrow = (string) => {
    let stringLength;
    if(string.length === 1){
      stringLength = "La chaîne contient qu'un seul caractère";
      console.log(stringLength);
    } else {
      stringLength = `La chaîne contient ${string.length} caractères`;
      console.log(stringLength);
    }
    return stringLength;
}