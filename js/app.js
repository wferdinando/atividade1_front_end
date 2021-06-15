

function ofuscar() {
  texto = document.getElementById("text-original").value
  textoOfuscado = texto.replace(/e/gi, 'enter').replace(/i/g, "inis").replace(/o/gi, "omber").replace(/u/gi, "ufter").replace(/a/gi, "ais")

  document.getElementById("text-ofuscado").value = textoOfuscado
}

function desofuscar() {
  textoOfuscado = document.getElementById("text-ofuscado").value
  textoOriginal = texto.replace(/enter/gi, 'e').replace(/inis/g, "i").replace(/omber/gi, "o").replace(/ufter/gi, "uf").replace(/ais/gi, "a")

  document.getElementById("text-ofuscado").value = textoOriginal
}



// // disable right click
// document.addEventListener('contextmenu', event => event.preventDefault());

// document.onkeydown = function (e) {

//   // disable F12 key
//   if (e.keyCode == 123) {
//     return false;
//   }

//   // disable I key
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
//     return false;
//   }

//   // disable J key
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
//     return false;
//   }

//   // disable U key
//   if (e.ctrlKey && e.keyCode == 85) {
//     return false;
//   }
// }