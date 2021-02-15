const navSlide =() => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  
  burger.addEventListener('click',() =>{
    //Toggle Nav
    nav.classList.toggle('nav-active');
  
    //Animate Links
    navLinks.forEach((link, index)=>{
      if(link.style.animation){
        link.style.animation = '';
      }
      else{
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5 }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle('toggle');
  });
}
$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar'). addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
  })
});


var delayInMilliseconds = 1000; //1 second

setTimeout(function() {
  
  var typed = new Typed(".typing",{
    strings: ["I am Kimia Asarroodi","A Junior Web Developer"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: false,
  });
  
}, delayInMilliseconds);
navSlide();