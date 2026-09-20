// ==========================================================================
// Tippkarten: Unser Power-Drink (Klasse 6D)
// Interaktive Steuerung der gestuften Hilfen (Accordion & Reveal)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Aufgaben-Karten ein-/ausklappen (Task Accordion)
  const taskHeaders = document.querySelectorAll('.task-header');

  taskHeaders.forEach((header) => {
    header.setAttribute('role', 'button');
    header.setAttribute('tabindex', '0');

    const toggleTask = () => {
      const card = header.closest('.task-card');
      if (card) {
        card.classList.toggle('open');
      }
    };

    header.addEventListener('click', toggleTask);

    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTask();
      }
    });
  });

  // 2. Gestufte Hilfen aufdecken / zuklappen (Hint Reveal)
  const hintButtons = document.querySelectorAll('.hint-btn');

  hintButtons.forEach((btn) => {
    const hintItem = btn.closest('.hint-item');
    const hintState = btn.querySelector('.hint-state');

    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // Verhindert versehentliches Schließen der Aufgaben-Karte
      
      if (!hintItem) return;

      const isOpen = hintItem.classList.toggle('open');

      if (hintState) {
        hintState.textContent = isOpen ? 'Zuklappen ▲' : 'Aufdecken ▼';
      }
    });
  });
});
