document.getElementById("botaoCodifica").addEventListener("click", cipherEncode);
document.getElementById("botaoDecodifica").addEventListener("click", cipherDecode);

//******

function cipherEncode() {
  let msgNormal = document.getElementById("mensagem").value;
  let deslocamento = parseInt(document.getElementById("offset").value);
  let resultado = cifra1(msgNormal,deslocamento);

  document.getElementById("textoMensagem").innerHTML = "Sua mensagem é:";
  document.getElementById("mensagemCodificada").innerHTML = resultado;
  document.getElementById("mensagemCodificada").style.display = 'block';
}

function cifra1 (msgNormal, deslocamento) {
  let codLetra = "";
  let msgCodificada = "";
  for (let i = 0; i < msgNormal.length; i++) {
    if (msgNormal.charCodeAt(i) >= 65 && msgNormal.charCodeAt(i) <=90){
      codLetra = (((msgNormal.charCodeAt(i)-65)+deslocamento) %26) + 65;
    }
    else if (msgNormal.charCodeAt(i) >= 97 && msgNormal.charCodeAt(i) <=122){
      codLetra = (((msgNormal.charCodeAt(i)-97)+deslocamento) %26) + 97;
    }
    else if (msgNormal.charCodeAt(i) >= 32){
      codLetra = 32;
    }
    msgCodificada += String.fromCharCode(codLetra);
   }
   return msgCodificada;
}

//******

function cipherDecode() {
  let msgNormal = document.getElementById("mensagem").value;
  let deslocamento = parseInt(document.getElementById("offset").value);
  let resultado = cifra2(msgNormal,deslocamento);

  document.getElementById("textoMensagem").innerHTML = "Sua mensagem é:";
  document.getElementById("mensagemCodificada").innerHTML = resultado;
  document.getElementById("mensagemCodificada").style.display = 'block';
}

function cifra2 (msgNormal, deslocamento) {
  let codLetra = "";
  let msgCodificada = "";
  for (let i = 0; i < msgNormal.length; i++) {
    if (msgNormal.charCodeAt(i) >= 65 && msgNormal.charCodeAt(i) <=90){
      codLetra = (((((msgNormal.charCodeAt(i)-65)-deslocamento)%26)+26) %26) + 65;
    }
    else if (msgNormal.charCodeAt(i) >= 97 && msgNormal.charCodeAt(i) <=122){
      codLetra = (((((msgNormal.charCodeAt(i)-97)-deslocamento)%26)+26) %26) + 97;
    }
    else if (msgNormal.charCodeAt(i) === 32){
      codLetra = 32;
    }
    msgCodificada += String.fromCharCode(codLetra);
   }
   return msgCodificada;
}