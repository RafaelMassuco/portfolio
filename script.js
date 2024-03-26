if (window.innerWidth > 1024) {
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 30) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});


window.reveal = ScrollReveal({reset:true})

reveal.reveal('.efeito-inicio, .efeito-sobre, .efeito-projeto, .efeito-contato', {
    duration: 2000,
    distance: '20px',
    delay: 200
})
reveal.reveal('.efeito-img', {
    duration: 2000,
    distance: '20px',
    delay: 800
})
reveal.reveal('.efeito-atraso1', {
    duration: 2000,
    distance: '20px',
    delay: 1200
})
reveal.reveal('.efeito-atraso2', {
    duration: 2000,
    distance: '20px',
    delay: 1500
})
reveal.reveal('.efeito-atraso3', {
    duration: 2000,
    distance: '20px',
    delay: 1800
})
reveal.reveal('.efeito-atrasoform1', {
    duration: 2000,
    distance: '20px',
    delay: 1000
})
reveal.reveal('.efeito-atrasoform2', {
    duration: 2000,
    distance: '20px',
    delay: 1200
})
reveal.reveal('.efeito-atrasoform3', {
    duration: 2000,
    distance: '20px',
    delay: 1400
})
reveal.reveal('.efeito-atrasoform4', {
    duration: 2000,
    distance: '20px',
    delay: 1600
})
reveal.reveal('.efeito-atrasoenviar', {
    duration: 2000,
    distance: '120px',
    delay: 2000
})
}