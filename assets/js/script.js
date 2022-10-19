

    // Spinner
    var spinner = function () {
      setTimeout(function () {
          if ($('#spinner').length > 0) {
              $('#spinner').removeClass('show');
          }
      }, 1);
  };
  spinner();


window.addEventListener("DOMContentLoaded", function(){
    console.log(`PAGINA RELOAD com contador de clicks = ${iClick}`);

 // Instantiate all popovers in a docs or StackBlitz page
 document.querySelectorAll('[data-bs-toggle="popover"]').forEach(popover => {
  new bootstrap.Popover(popover)
}) //Fim Instantiate all popovers

$(window).ready(function(){
  $('.loader-box').fadeOut();

});

});


// Contador de clicks do botão "Saiba mais" para alterar nome do botão:
var iClick = 0;
const saibaMaisButton = document.getElementById("saibaMaisButton");

saibaMaisButton.addEventListener('click', (event) => {
  console.log("APERTOU O BOTÃO SAIBA MAIS!!!!!");
  iClick++;
  if(iClick==1){
    console.log("BOTAO CLICADO PELA 1A VEZ !!!");
    saibaMaisButton.innerHTML = "Saiba muito mais";

  }else if(iClick==2){
    console.log("BOTAO CLICADO PELA 2A VEZ !!!");
    saibaMaisButton.innerHTML = "Saiba muito mais nos enviando um email";


  }else if(iClick==3){
    console.log("BOTAO CLICADO PELA 3A VEZ !!!");
    saibaMaisButton.innerHTML = "Saiba muito mais nos enviando uma mensagem";

  }else if(iClick==4){
    console.log("BOTAO CLICADO PELA 4A VEZ !!!");
    saibaMaisButton.innerHTML = "Saiba muito mais através das nossas redes sociais";

    iClick = 0;
    saibaMaisButton.innerHTML = "Saiba mais";

  }

})





//Catálogo de Parceiros:
const parceiros = {
  axis: {
    img: "assets/img/parceiros/Axis.gif",
    
  },
  bitdefender: {
    img: "assets/img/parceiros/Bitdefender.png",
  
  },
  cisco: {
    img: "assets/img/parceiros/cisco.jpg",
  },
  mikroTik: {
    img: "assets/img/parceiros/mikroTik.png",
  
  },
  furukawa: {
    img: "assets/img/parceiros/Furukawa.jpg",
    
  },
  intelbras: {
    img: "assets/img/parceiros/Intelbras-verde-01.png",

  },
  microsoft: {
    img: "assets/img/parceiros/microsoft-logo-png-2396.png"
  },
  lenovo: {
    img: "assets/img/parceiros/red-logo-png-1149.png"
  },
  office365: {
    img: "assets/img/parceiros/office365.png"
  },
  intelbras: {
    img: "assets/img/parceiros/Intelbras-verde-01.png"
  },
  
};



//Selecionando local para criar carousel de Parceiros com arquivo externo:
const carouselParceirosHtml = document.getElementById("carouselParceiros");

//Criando elementos HTML com JavaScript / Criando Carousel de Parceiros:
// let parceiro = 0;
for (let parceiro of Object.keys(parceiros)) {
  var logoParceiro = document.createElement("div");
  logoParceiro.setAttribute("id", parceiro);
  logoParceiro.innerHTML = `<img class="imgParceiros" src="${parceiros[parceiro].img}">`;

  carouselParceirosHtml.appendChild(logoParceiro);
  // console.log(logoParceiro);
  
}
  


//Catálogo de Serviços:
class Service {
  constructor(name, img, desc, id) {
    this.name = name;
    this.img = img;
    this.desc = desc;
    this.id = id;
  }
}

let services = [
  new Service(
    "Outsourcing de TI",
    "./assets/img/OutsourcingTrackServices.jpeg",
    "Terceirização de TI é estratégia vantajosa para sua empresa aumentar a produtividade, otimizar o desempenho, agilizar processos e elevar a qualidade dos serviços prestados por uma empresa. Atendimento local com suporte de TI integral.",
    "0"
  ),
  new Service(
    "Suporte Técnico",
    "./assets/img/services/suporteTecnico.jpg",
    "Suporte técnico é responsabilidade do departamento de TI em manter a estabilidade dos serviços prestados, oferecendo apoio, esclarecimentos, manutenções preventivas e corretivas remota e presencial. Temos vários planos que se adaptam as necessidades dos clientes.",
    "1"
  ),
  new Service(
    "Assistência Técnica",
    "./assets/img/services/asssitenciaTecnica.jpg",
    "Realizamos manutenção preventiva e corretiva em servidores, micro computadores e notebooks e equipamentos de informática em geral, contamos com uma equipe de profissionais qualificados para resolver seus problemas de microinformatica.",
    "2"
  ),
  new Service(
    "Data Center e Servidores",
    "./assets/img/services/dataCenter.jpg",
    "A infraestrutura de TI consiste nos componentes e serviços que fornecem a base para sustentar todos os sistemas de informação de uma organização. Temos soluções completas de projetos de TI, desde cabeamento estruturado até implantação de Firewall e Servidores.",
    "3"
  ),
  new Service(
    "Controle de Ponto Eletrônico",
    "./assets/img/services/pontoEletronico.jpg",
    "Relógios de ponto eletrônico homologado pelo MTE e certificado pelo modelos, com diferentes combinações de leitores tela touch screen, possui diversos recursos e possibilidades de configuração. Aplicando-se a empresas de todos os portes.",
    "4"
  ),
  new Service(
    "Controle de Acesso",
    "./assets/img/services/ControleAcesso.jpg",
    "As catracas unem beleza e tecnologia para o controle de acesso a locais como recepções e portarias. Ela pode ser customizada de acordo com a necessidade do cliente e cada projeto, sendo possível escolher o tipo de leitor de identificação e adicionar cofre coletor de cartões.",
    "5"
  ),
  new Service(
    "Câmeras de Segurança - CFTV",
    "./assets/img/services/cftv.jpg",
    "Os projetos de câmeras de segurança são utilizados para monitoramento e vigilância, visando incidentes de segurança, vandalismo, acessos aos escritórios, fábricas, residencias, condomínios e empresas o comportamento indevido e outras ocorrências.",
    "6"
  ),
  new Service(
    "Monitoramento NOC",
    "./assets/img/services/noc.jpg",
    "Sua infraestrutura de TI monitorada por nossa equipe em tempo real, permitindo a ação proativa diante de eventuais falhas. Redução gradativa dos custos com pessoal e infraestrutura, além disso sua empresa conta com um suporte e atendimento dedicado.",
    "7"
  ),
  new Service(
    "Venda de equipamentos",
    "./assets/img/services/venda.jpg",
    "Trabalhamos com as principais marcas do mercado e com os maiores distribuidores do Brasil, revendemos equipamentos com garantia e ainda instalamos em sua empresa. Entre em contato com nosso departamento comercial e consulte nossas condições.",
    "8"
  ),
];

//Selecionando local para criar cards dinamicos de serviços:
const serviceContentHtml = document.getElementById("serviceContent");
const modalServiceHtml = new bootstrap.Modal("#modalService", {});


//Criando Cards Dinamicos de Serviços:
for (let service of Object.keys(services)) {
  var ServiceItem = document.createElement("div");
  // ServiceItem.setAttribute("id", service);
  ServiceItem.setAttribute("class", "col");
  ServiceItem.innerHTML = `<div class="card h-100">
            <img class="ServiceItem" src="${services[service].img}" width="100%" data-bs-toggle="modal" data-bs-target="#Modal-${services[service].id}">
            <div class="card-body">
              <h4 id="serviceTitulo" class="serviceTitulo">${services[service].name}</h4>
              <p id="serviceDesc" class=" serviceDesc card-text">${services[service].desc}</p></div></div></div>`;


    //Modal Dinamico de Serviços:
    ServiceItem.addEventListener("click", function (event) {
      document.getElementById("modalServiceImg").setAttribute("src", services[service]["img"]);
      document.getElementById("modalServiceName").innerHTML = services[service]["name"];
      document.getElementById("modalServiceDesc").innerHTML =
        services[service]["desc"];
        modalServiceHtml.show();
    });


  serviceContentHtml.appendChild(ServiceItem);
  // console.log(ServiceItem);
}

// Criando Modal Dinamico:






