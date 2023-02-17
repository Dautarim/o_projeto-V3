
const caixa = document.getElementById("caixadasstars")
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

/*=================================ADICIONAR TUDO COM O JAVACRIPT===========================================*/


const listaPstars = [
    {
        nome: "lela star",
        linkImg:"https://www.mypornstarbook.net/pornstars/l/lela_star/gallery104/images/13.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=lela+star",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "HARLEY DEAN",
        linkImg:"https://thepornmap.com/wp-content/uploads/2018/09/HarleyDean.jpg",
        linkSite:"https://pt.pornhub.com/pornstar/harley-dean",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "CECILIA LION",
        linkImg:"https://www.nudelas.com/wp-content/uploads/2020/09/cecilia-lion-10.jpg",
        linkSite:"https://pt.pornhub.com/pornstar/cecilia-lion",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "LISA ANN",
        linkImg:"https://www.musasbrasil.com/wp-content/uploads/2020/06/zzz_capa_lisa_ann-400x532.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=lisa+ann",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "KENDRA LUST",
        linkImg:"https://www.musasbrasil.com/wp-content/uploads/2020/06/zzz_capa_kendra.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=kendra+lust",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "SIRI DAHL",
        linkImg:"https://boomba.club/uploads/posts/2021-09/1632273990_2-boomba-club-p-siri-big-tits-porno-2.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=siri+dahl",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "NIA NACCI",
        linkImg:"https://gals.kindgirls.com/d009/nia_nicce_20_18938/nia_nicce_20_18938_7.jpg",
        linkSite:"https://pt.pornhub.com/pornstar/nia-nacci",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "LENA PAUL",
        linkImg:"https://suspiro.blog.br/wp-content/uploads/2021/11/Lena-Paul-4-768x1024.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=lena+paul",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "CODI VORE",
        linkImg:"https://cdn77.scoreuniverse.com/modeldir/data/posting/61/722/posting_61722_x_lg.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=codi+vore",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "CASSIDY BANKS",
        linkImg:"https://www.pandesiaworld.com/wp-content/uploads/2019/08/0046.jpeg",
        linkSite:"https://pt.pornhub.com/pornstar/cassidy-banks",
        dataDeNascimento:"13 de Junho de 1985"
    }
 
]

listaPstars.forEach(e => 
    {
        /*----caixa pai----*/
        const caixaPrincipal = document.createElement("div")
        caixaPrincipal.classList.add("caixa")

       
        /*----Primeiros filhos 2----*/
        const filho1Imagem = document.createElement("div")
        const filho2Nome = document.createElement("div")
        
        filho1Imagem.classList.add("caixote")
        filho1Imagem.classList.add("imagem")

            /*----Primeiros netos 1----*/
            const imagem = document.createElement("img")
            imagem.setAttribute("src",`${e.linkImg}`)

            filho1Imagem.appendChild(imagem)


        filho2Nome.classList.add("caixote")
        filho2Nome.classList.add("conteudo")

            /*----Primeiros netos 2----*/
            const linkSt = document.createElement("a")
            linkSt.innerText = e.nome
            linkSt.setAttribute("href",`${e.linkSite}`)
            linkSt.setAttribute("target","_blank")
            filho2Nome.appendChild(linkSt)

            const data = document.createElement("p")
            data.innerText = e.dataDeNascimento
            filho2Nome.appendChild(data)


        caixaPrincipal.appendChild(filho1Imagem)
        caixaPrincipal.appendChild(filho2Nome)

        caixa.appendChild(caixaPrincipal)

        // console.log(caixaPrincipal)
        
        
    })