// typing text
const texts = ["Student", "Developer", "Competitive programmer"];
let index = 0;
let charIndex = 0;
const speed = 120;
const typingElement = document.getElementById("typing");

function type() {
  if (charIndex < texts[index].length) {
    typingElement.textContent += texts[index][charIndex];
    charIndex++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent =
      texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, speed / 2);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, speed);
  }
}

type();

// smooth scroll
const btn = document.getElementById("scrollBtn");

btn.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth",
  });
});

function renderCards({
  data,
  containerId,
  cardClass,
  renderHTML,
  delay = 120
}) {
  const container = document.getElementById(containerId);

  data.forEach((item, i) => {
    const card = document.createElement("div");
    card.className = cardClass;

    card.innerHTML = renderHTML(item);

    container.appendChild(card);

    // animation
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
      card.style.transition = "all 0.6s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, i * delay);
  });
}

const skills = [
  { name: "HTML", desc: "Semantic HTML", icon: "icons/html.svg" },
  { name: "CSS", desc: "Responsive & animation", icon: "icons/css.svg" },
  { name: "JavaScript", desc: "ES6+, DOM", icon: "icons/js.svg" },
  { name: "NodeJS", desc: "Backend APIs", icon: "icons/nodejs.svg" },
  { name: "C++", desc: "DSA & performance", icon: "icons/cpp.svg" },
  { name: "Python", desc: "Automation & scripting", icon: "icons/python.svg" },
  { name: "TailwindCSS", desc: "Utility-first styling for modern, responsive UIs", icon: "icons/tailwind.svg" },
];
const achievements = [
  { title: "Provincial 2nd Prize", desc: "the provincial Informatics competition for excellent students.", icon: "icons/trophy.svg" },
  { title: "Provincial 2nd Prize", desc: "the provincial youth informatics competition.", icon: "icons/trophy.svg" },
  { title: "Provincial 3rd Prize", desc: "the provincial Physics competition for excellent students.", icon: "icons/trophy.svg" },
  { title: "Top scorer", desc: "the highest scorer in the A00 subject group in the 2025 National High School Graduation Exam and achieved a perfect admission score for admission to VNU University of Engineering and Technology (VNU-UET).(Math: 9/10 Physic: 10/10 English: Using IELTS).", icon: "icons/trophy.svg" },
  { title: "IELTS 6.5", desc: "Academic English.", icon: "icons/ielts.svg" },
  { title: "MOS Associate", desc: "Microsoft Office Specialist (MOS) Associate certification in core Office applications (Word, Excel, PowerPoint).", icon: "icons/mos.svg" },
];
const projects = [
  { title: "52ducbanh/Portfolio Website", desc: "A personal portfolio where I showcase my projects, skills, and journey as a developer.", icon: "icons/project.svg" }
];
renderCards({
  data: skills,
  containerId: "skill-card",
  cardClass: "skill-card",
  renderHTML: (skill) => `
    <div class="skill-icon mb-4">
      <img src="${skill.icon}" alt="${skill.name}" class="w-10 h-10" />
    </div>
    <h3 class="text-lg font-semibold">${skill.name}</h3>
    <p class="text-sm text-gray-400">${skill.desc}</p>
  `
});

renderCards({
  data: achievements,
  containerId: "ac-card",
  cardClass: "ac-card",
  renderHTML: (ach) => `
    <div class="mb-4">
      <img src="${ach.icon}" alt="${ach.title}" class="w-10 h-auto" />
    </div>
    <h3 class="text-lg font-semibold">${ach.title}</h3>
    <p class="text-sm text-gray-400">${ach.desc}</p>
  `
});

renderCards({
  data: projects,
  containerId: "project-card",
  cardClass: "project-card",
  renderHTML: (project) => `
    <div class="mb-4">
      <img src="${project.icon}" alt="${project.title}" class="w-10 h-10" />
    </div>
    <h3 class="text-lg font-semibold">${project.title}</h3>
    <p class="text-sm text-gray-400">${project.desc}</p>
  `
});
