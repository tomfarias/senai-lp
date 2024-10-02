const frm = document.querySelector("form");
const resp1 = document.querySelector("outResp1");
const resp2 = document.querySelector("inNota2");
const resp3 = document.querySelector("outresp3");

frm.addEventListener("submit", (e) => {

    const veiculo = frm.inVeiculo.value; // obter os conteúdo dos campos

    const preco = Number(frm.inpreco.value); // 

    const entrada = preco * 0.50 // calcular valor da entrada

    const parcela = (preco * 0.50) / 12 // ... e das parcelas

    resp1.innerText = 'Promocao: $ {veiculo}'  // exibir as respostas
    resp2.innerText = `Entrada de R$: ${Entrada.tofixed(2)}`
    resp3.innerText = `+12x de R$: ${parcela.toFixed(2)}`

    e.preventDefault();
})
