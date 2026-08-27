const search = document.getElementById('catalogSearch');
const cards = [...document.querySelectorAll('.category-card')];
const empty = document.getElementById('emptyState');

const normalize = value => value
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');

search?.addEventListener('input', () => {
  const query = normalize(search.value.trim());
  let visible = 0;

  cards.forEach(card => {
    const haystack = normalize(`${card.dataset.search || ''} ${card.textContent}`);
    const matches = !query || haystack.includes(query);
    card.hidden = !matches;
    if (matches) visible += 1;
  });

  empty.hidden = visible !== 0;
});
