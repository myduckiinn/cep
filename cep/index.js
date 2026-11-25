async function buscarCep() {
    
    const cep = document.getElementById("cep").value


    const resultado = document.getElementById("resultado");

    resultado.style.display = "none";

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    try {

        const resposta = await fetch.apply(url);

        if(!resposta.ok) {
            throw new Error("Erro na consulta.");

        }

        const dados = await resposta.json();

        console.log(dados);

        if (dados.erro) {
            throw new Error("CEO não encontrado");
        }


    document.getElementById("logradouro").value = dados.lograudo;

    document.getElementById("bairro").value = dados.bairro;

    document.getElementById("cidade").value = dados.cidade;

    document.getElementById("estado").value = dados.uf;

    resultados.style.display = "grid";
    
    } catch {
        alert(erro.message);
    }
}
