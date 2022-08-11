function leiamais() {

    var mais1 = document.getElementById("projeto-mais1");
    var mais2 = document.getElementById("projeto-mais2");
    var mais3 = document.getElementById("projeto-mais3");
    var bnt = document.getElementById("bntleiamais");





    if (mais1.style.display === "inline") {
        mais1.style.display = "none";
        mais2.style.display = "none";
        mais3.style.display = "none";
        bnt.innerHTML = "Ver mais";
    }

    else {
        mais1.style.display = "inline";
        mais2.style.display = "inline";
        mais3.style.display = "inline";
        bnt.innerHTML = "Ver menos";
    }

}





/**
 * troca o html conforme o mouse entra e sai da do elemento passado no primeiro parametro
 * @param {string} id o id do elemento que vai acionar a troca da mensagem
 * @param {string} description mensagem que vai ser trocada
 */
function alterardescricao(id, description) {

    var descricao = document.getElementById("texto-descricao");
    var iconhtm = document.getElementById(id)
    
    iconhtm.addEventListener("mouseover", function () {
        descricao.innerHTML = description;


    })


    iconhtm.addEventListener("mouseleave", function () {
        descricao.innerHTML = "<p>/* Passe o mouse por cima de alguma habilidade para ler a descrição </p>";
    })
}


alterardescricao("html-icon", "<p></p><p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br> <p></p></p>")
alterardescricao("css-icon", "<p></p><p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br> <p></p></p>")
alterardescricao("javascript-icon", "<p></p><p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br> <p></p></p>")
alterardescricao("git-icon", "<p></p><p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br> <p></p></p>")
alterardescricao("github-icon", "<p></p><p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br> <p></p></p>")




