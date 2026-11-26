async function loadData(cep) {
    const RESPONSE = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    return await RESPONSE.json()
}

let cepDigitado = Number(prompt("digite um cep: "));

let dados = await loadData(cepDigitado);

console.log(dados)

//mostrando os dados no html

let body = document.querySelector("body");

body.innerHTML =
`
<div class="cep">
<h1> Busque por cep</h1>
<ul>
<li> Cep: ${dados.cep}</li>
<li> Logradouro: ${dados.logradouro}</li>
<li> Complemento: ${dados.complemento}</li>
<li> Unidade: ${dados.unidade}</li>
<li> Bairro: ${dados.bairro}</li>
<li> Localidade: ${dados.localidade}</li>
<li> Uf: ${dados.uf}</li>
<li> Estado: ${dados.estado}</li>
<li> Regiao: ${dados.regiao}</li>
<li> DDD: ${dados.ddd}</li>
</ul>
</div>
`