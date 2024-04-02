// Função para gerar valores aleatórios
function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Cria as bolinhas no fundo
  function createBubbles() {
    const bubblesContainer = document.querySelector('.bubbles-container');
    const numBubbles = 20; // Número de bolinhas
  
    for (let i = 0; i < numBubbles; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.top = `${getRandomValue(0, 100)}vh`;
      bubble.style.left = `${getRandomValue(0, 100)}vw`;
      bubble.style.width = `${getRandomValue(30, 30)}px`;
      bubble.style.height = `${getRandomValue(30, 30)}px`;
  
      bubblesContainer.appendChild(bubble);
    }
  }
  
  // Chama a função para criar as bolinhas quando a página estiver carregada
  window.addEventListener('load', createBubbles);