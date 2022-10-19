





//Catálogo de Parceiros:
const parceiros = {
  axis: {
    img: "assets/img/parceiros/Axis.gif",
    // marca: "Axis",
    // description:
    //   "Axis Communications AB is a Swedish manufacturer of network cameras, access control, and network audio devices for the physical security and video surveillance industries. Wikipedia",
    // site: `<a href="https://www.axis.com/" class="modal-link" target="blank">Axis</a>`,
  },
  bitdefender: {
    img: "assets/img/parceiros/Bitdefender.png",
    // marca: "bitdefender",
    // description:
    //   "Proteção contra todas as ameaças novas e existentes. Impacto mínimo no desempenho.",
    // site: `<a href="https://www.bitdefender.com.br/" class="modal-link" target="blank">Bitdefender</a>`,
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

// TODO: acrescentar no final:
// window.addEventListener("DOMContentLoaded", function(){
    // console.log("addEventListener 1 !!!!");

//Selecionando local para criar carousel de Parceiros com arquivo externo:
const carouselParceirosHtml = document.getElementById("carouselParceiros");

//Criando elementos HTML com JavaScript / Criando Carousel de Parceiros:
// let parceiro = 0;
for (let parceiro of Object.keys(parceiros)) {
  var logoParceiro = document.createElement("div");
  logoParceiro.setAttribute("id", parceiro);
  logoParceiro.innerHTML = `<img class="imgParceiros" src="${parceiros[parceiro].img}">`;

  carouselParceirosHtml.appendChild(logoParceiro);
  console.log(logoParceiro);
  
}
  








