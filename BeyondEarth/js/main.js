$(function () { /* Configuração do Slick Carousel*/
    $(".slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        mobileFirst: true
    });
});

$("#nav-logo").click(function() { /* Função de rolagem ao clicar no logo*/
    $('html,body').animate({
        scrollTop: $(".destaque").offset().top
    }, 1000);
});

$("#nav-universo").click(function() { /* Função de rolagem ao clicar em "Universo"*/
    $('html,body').animate({
        scrollTop: $(".sobre").offset().top
    }, 1000);
});

$("#nav-sistema-solar").click(function() { /* Função de rolagem ao clicar em "Sistema Solar"*/
    $('html,body').animate({
        scrollTop: $(".sistema-solar").offset().top
    }, 1000);
});

$("#nav-rodape").click(function() { /* Funcção de rolagem ao clicar em "Rodapé"*/
    $('html,body').animate({
        scrollTop: $(".footer").offset().top
    }, 1000);
});

(function(){ /* Função para alternar entre as frases pré determinadas*/
      var frases = [ /* 3 frases armazenadas em um array*/
          '"O tempo e o espaço são modos pelos quais pensamos e não condições nas quais vivemos."',
          '"Se você entende como o universo funciona, de certa forma pode controlá-lo."',
          '"Nós somos feitos de poeira de estrelas."'
          ], i = 0;
      setInterval(function(){
          $('#troca-frase').fadeOut(function(){
              $(this).html(frases[i=(i+1)%frases.length]).fadeIn();
          });
      }, 5000); /* Troca a frase a cada cinco segundos*/
        
  })();

(function(){ /* Função para alternar entre os nomes dos pensadores pré determinados*/
      var words = [
          'Albert Einstein',
          'Stephen Hawking',
          'Carl Sagan'
          ], i = 0;
      setInterval(function(){
          $('#troca-pensador').fadeOut(function(){
              $(this).html(words[i=(i+1)%words.length]).fadeIn();
          });
      }, 5000);
        
  })();