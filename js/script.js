// Adiciona brasas (opcional, mantém o ambiente)
function createEmber() {
  const ember = document.createElement('div');
  ember.className = 'ember';
  ember.style.left = Math.random() * 100 + '%';
  ember.style.animationDelay = Math.random() * 8 + 's';
  ember.style.animationDuration = (Math.random() * 4 + 6) + 's';
  document.body.appendChild(ember);

  setTimeout(() => { ember.remove(); }, 10000);
}
setInterval(createEmber, 3000);

// Adiciona runas ocasionais
function createRune() {
  const rune = document.createElement('div');
  rune.className = 'rune';

  const runes = ["ᚠ","ᚢ","ᚦ","ᚨ","ᛃ","ᛇ","✧","✠"];
  rune.textContent = runes[Math.floor(Math.random() * runes.length)];

  rune.style.top = Math.random() * 100 + '%';
  rune.style.left = Math.random() * 100 + '%';
  rune.style.animationDelay = Math.random() * 3 + 's';

  document.body.appendChild(rune);

  setTimeout(() => { rune.remove(); }, 6000);
}
setInterval(createRune, 4000);

// Efeito de hover nos blocos de estatística
document.querySelectorAll('.stat-block').forEach(block => {
  block.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
  });
  block.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});


// Runas de fundo brilhando e sumindo
function createBgRune() {
  const rune = document.createElement('div');
  rune.className = 'bg-rune';

  const runes = ["ᚠ","ᚢ","ᚦ","ᚨ","ᛃ","ᛇ","✧","✠"];
  rune.textContent = runes[Math.floor(Math.random() * runes.length)];

  rune.style.top = Math.random() * 100 + 'vh';
  rune.style.left = Math.random() * 100 + 'vw';

  document.body.appendChild(rune);

  setTimeout(() => { rune.remove(); }, 6000);
}
setInterval(createBgRune, 3500);


// Palavras flutuantes
function createWord() {
  const word = document.createElement('div');
  word.className = 'word';

  // Lista de frases
  const words = [
    "Who am I?",
    "Why do I fight?",
    "Lost soul",
    "My blade remembers",
    "Between shadows",
    "Echoes of war"
  ];
  word.textContent = words[Math.floor(Math.random() * words.length)];

  word.style.left = Math.random() * 80 + 'vw'; // evita sair da tela
  word.style.top = Math.random() * 80 + 'vh';

  document.body.appendChild(word);

  setTimeout(() => { word.remove(); }, 8000);
}

// Gerar palavras de tempos em tempos
setInterval(createWord, 9000);
