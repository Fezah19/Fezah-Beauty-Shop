// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Lightweight "cart" feedback
const cart = [];
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    cart.push(name);
    btn.textContent = 'Added ✓';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Add';
      btn.disabled = false;
    }, 1200);
  });
});

// Contact form (front-end only)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = 'Sending...';

  // Simulate sending; replace with a real endpoint if needed
  setTimeout(() => {
    status.textContent = 'Thanks! We’ll get back to you within a day.';
    form.reset();
  }, 900);
});
