document.getElementById('revealButton').addEventListener('click', function() {
  const card = document.getElementById('card');
  if (card.style.display === 'none' || card.style.display === '') {
      card.style.display = 'flex';
  } else {
      card.style.display = 'none';
  }
});