// script.js
document.addEventListener("DOMContentLoaded", () => {
  const ecosystemForm = document.getElementById("ecosystemForm");
  const ecosystemDisplay = document.getElementById("ecosystemDisplay");
  const stats = {
    wolfCount: document.getElementById("wolfCount"),
    rabbitCount: document.getElementById("rabbitCount"),
    treeCount: document.getElementById("treeCount"),
    waterCount: document.getElementById("waterCount"),
  };

  let ecosystem = [];

  ecosystemForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const elementType = document.getElementById("elementType").value;
    const quantity = parseInt(document.getElementById("quantity").value);

    for (let i = 0; i < quantity; i++) {
      ecosystem.push(elementType);
      const elementDiv = document.createElement("div");
      elementDiv.className = `ecosystem-element ${elementType}`;
      elementDiv.textContent = elementType;
      ecosystemDisplay.appendChild(elementDiv);
    }

    updateStats();
  });

  function updateStats() {
    const counts = {
      lobo: 0,
      conejo: 0,
      árbol: 0,
      agua: 0,
    };

    ecosystem.forEach((element) => {
      counts[element]++;
    });

    stats.wolfCount.textContent = counts.lobo;
    stats.rabbitCount.textContent = counts.conejo;
    stats.treeCount.textContent = counts["árbol"];
    stats.waterCount.textContent = counts.agua;
  }
});
