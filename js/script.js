// Adiciona mais partículas dinamicamente
function createEmber() {
  const ember = document.createElement('div');
  ember.className = 'ember';
  ember.style.left = Math.random() * 100 + '%';
  ember.style.animationDelay = Math.random() * 8 + 's';
  ember.style.animationDuration = (Math.random() * 4 + 6) + 's';
  document.body.appendChild(ember);

  setTimeout(() => {
    ember.remove();
  }, 10000);
}

// Cria novas brasas periodicamente
setInterval(createEmber, 3000);

// Adiciona faíscas ocasionais
function createSpark() {
  const spark = document.createElement('div');
  spark.className = 'spark';
  spark.style.top = Math.random() * 100 + '%';
  spark.style.left = Math.random() * 100 + '%';
  spark.style.animationDelay = Math.random() * 3 + 's';
  document.body.appendChild(spark);

  setTimeout(() => {
    spark.remove();
  }, 3000);
}

setInterval(createSpark, 5000);

// Efeito de hover nos blocos de estatística
document.querySelectorAll('.stat-block').forEach(block => {
  block.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px)';
  });

  block.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Colapsar/expandir seções
document.querySelectorAll('.collapsible').forEach(title => {
  title.addEventListener('click', () => {
    title.classList.toggle('active');
    const content = title.nextElementSibling;
    content.classList.toggle('open');
  });
});
