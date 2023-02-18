
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
    ,
    {
        nome: "VIOLET MYERS",
        linkImg:"https://s203.erome.com/845/Jn8maTaS/rRedQ7Hd.jpeg?v=1653343730",
        linkSite:"https://pt.pornhub.com/video/search?search=violet+myers",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "DEE WILIAMS",
        linkImg:"https://images.xmilfporn.com/wp-content/uploads/2019/10/dee-williams-ass-reduction-1.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=dee+wiliams",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "ANISSA KATE",
        linkImg:"https://static-ca-cdn.eporner.com/gallery/Vx/gN/ks4X5yEgNVx/810738-anissa-kate-nude.jpg",
        linkSite:"https://pt.pornhub.com/pornstar/anissa-kate",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "NATASHA NICE",
        linkImg:"https://pbs.twimg.com/media/FYipkWOVQAAMS88.jpg:small",
        linkSite:"https://pt.pornhub.com/video/search?search=natasha+nice",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "LAUREN PHILIPS",
        linkImg:"https://static-ca-cdn.eporner.com/gallery/HY/s7/BrLrPiNs7HY/564285-lauren-phillips-nude.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=lauren+phillips",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "LA SIRENA 69",
        linkImg:"https://external-preview.redd.it/337gi_yzXKw1_1YJvlAicLeEajXHOJFARxv1ymmO7LY.jpg?auto=webp&s=e1d2aee062df0b9db5455d6c8d814f78f3b88c0c",
        linkSite:"https://pt.pornhub.com/video/search?search=la+sirena+69",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "MORIAH MILLS",
        linkImg:"https://www.sexosempudor.com/wp-content/uploads/2021/02/moriah-mills-mostram-os-peitoes-gostosos-18.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=moriah+mills",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "LEXI LUNA",
        linkImg:"https://cdn.erocurves.com/wp-content/uploads/2020/01/04/mylfboss_lexi_luna2_023.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=lexi+luna",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "ATUMN FALLS",
        linkImg:"https://adult-gazou-matome-channel.com/wp-content/uploads/2021/07/11860550_068_18b5-682x1024.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=autumn+falls",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "ADVOREE",
        linkImg:"https://cdn2.nudostar.com/wp-content/uploads/2020/04/Advoree_nudostar.com_14_18d72f.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=advoree",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "ALISSON TYLER",
        linkImg:"http://californiaboobies.com/wp-content/uploads/2017/09/Alison-Tyler.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=bunz+4+ever",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "AVA ADAMS",
        linkImg:"http://i.redd.it/f4a0u9plj6741.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=ava+addams",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "EVA NOTTY",
        linkImg:"https://e9r3m5w5.ssl.hwcdn.net/wp-content/uploads/2020/04/Naked-milf-Eve-Notty.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=eva+notty",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "BRANDI LOVE",
        linkImg:"https://cdn.celebritynakeds.com/brandi-love-127?interlace=1&quality=85&type=jpeg&url=https%3A%2F%2Fi.redd.it%2F0a3lhuw0a0b61.jpg&width=400&sign=IkgZ3ze_ehqU-TJjMvj9AWizVlfCjYKH2DfLSJwCh5o",
        linkSite:"https://pt.pornhub.com/video/search?search=brandi+love",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "BELLA BELZ",
        linkImg:"https://image-service-ht.project1content.com/8c9/414/294/99e/488/599/b09/0af/0c2/17d/10/model/profile_001.jpg?width=600&aspectRatio=3x4&imageVersion=1654789360",
        linkSite:"https://pt.pornhub.com/pornstar/bella-bellz",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "LULU CHU",
        linkImg:"https://cdni.pornpics.com/460/7/104/80354204/80354204_006_970b.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=lulu+chu",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "VALENTINA NAPPI",
        linkImg:"https://static-ca-cdn.eporner.com/gallery/mo/XR/P3ks5VhXRmo/322188-valentina-nappi-nude.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=valentina+nappi",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "CHERIE DEVILE",
        linkImg:"https://eoquetemprahj.com/wp-content/uploads/2016/04/Cherie-Deville.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=cherie+deville",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "ROSE MONROE",
        linkImg:"https://cdni.pornpics.com/460/7/106/56692604/56692604_032_e547.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=rose+monroe",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "VICTORIA JUNE",
        linkImg:"https://collectionofbestporn.com/media/misc/model1721.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=victoria+june",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "SKYLAR VOX",
        linkImg:"https://media.tits-guru.com/images/0d018c3b-952c-4a26-a740-ca0c725db2cf.jpeg",
        linkSite:"https://pt.pornhub.com/video/search?search=skylar+vox",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "LEAH GOTTI",
        linkImg:"https://static-ca-cdn.eporner.com/gallery/ZG/6k/NvvqHiT6kZG/428077-leah-gotti-nude.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=leah+gotti",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "YUM THE BOSS",
        linkImg:"https://tt-lm.xhcdn.com/000/142/525/avatar2.jpg.v1651755713",
        linkSite:"https://pt.pornhub.com/video/search?search=yum+the+boss",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "JASMINE JAE",
        linkImg:"https://newvrporn.com/img/models/jasmine-jae.jpg",
        linkSite:"https://pt.pornhub.com/pornstar/jasmine-jae",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "NICOLE ANISTON",
        linkImg:"https://icdn.oyoh.com/thumb/b/795562/nicole-aniston-muito-sexy-como-ela-banheira-ao-ar-livre-banheira-de-hidromassagem-totalmente-nua.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=nicole+aniston",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "GOGO FUCKME",
        linkImg:"https://imgs1cdn.adultempire.com/actors/652175h.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=gogo+fukme",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "RACHEL STAR",
        linkImg:"https://static-ca-cdn.eporner.com/gallery/de/ly/kQBJl4Hlyde/709502-rachel-starr-nude.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=rachel+starr",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "RYAN SMILES",
        linkImg:"https://hdxxx.photos/media/realitykings/ryan-smiles/call-pornstar-fotosex-porno/ryan-smiles-1.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=ryan+smiles",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "ALEXIS TEXAS",
        linkImg:"https://static-ca-cdn.eporner.com/gallery/ek/KO/N2mU5SYKOek/854729-alexis-texas-nude.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=alexis+texas",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "CASCA AKASHOVA",
        linkImg:"https://img7.hotnessrater.com/6512366/casca-akashova.jpg?w=500&h=750",
        linkSite:"https://pt.pornhub.com/pornstar/casca-akashova",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "jADA STEVENS",
        linkImg:"https://cdn.erocurves.com/wp-content/uploads/2019/03/12/jada-stevens-lingerie-strip.jpg",
        linkSite:"https://pt.pornhub.com/pornstar/jada-stevens",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "SARAH BANKS",
        linkImg:"https://www.mypornstarbook.net/pornstars/s/sarah_banks/gallery02/images/12.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=sarah+banks",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "ANGELA WHITE",
        linkImg:"https://www.ligadasnovinhas.com/wp-content/uploads/2022/06/angela-white-dando-a-buceta-0.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=angela+white",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "RYAN COONER",
        linkImg:"https://1.bp.blogspot.com/-Or5fPBvCTTc/XZrlPXlTAnI/AAAAAAAAg6E/nWQ9zicdbcc0BLJmJEJ6qLsKS2g_fKhnQCLcBGAsYHQ/s1600/loirona-madura-de-peitos-grandes-e-buceta-greluda-img7.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=ryan+conner",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "BLONDIE FASSER",
        linkImg:"https://fucklouder.com/images/thumbs/pornostars/blondie-fesser.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=blondie+fesser",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "PETA JENSEM",
        linkImg:"https://pbs.twimg.com/media/Cf7NzEyUIAAz9pk.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=peta+jensen",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "ALEXIS FAUX",
        linkImg:"https://i.ibb.co/86KnMd8/53574437-101-9333.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=alexis+fawx",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "HALLE HEYES",
        linkImg:"https://www.101modeling.com/site/talent/Halle%20Hayes/DSC_8769.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=halle+hayes",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "LUNA STAR",
        linkImg:"https://static-push.pornototale.com/media/default/pornstars/pornstar_4146.jpg?ver=1643908593",
        linkSite:"https://pt.pornhub.com/video/search?search=luna+star",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "LUCIE WILDE",
        linkImg:"https://b6z5d9u4.ssl.hwcdn.net/media/misc/model1089.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=lucie+wilde",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "KARMA RX",
        linkImg:"https://www.musasbrasil.com/wp-content/uploads/2021/06/Karma-Rx-Nua-27.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=karma+rx",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "LENA RHOADES",
        linkImg:"https://di-ph.rdtcdn.com/m=eQdw9f/pics/pornstars/000/255/751/thumb_1116181.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=lena+rhoades",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "RILEY REID",
        linkImg:"https://devkis.club/uploads/posts/2019-09/1568127293_riley-reid-erotika-9.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=riley+reid",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "ELSA JEAN",
        linkImg:"https://img5.hotnessrater.com/3658628/elsa-jean-pussy.jpg?w=4000&h=6000",
        linkSite:"https://pt.pornhub.com/video/search?search=elsa+jean",
        dataDeNascimento:"13 de Junho de 1985"
    }
    ,
    {
        nome: "MARINA VISCONTI",
        linkImg:"https://static-ca-cdn.eporner.com/gallery/Gy/y9/LmlsZply9Gy/557930-marina-visconti-nude.jpg",
        linkSite:"https://pt.pornhub.com/video/search?search=marina+visconti",
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