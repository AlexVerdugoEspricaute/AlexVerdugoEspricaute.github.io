
button = document.querySelector(".presentation > ion-icon");
menu = document.querySelector(".presentation2 > div:last-child");

button.addEventListener('click',()=>{
    menu.classList.toggle("active");
})

//----------------load-----------------------
window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;

        for(var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if(element.getBoundingClientRect().top < screenSize) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }

    }
});



// -----------------Menu-----------------

var btnContainer = document.querySelector(".menu");  

var btns = btnContainer.getElementsByClassName("btn");       


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
//----------------------------------------------------------
var about = document.querySelector(".about")
var resume = document.querySelector(".resume")
var projects = document.querySelector(".projects")
var contact = document.querySelector(".contact")

btns[0].addEventListener("click", function (){
  about.style.setProperty("display", "flex"); 
  about.style.setProperty("flex-direction", "column"); 
  resume.style.setProperty("display", "none");
  projects.style.setProperty("display", "none");
  contact.style.setProperty("display", "none");
})

btns[1].addEventListener("click", function (){
  resume.style.setProperty("display", "flex"); 
  resume.style.setProperty("flex-direction", "column"); 
  about.style.setProperty("display", "none");
  projects.style.setProperty("display", "none");
  contact.style.setProperty("display", "none");
})

btns[2].addEventListener("click", function (){
  projects.style.setProperty("display", "flex"); 
  projects.style.setProperty("flex-direction", "column"); 
  resume.style.setProperty("display", "none");
  about.style.setProperty("display", "none");
  contact.style.setProperty("display", "none");
})

btns[3].addEventListener("click", function (){
  contact.style.setProperty("display", "flex"); 
  contact.style.setProperty("flex-direction", "column"); 
  resume.style.setProperty("display", "none");
  projects.style.setProperty("display", "none");
  about.style.setProperty("display", "none");
})
















