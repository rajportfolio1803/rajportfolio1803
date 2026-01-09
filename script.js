/* TYPING EFFECT WITH COLORFUL LETTERS */
const typing = document.querySelector(".typing");
const words = ["Student", "Coding Lover", "Web Developer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  if (i >= words.length) i = 0;

  if (!isDeleting && j <= words[i].length) {
    currentWord = words[i].substring(0, j++);
    typing.innerHTML = currentWord.split("").map((c, idx) =>
      `<span style="color:hsl(${(idx*50)%360},100%,60%)">${c}</span>`
    ).join("");
    setTimeout(type, 150);
  } else if (isDeleting && j >= 0) {
    currentWord = words[i].substring(0, j--);
    typing.innerHTML = currentWord.split("").map((c, idx) =>
      `<span style="color:hsl(${(idx*50)%360},100%,60%)">${c}</span>`
    ).join("");
    setTimeout(type, 100);
  } else {
    isDeleting = !isDeleting;
    setTimeout(type, 1000);
    if (!isDeleting) i++;
  }
}

type();

/* CUSTOM CURSOR */
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* REVEAL ON SCROLL */
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  reveals.forEach(reveal => {
    const top = reveal.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      reveal.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* SKILL BARS ANIMATION */
const skills = document.querySelectorAll("#skills .progress div");
function animateSkills() {
  const skillsSection = document.querySelector("#skills");
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    skills.forEach(skill => {
      skill.style.width = skill.getAttribute("data") + "%";
    });
  }
}
window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);
