function pegar_data_e_hora()
{
    let data_da_anotacao = Date.now();
    let formatador_de_Data = new Intl.DateTimeFormat('PT-BR',{dateStyle:'short',
     timeStyle:'short'});
    let data_formatada = formatador_de_Data.format(data_da_anotacao)
    console.log(data_formatada);
    return data_formatada;
}
 function adicionar_anotacoes()
 {
    let minha_anotacao = document.getElementById("input_anotacao").value;
    let data_e_hora = pegar_data_e_hora();
    let nova_linha = data_e_hora +":"+ minha_anotacao;
    let novo_paragrafo = document.createElement('p');
    novo_paragrafo.innerHTML= nova_linha;
    div_anotacoes = document.getElementById("div_anotacoes");
    div_anotacoes.appenChild(novo_paragrafo);
 }