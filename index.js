
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


// -----------------Typewriter-----------------
const h12 = document.querySelector('.h12');
if (h12) {
    const originalText = h12.textContent;
    h12.textContent = '';
    h12.classList.add('typing');
    let i = 0;
    const typeTimer = setInterval(() => {
        h12.textContent += originalText[i];
        i++;
        if (i >= originalText.length) {
            clearInterval(typeTimer);
            setTimeout(() => h12.classList.remove('typing'), 2000);
        }
    }, 75);
}

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

// -----------------Scroll progress bar-----------------
const progressBar = document.getElementById('progress-bar');
if (progressBar) {
    window.addEventListener('scroll', function() {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// -----------------Tech Carousel Drag-----------------
(function() {
    var track = document.querySelector('.technologies > div');
    if (!track) return;

    var isDragging = false;
    var startX = 0;
    var startTranslate = 0;
    var ANIM_DURATION = 30;

    function getTranslateX() {
        var t = window.getComputedStyle(track).transform;
        if (!t || t === 'none') return 0;
        return new DOMMatrix(t).m41;
    }

    function restoreAnim() {
        var finalX   = getTranslateX();
        var trackW   = track.offsetWidth;
        var clamped  = Math.max(-trackW, Math.min(0, finalX));
        var delay    = -((Math.abs(clamped) / trackW) * ANIM_DURATION);
        track.style.transform = '';
        track.style.animation = 'scrollTech ' + ANIM_DURATION + 's linear ' + delay + 's infinite';
    }

    // Hover pause / resume
    track.addEventListener('mouseenter', function() {
        if (!isDragging) track.style.animationPlayState = 'paused';
    });
    track.addEventListener('mouseleave', function() {
        if (!isDragging) track.style.animationPlayState = 'running';
    });

    // Mouse drag
    track.addEventListener('mousedown', function(e) {
        if (e.button !== 0) return;
        isDragging    = true;
        startX        = e.clientX;
        startTranslate = getTranslateX();
        track.style.animation = 'none';
        track.style.transform = 'translateX(' + startTranslate + 'px)';
        track.classList.add('is-dragging');
        e.preventDefault();
    });
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        track.style.transform = 'translateX(' + (startTranslate + e.clientX - startX) + 'px)';
    });
    document.addEventListener('mouseup', function() {
        if (!isDragging) return;
        isDragging = false;
        track.classList.remove('is-dragging');
        restoreAnim();
    });

    // Touch drag
    track.addEventListener('touchstart', function(e) {
        startX        = e.touches[0].clientX;
        startTranslate = getTranslateX();
        track.style.animation = 'none';
        track.style.transform = 'translateX(' + startTranslate + 'px)';
    }, { passive: true });
    track.addEventListener('touchmove', function(e) {
        track.style.transform = 'translateX(' + (startTranslate + e.touches[0].clientX - startX) + 'px)';
    }, { passive: true });
    track.addEventListener('touchend', restoreAnim);
})();

// -----------------Timeline slide-in-----------------
const timelineCards = document.querySelectorAll('.education > div:last-child > div, .experience > div:last-child > div');
timelineCards.forEach(function(card) {
    card.classList.add('slide-in-hidden');
});
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    timelineCards.forEach(function(card) { observer.observe(card); });
}

















