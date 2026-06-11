$(document).ready(function() {
    
    // 1. Rolagem Suave
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70
        }, 800);
    });

    // 2. Acordeão FAQ
    $('.faq-question').on('click', function() {
        $(this).next('.faq-answer').slideToggle();
        $('.faq-answer').not($(this).next()).slideUp();
    });

    // 3. Filtro de Projetos
    $('.filter-btn').on('click', function() {
        var filter = $(this).attr('data-filter');
        if(filter == 'all') {
            $('.project-item').fadeIn();
        } else {
            $('.project-item').hide();
            $('.project-item.' + filter).fadeIn();
        }
    });

    // 4. Validação Simples
    $('#contact-form').on('submit', function(e) {
        var nome = $('#name').val();
        if(nome.length < 3) {
            e.preventDefault();
            alert('Por favor, insira seu nome completo.');
        }
    });
});