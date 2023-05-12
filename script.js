var botaon = document.querySelector('input[value="não"]');


document.querySelector('input[value="sim"]').addEventListener("click", function() {
  window.location.href = "https://www.youtube.com/watch?v=ke3oBmpnDME";
});

    
 
botaon.addEventListener('mouseover', function(){
  var botao_inicial = document.querySelector('input[value="não"]');
  botao_inicial.parentNode.removeChild(botao_inicial);
  
  const criaNovoBotao = function() {
    var id_botoes = ['a', 'b', 'c', 'd' ,'g', 'h', 'i', 'j'];
    var letra_aleatoria = id_botoes[Math.floor(Math.random() * id_botoes.length)];

    const divs = document.querySelector(`.${letra_aleatoria}`);
    const btn_criado = document.createElement('input');
    btn_criado.type = 'button';
    btn_criado.value = 'não';
    btn_criado.classList.add('btn-andarilho');
    btn_criado.style.marginLeft = `${Math.floor(Math.random() * 100) + 1}px` ;
    btn_criado.style.marginRight = `${Math.floor(Math.random() * 60) + 1}px` ;
    btn_criado.addEventListener('mouseover', function(){
      divs.removeChild(btn_criado);
      criaNovoBotao();
    });
    divs.appendChild(btn_criado);
  }

  criaNovoBotao();
});
 