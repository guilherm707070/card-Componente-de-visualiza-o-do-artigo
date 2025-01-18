const compartilhar = document.getElementById("compartilhar");
const redeSociais= document.getElementById("rede-sociais");
const clicado= document.getElementById("otra-redes")


compartilhar.addEventListener("click",function(){
    redeSociais.style.display="block"
})
clicado.addEventListener("mouseleave",function(){
    redeSociais.style.display="none"
})
redeSociais.addEventListener("",function(){
    redeSociais.style.display="none"
})
