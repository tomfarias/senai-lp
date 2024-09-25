// criar uma referencia ao form e ao h3 ( onde será exibida a resposta)
const frm =document.querySelector("form");
const resp= document.querySelector("h3");

// criar um 'ouvinte' de evento, acinado quando o botão submit for clicado
frm.addEventListener("submit", (e)=>{
    const nome = frm.innome.value;
    resp.innerText = `olá' ${nome}`;
    e.preventDefault(); // vai evitar que o form envio os dados pro destino.php
});