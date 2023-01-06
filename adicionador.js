

let botadd = document.querySelector("#add").addEventListener("click", () => abrirpoupap("idadicionador"))

function abrirpoupap(idjanela)
{
    let janela = document.getElementById(idjanela)
    let fechar = document.getElementById("close")
    let fecharicone = document.getElementById("closeicon")

    console.log(janela)
    // cadicionar classe ativadora
    janela.classList.add("ativado")
    
    //para monitorar onde clica e sair
    janela.addEventListener("click", (ev)=>
    {

        if(ev.target == janela || ev.target == fechar ||ev.target == fecharicone)
        {
            janela.classList.remove("ativado")
        }
    })
    
}

const btnadstar = document.getElementById("adiciona").addEventListener("click", ()=>{

    let nome = document.getElementById("nomestar").value
    let imagem = document.getElementById("imglinkstar").value
    let link = document.getElementById("linkstar").value

    if(nome && imagem && link)
    {

        let caixa = document.getElementById("caixadasstars")
        
        caixa.innerHTML +=` <div class="caixa">
        <div class="caixote imagem">
            <img src="${imagem}" alt="${nome}">
        </div>
        <div class="caixote conteudo">
            <a href="${link}" target="_blank">${nome}</a>
            <p>
                13 de Junho de 1985
            </p>
        </div>
    </div>`

    document.getElementById("idadicionador").classList.remove("ativado")

    }


})