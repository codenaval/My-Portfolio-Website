const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  let valid = true;

  if (!nameInput.value.trim()) {
    valid = false;
    alert("Name is required.");
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(emailInput.value)) {
    valid = false;
    alert("Please enter a valid email address.");
  }

  if (!messageInput.value.trim()) {
    valid = false;
    alert("Message cannot be empty.");
  }

  if (!valid) {
    event.preventDefault(); // Prevent form submission if invalid
  }
});


// Dynamic skills progress bar
const skillBars = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      const value = bar.getAttribute('aria-valuenow');
      bar.style.width = `${value}%`;
    }
  });
});


const toggle = document.getElementById('darkModeToggle');
const body = document.body;

// Toggle dark mode on switch change
toggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Apply saved mode on page load
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggle.checked = true;
  }
};

const typingText = document.querySelector('.typing-text');
const text = "full-stack developer";
let i = 0;

function type() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

type();

