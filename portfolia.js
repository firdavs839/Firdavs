const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const words = ["Frontend Developer", "Backend Developer", "React Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();

const sections = document.querySelectorAll(".section");
const progressBars = document.querySelectorAll(".progress div");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });

  progressBars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if (top < window.innerHeight - 50 && bar.style.width === "") {
      bar.style.width = bar.dataset.width;
    }
  });
});

const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    document.documentElement.style.setProperty("--text", "#000");
    document.documentElement.style.setProperty("--accent", "#00bcd4"); // accent har doim #00BCD4
  } else {
    document.documentElement.style.setProperty("--text", "#fff");
    document.documentElement.style.setProperty("--accent", "#00bcd4"); // accent har doim #00BCD4
  }

  toggle.textContent =
    document.body.classList.contains("light") ? "🌙" : "☀";
});