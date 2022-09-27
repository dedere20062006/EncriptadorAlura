const inputTexto= document.querySelector(".TextoAEncriptar");
const mensaje= document.querySelector(".TextoEncriptado");

//Botón Encriptar
function BotonEncriptar() {
    const TextoEncriptado = encriptar(inputTexto.value)
    mensaje.value = TextoEncriptado
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
    BotonCopiar.style.display = "block"
  }

  //Encriptar mensaje

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringEncriptada.includes(matrizCodigo[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
      }
    }
    return stringEncriptada;
  }
  //Botón desencriptar

function BotonDesencriptar() {
  const TextoEncriptado = desencriptar(inputTexto.value);
  mensaje.value = TextoEncriptado
  inputTexto.value = ""
  mensaje.style.backgroundImage="none"
  BotonCopiar.style.display = "block"
}

//Desencriptar mensaje

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringDesencriptada.includes(matrizCodigo[i][0])) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
      }
    }
    return stringDesencriptada;
  }
  
  //Botón copiar
  
  function Copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto copiado");
    mensaje.style.backgroundImage= "";
  Copiar.style.display="none";
  
  }