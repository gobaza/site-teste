let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/candle.jfif') {
      minhaImagem.setAttribute ('src','imagens/candle2.jfif');
    } else {
      minhaImagem.setAttribute ('src','imagens/candle.jfif');
    }
  }
//isolando o camndo aqui até a última chaves, teremos Olá Mundo.

/*let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Análise gráfica é interessante, ' + meuNome;
  }

  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Análise gráfica é interessante, ' + nomeGuardado;
  }
  meuBotao.onclick = function() { defineNomeUsuario();
  }

  function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Análise gráfica é interessante, ' + meuNome;
    }
  }*/


/*const meuCabecalho = document.querySelector('h1'); //Pausando esse comando teremos o comando acima, ou teremos o primeiro comando que é a troca da imagem.
meuCabecalho.textContent = 'Ola mundo!';*/