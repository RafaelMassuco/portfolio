

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            menuButton.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});
if (window.innerWidth >= 1024) {
    window.addEventListener('scroll', function () {
        var header = document.querySelector('.header');
        if (window.scrollY > 40) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    })

    window.reveal = ScrollReveal({ reset: true })

    reveal.reveal('.efeito1', {
        duration: 2000,
        distance: '50px',

    })
    reveal.reveal('.efeito2', {
        duration: 2000,
        distance: '50px',
        delay: 200
    })
    reveal.reveal('.efeito3', {
        duration: 2000,
        distance: '50px',
        delay: 300
    })
    reveal.reveal('.efeito4', {
        duration: 2000,
        distance: '50px',
        delay: 400
    })
    reveal.reveal('.efeito-link1', {
        duration: 2000,
        distance: '50px',
        delay: 300
    })
    reveal.reveal('.efeito-link2', {
        duration: 2000,
        distance: '50px',
        delay: 400
    })
    reveal.reveal('.efeito-link3', {
        duration: 2000,
        distance: '50px',
        delay: 500
    })

    reveal.reveal('.efeito-proj', {
        duration: 2000,
        distance: '50px',
        delay: 500,
        reset: true
    })
    reveal.reveal('.efeito-proj2', {
        duration: 2000,
        distance: '50px',
        delay: 600,
        reset: true
    })
    reveal.reveal('.efeito-proj3', {
        duration: 2000,
        distance: '50px',
        delay: 700,
        reset: true
    })
    ScrollReveal().reveal('.proj', {
        afterReveal: function (off) {
            off.classList.add('reset-animation');
        }
    })
}
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 300 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeActiveLink();

    window.addEventListener('scroll', changeActiveLink);
});
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
}

function atualizarIdade() {
    const dataNascimento = '2005-01-27';
    const idade = calcularIdade(dataNascimento);
    document.getElementById('idade').textContent = idade;
}

window.onload = atualizarIdade;