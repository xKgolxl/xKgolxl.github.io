const buttons = document.querySelectorAll('.navbar button');
const contentDiv = document.getElementById('content');
const leftArrow = document.querySelector('.nav-arrow.left');
const rightArrow = document.querySelector('.nav-arrow.right');

const tabs = ['resume', 'skills', 'contact'];

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
        <p>lack of professional experience, but I possess strong analytical thinking and a genuine passion for data and information. I quickly learn new tools and technologies, constantly improving my skills through self-study, online courses, and practical projects.</p>

        <p>Become part of a team of professionals where I can not only apply my knowledge but also learn from experienced colleagues by solving business-scale problems. I am open to new challenges and ready to contribute to the development of projects that bring real value to the company.</p>

        <p>My key skills:</p>

        <ul>
          <li>English B2–C1 level — reading technical documentation, communicating with colleagues, and learning new tools.</li>
          <li>The ability to maintain focus and productivity when working with large volumes of data and tight deadlines.</li>
          <li>The ability to quickly master new technologies, tools, and data analysis methods, which is especially important in the fast-paced world.</li>
        </ul>
      </div>
    </div>
  `,

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
        <div class="skill-item" data-related="PYTHON">NumPy, Pandas, Matplotlib, Seaborn, Plotly</div>
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
  
contact: `
  <div class="contact-container">
    <p>You can interact with me through my Email:</p>
    <p><a href="mailto:homervan2802@gmail.com">homervan2802@gmail.com</a></p>
    <p>OR using group contact here</p>
    <button id="telegram-contact-button">Telegram Channel</button>
  </div>
`
  
};

let currentTab = 'resume';

function getRandomDarkColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 50 + Math.random() * 30;
  const lightness = 10 + Math.random() * 20;
  return { hue, saturation, lightness };
}

let animHue = 140;
let animSat = 70;
let brightness = 70;
let brightnessDir = 1;

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

let originalSetActiveTab = (tab) => {
  contentDiv.innerHTML = contents[tab];
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-content') === tab);
  });
  updateColors(tab);
};

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

function attachContactHandlers() {
  const telegramBtn = document.getElementById('telegram-contact-button');
  if (telegramBtn) {
    telegramBtn.addEventListener('click', () => {
      window.open('https://t.me/LvL99999999999999999999999999999', '_blank');
    });
  }
}

function setActiveTab(tab) {
  originalSetActiveTab(tab);

  if (tab === 'skills') {
    setTimeout(attachSkillHoverHandlers, 50);
  } else if (tab === 'contact') {
    setTimeout(attachContactHandlers, 50);
  }
}

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

init();
animate();
setActiveTab('resume');
