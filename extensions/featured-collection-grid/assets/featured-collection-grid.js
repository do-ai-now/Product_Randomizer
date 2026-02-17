/**
 * Featured Collection Grid — shuffle products randomly on page load
 */
(function () {
  function shuffleGrid() {
    const grid = document.querySelector('[data-fcg-shuffle]');
    if (!grid) return;

    const items = Array.from(grid.children);
    if (items.length <= 1) return;

    // Fisher-Yates shuffle
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    items.forEach(function (item) {
      grid.appendChild(item);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', shuffleGrid);
  } else {
    shuffleGrid();
  }
})();
