const searchInput = document.getElementById('search');
const cardsContainer = document.querySelector('.cards-container');

searchInput.addEventListener('input', function() {
  const searchQuery = this.value.toLowerCase();
  const cards = cardsContainer.querySelectorAll('.card');

  cards.forEach(card => {
    const name = card.querySelector('h2').innerText.toLowerCase();
    const hobby = card.querySelector('p:nth-of-type(1)').innerText.toLowerCase();
    const job = card.querySelector('p:nth-of-type(2)').innerText.toLowerCase();
    const nationality = card.querySelector('p:nth-of-type(3)').innerText.toLowerCase();

    if (name.includes(searchQuery) || hobby.includes(searchQuery) || job.includes(searchQuery) || nationality.includes(searchQuery)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
