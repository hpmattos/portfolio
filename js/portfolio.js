document.getElementsByClassName('hamburguer')[0].onclick = function(e){

   if(  document.getElementsByClassName('hamburguer')[0].classList.contains("selecionado") ){
    document.getElementsByClassName('hamburguer')[0].classList.remove("selecionado");
    document.getElementsByClassName('menu')[0].classList.remove("selecionado");
   }else{
      document.getElementsByClassName('hamburguer')[0].classList.add("selecionado");
      document.getElementsByClassName('menu')[0].classList.add("selecionado");
   }
}