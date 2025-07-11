const buttons = document.querySelectorAll('.navbar button');
const contentDiv = document.getElementById('content');
const leftArrow = document.querySelector('.nav-arrow.left');
const rightArrow = document.querySelector('.nav-arrow.right');

// Обновлённый список вкладок
const tabs = ['resume', 'projects', 'skills', 'certifications', 'contact'];

const contents = {
  resume: `
    <div class="resume-container">
      <div class="left-column">
        <div class="data-network">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
          <div class="dot dot4"></div>
          <div class="dot dot5"></div>
          <div class="line line1"></div>
          <div class="line line2"></div>
          <div class="line line3"></div>
          <div class="line line4"></div>
        </div>
      </div>
      <div class="right-column" id="resume-text">
        <p>Я начинающий Data Analyst, полный энтузиазма и стремления развиваться в области Big Data и машинного обучения. Несмотря на отсутствие профессионального опыта, я обладаю сильным аналитическим мышлением и искренней любовью к данным и информации.</p>
        <p>Быстро учусь новым инструментам и технологиям, постоянно совершенствую свои навыки через самообучение, онлайн-курсы и практические проекты.</p>
        <p>Моя главная цель — стать частью команды профессионалов, где я смогу не только применять свои знания, но и учиться у опытных коллег, решая задачи бизнес-масштаба. Я открыт к новым вызовам и готов вкладываться в развитие проектов, которые приносят реальную ценность компании.</p>
        <p>Основными своими навыками я считаю:</p>
        <ul>
          <li>Уверенный английский язык на уровне B2–C1 — необходим для чтения технической документации, общения с коллегами и изучения новых инструментов.</li>
          <li>Способность быстро осваивать новые технологии, инструменты и методы анализа данных, что особенно важно в динамичной сфере аналитики.</li>
        </ul>
        <p>Но если бы мне нужно было отметить или выбрать самую главную и самую важную черту личности человека, то я считаю, что Stress-high-tolerance — лучшая из всех возможных.</p>
      </div>
    </div>
  `,
  projects: "<p>Here are some cool projects I've worked on.</p>",

  skills: `
    <div class="skills-container-extended">
      <div class="skills-column" data-column="hard-skills">
        <h3>Hard Skills</h3>
        <div class="skill-item" data-skill="PYTHON">Python</div>
        <div class="skill-item" data-skill="SQL">SQL</div>
        <div class="skill-item" data-skill="DATAVISUAL">Data Visualization</div>
        <div class="skill-item" data-skill="JAVASCRIPT">JavaScript</div>
        <div class="skill-item" data-skill="LUA">Lua</div>
      </div>

      <div class="skills-column" data-column="hard-extend">
        <h3>Hard Extend</h3>
        <div class="skill-item" data-related="PYTHON">NumPy, Pandas, Matplotlib</div>
        <div class="skill-item" data-related="DATAVISUAL">PowerBi, Tableau</div>
        <div class="skill-item" data-related="SQL">ANSI SQL, MySQL</div>
      </div>

      <div class="skills-column" data-column="soft-skills">
        <h3>Soft Skills</h3>
        <div class="skill-item" data-skill="problem-solving">Problem Solving</div>
        <div class="skill-item" data-skill="communication">Communication</div>
        <div class="skill-item" data-skill="personal">Personal</div>
      </div>

      <div class="skills-column" data-column="soft-extend">
        <h3>Soft Extend</h3>
        <div class="skill-item" data-related="problem-solving creativity critical-thinking">Analytical thinking, Evaluation and optimization, Critical thinking, Question formulation, Objectivity and self-criticism, Strategy development, Creativity</div>
        <div class="skill-item" data-related="communication empathy listening">Persuasion skills, Listening, Questioning skills, Adaptation of communication style, Clear and simple explanation</div>
        <div class="skill-item" data-related="personal">Self-learning ability, Attention to detail, Adaptability and learning ability, Time management, Persistence, Clear articulation, Conflict management, Stress tolerance, Reliability</div>
      </div>
    </div>
  `,

  certifications: `
    <div class="certifications-container">
      <div class="cert-card">
        <a href="SERT/certificate1.pdf" target="_blank" rel="noopener noreferrer" class="cert-link">
          <div class="cert-title">Certificate 1</div>
          <div class="cert-desc">Course Learning skill</div>
        </a>
      </div>
      <div class="cert-card">
        <a href="SERT/certificate2.pdf" target="_blank" rel="noopener noreferrer" class="cert-link">
          <div class="cert-title">Certificate 2</div>
          <div class="cert-desc">Python Basics</div>
        </a>
      </div>
      <div class="cert-card">
        <a href="SERT/certificate4.pdf" target="_blank" rel="noopener noreferrer" class="cert-link">
          <div class="cert-title">Certificate 3</div>
          <div class="cert-desc">Data Marathon: Python and SQL</div>
        </a>
      </div>
        <div class="certifications-container">
      <div class="cert-card">
        <a href="SERT/certificate5.pdf" target="_blank" rel="noopener noreferrer" class="cert-link">
          <div class="cert-title">Certificate 4</div>
          <div class="cert-desc">SQL Introduction</div>
        </a>
      </div>
      <div class="cert-card">
        <a href="SERT/certificate6.pdf" target="_blank" rel="noopener noreferrer" class="cert-link">
          <div class="cert-title">Certificate 5</div>
          <div class="cert-desc">SQL Basics</div>
        </a>
      </div>
      <div class="cert-card">
        <a href="SERT/certificate7.pdf" target="_blank" rel="noopener noreferrer" class="cert-link">
          <div class="cert-title">Certificate 6</div>
          <div class="cert-desc">Python basics</div>
        </a>
      </div>
      <div class="cert-card">
        <a href="SERT/certificate8.pdf" target="_blank" rel="noopener noreferrer" class="cert-link">
          <div class="cert-title">Certificate 7</div>
          <div class="cert-desc">Python Adv.Basics</div>
        </a>
      </div>
      <!-- Добавьте больше сертификатов по аналогии -->
    </div>
  `,

  contact: "<p>Contact me at email@example.com</p>"
};

let currentTab = 'resume'; // для отслеживания текущей вкладки

// Генерация случайного тёмного цвета в HSL
function getRandomDarkColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 50 + Math.random() * 30;
  const lightness = 10 + Math.random() * 20;
  return { hue, saturation, lightness };
}

let animHue = 140; // стартовый зелёный оттенок для resume
let animSat = 70;
let brightness = 70; // текущая яркость (lightness)
let brightnessDir = 1; // направление изменения яркости

function updateColors(tab) {
  currentTab = tab;
  if (tab === 'resume') {
    animHue = 140;
    animSat = 70;
  } else {
    const c = getRandomDarkColor();
    animHue = c.hue;
    animSat = c.saturation;
  }
}

// Оригинальная функция setActiveTab
let originalSetActiveTab = (tab) => {
  contentDiv.innerHTML = contents[tab];
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-content') === tab);
  });
  updateColors(tab);
};

// Подсветка навыков
function clearHighlights() {
  document.querySelectorAll('.skill-item.highlighted').forEach(el => {
    el.classList.remove('highlighted');
  });
}

function highlightRelated(skillName) {
  clearHighlights();
  const mainSkills = document.querySelectorAll(`.skill-item[data-skill="${skillName}"]`);
  mainSkills.forEach(el => el.classList.add('highlighted'));
  const relatedSkills = document.querySelectorAll(`.skill-item[data-related*="${skillName}"]`);
  relatedSkills.forEach(el => el.classList.add('highlighted'));
}

function highlightFromRelated(relatedList) {
  clearHighlights();
  const relatedSkills = relatedList.split(' ');
  relatedSkills.forEach(skill => {
    const mainSkills = document.querySelectorAll(`.skill-item[data-skill="${skill}"]`);
    mainSkills.forEach(el => el.classList.add('highlighted'));
  });
  document.querySelectorAll(`.skill-item[data-related="${relatedList}"]`).forEach(el => {
    el.classList.add('highlighted');
  });
}

function attachSkillHoverHandlers() {
  clearHighlights();
  document.querySelectorAll('.skill-item[data-skill]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      const skillName = el.getAttribute('data-skill');
      highlightRelated(skillName);
    });
    el.addEventListener('mouseleave', clearHighlights);
  });
  document.querySelectorAll('.skill-item[data-related]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      const relatedList = el.getAttribute('data-related');
      highlightFromRelated(relatedList);
    });
    el.addEventListener('mouseleave', clearHighlights);
  });
}

// Общая функция setActiveTab с вызовами специфичных обработчиков
function setActiveTab(tab) {
  originalSetActiveTab(tab);

  if (tab === 'skills') {
    setTimeout(attachSkillHoverHandlers, 50);
  }
}

// Обработчики кнопок навигации
buttons.forEach(button => {
  button.addEventListener('click', () => {
    setActiveTab(button.getAttribute('data-content'));
  });
});

leftArrow.addEventListener('click', () => {
  let idx = tabs.indexOf(currentTab);
  idx = (idx - 1 + tabs.length) % tabs.length;
  setActiveTab(tabs[idx]);
});

rightArrow.addEventListener('click', () => {
  let idx = tabs.indexOf(currentTab);
  idx = (idx + 1) % tabs.length;
  setActiveTab(tabs[idx]);
});

// Фоновая анимация на canvas
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let width, height;
let points = [];

function init() {
  resize();
  points = [];
  const count = 50;
  for (let i = 0; i < count; i++) {
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: 2 + Math.random() * 2
    });
  }
}

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  const fillColor = `hsl(${animHue}, ${animSat}%, ${brightness}%)`;
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = fillColor;
  ctx.lineWidth = 1;

  points.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let dx = points[i].x - points[j].x;
      let dy = points[i].y - points[j].y;
      let dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        ctx.beginPath();
        ctx.moveTo(points[i].x, points[i].y);
        ctx.lineTo(points[j].x, points[j].y);
        ctx.stroke();
      }
    }
  }
}

function update() {
  points.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  });

  brightness += brightnessDir * 0.3;
  if (brightness >= 90) brightnessDir = -1;
  else if (brightness <= 50) brightnessDir = 1;
}

function animate() {
  update();
  draw();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);

// Инициализация
init();
animate();
setActiveTab('resume');
