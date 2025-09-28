const snowContainer = document.querySelector(".snow");
const totalFlakes = 50;

for (let i = 0; i < totalFlakes; i++) {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";

  // posição inicial horizontal
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  
  // tamanho aleatório
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
  
  // velocidade aleatória
  snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
  
  // atraso aleatório
  snowflake.style.animationDelay = Math.random() * 5 + "s";
  
  // vento aleatório
  snowflake.style.setProperty('--wind', Math.random() * 200 - 100 + "px");

  snowContainer.appendChild(snowflake);
}
