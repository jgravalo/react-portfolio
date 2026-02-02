import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/contacts.css'
import './css/projects.css'
import './css/slider.css'
import './css/styles.css'
import { useEffect, useState } from 'react'
import './css/App.css'
import Nav from './Nav.jsx'

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getFullData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/jgravalo/repos');
        const data = await res.json();

        const gitignore = [
        "jgravalo.github.io",
        "jgravalo",
        "42Cursus",
      ];

        // 1. FILTRAR: Aquí eliges qué repositorios quieres. // Ejemplo: Solo repos que no sean forks y que tengan más de 1 estrella (o los que tú quieras)
        const filteredRepos = data.filter(repo => 
          !repo.fork && 
          !gitignore.includes(repo.name)
        );

        // 2. OBTENER DETALLES: Buscamos los lenguajes de cada repo filtrado
        const detailedRepos = await Promise.all(
          filteredRepos.map(async (repo) => {
            const langRes = await fetch(repo.languages_url);
            const langsObj = await langRes.json();
            
            return {
              ...repo,
              all_languages: Object.keys(langsObj) // Esto te da un array: ["JavaScript", "CSS"]
            };
          })
        );

        setRepos(detailedRepos);
      } catch (err) {
        console.error("Error cargando datos de GitHub:", err);
      }
    };

    getFullData();
  }, []);

  return (
    <>
      {/* <><Nav /></> */}
      <div className="nav-container">

      <header>
        <div>
          <h1>Jesús Alberto Grávalos Olivier</h1>
          <p>Full Stack Developer | C/C++ · Python · JavaScript</p>
        </div>
        <div className="hexagon-border">
          <div className="hexagon">
            {/* <img width="400" height="400" src="https://github.com/jgravalo.png" alt="Jesús Grávalos"> */}
          </div>
        </div>
      </header>
      <section id="about-me">
        <h2>About me</h2>
        <p>
          I’m a developer passionate about creating functional and elegant solutions. I specialize in full stack web development using modern technologies. I've been trained at one of the top programming academies in the world.
        </p>
        <p>
          Throughout my training, I have mastered several programming languages such as C, C++, Python, JavaScript, and HTML, as well as development tools and services like Shell, Git, Docker, and NGINX.
        </p>
        <br></br>
        <p>
          I am currently continuing to strengthen my skills in these areas while exploring new fields such as web application routing (Django), smart contract integration (Solidity), and metric data visualization (Grafana), among other competencies.
        </p>
        <br></br>
        <p>
          I possess strong analytical, organizational, and problem-solving skills, along with the ability to work effectively in teams, particularly on larger-scale projects.
        </p>
        <br></br>
        <p>
          My passion has led me to join Fundación Telefónica’s 42 Barcelona Academy, participate in challenges such as NASA Space Apps 2024, and attend major events like the Mobile World Congress, Integrated Systems Europe, and VMware Explore.
        </p>
        <br></br>
        <p>
          My goal is to keep learning and focus on gaining hands-on experience in the professional field.
        </p>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <div className="slider-container">
          <button className="slide-btn prev" id="skill-slider-prev">&#10094;</button>

          <div className="slider" id="skill-slider">
            <div className="slide">
              <h3>Back-End</h3>
              <div className="skill-group">
                <div className="skill"><p>Python</p><span style={{ width: '100%' }}></span></div>
                <div className="skill"><p>C++</p><span style={{ width: '100%' }}></span></div>
                <div className="skill"><p>C</p><span style={{ width: '90%' }}></span></div>
                <div className="skill"><p>Django</p><span style={{ width: '90%' }}></span></div>
                <div className="skill"><p>NodeJS</p><span style={{ width: '65%' }}></span></div>
                <div className="skill"><p>PHP</p><span style={{ width: '70%' }}></span></div>
              </div>
            </div>
            <div className="slide">
              <h3>Front-End</h3>
              <div className="skill-group">
                <div className="skill"><p>JavaScript</p><span style={{ width: '100%' }}></span></div>
                <div className="skill"><p>React</p><span style={{ width: '90%' }}></span></div>
                <div className="skill"><p>HTML</p><span style={{ width: '90%' }}></span></div>
                <div className="skill"><p>CSS</p><span style={{ width: '80%' }}></span></div>
                <div className="skill"><p>Bootstrap</p><span style={{ width: '65%' }}></span></div>
              </div>
            </div>
            <div className="slide">
              <h3>DevOps</h3>
              <div className="skill-group">
                <div className="skill"><p>Git</p><span style={{ width: '100%' }}></span></div>
                <div className="skill"><p>Docker</p><span style={{ width: '90%' }}></span></div>
                <div className="skill"><p>MySQL</p><span style={{ width: '90%' }}></span></div>
                <div className="skill"><p>PostgreSQL</p><span style={{ width: '90%' }}></span></div>
                <div className="skill"><p>NGINX</p><span style={{ width: '80%' }}></span></div>
                <div className="skill"><p>AWS</p><span style={{ width: '65%' }}></span></div>
              </div>
            </div>
          </div>

          <button className="slide-btn next" id="skill-slider-next">&#10095;</button>
        </div>
      </section>
      <section id="archievements">
        <h2>Archievements</h2>
        <div className="slider-container">
          <button className="slide-btn prev" id="archievement-slider-prev">&#10094;</button>
          <div className="slider" id="archievement-slider">
            <div className="slide">
              <div className="badge-container">
                <img className="badge" alt="42 Junior Developer certification" src="https://www.42network.org/wp-content/uploads/2024/11/Credly-Junior-Developper-1000x1000.png" />
                <div className="badge-description">
                  <h3>42 Junior Developer Certification</h3>
                  <h4>Fundación Telefónica 42 Barcelona Academy</h4>
                  <p>Awarded the Junior Developer credential by 42 Network upon completion of the Common Core program. Demonstrated proficiency in C programming, Unix systems, algorithms, and project-based problem solving, along with strong collaboration skills developed through peer-to-peer learning in an intensive, self-driven environment.</p>
                </div>
              </div>
            </div>
            <div className="slide">
              <div className="badge-container">
                {/* <img alt="NASA Space Apps Challenge certification" src="src/Diploma NASA Space Apps Challenge.pdf"> */}
                <div className="badge-description">
                  <h3>Galactic Problem Solver Certification</h3>
                  <h4>NASA Space Apps Challenge</h4>
                  <p>Participated in the 2024 NASA International Space Apps Challenge, contributing to solutions for real-world challenges on Earth and in space through data analysis, creative problem-solving, and multidisciplinary collaboration.</p>
                </div>
              </div>
            </div>
          </div>
          <button className="slide-btn next" id="archievement-slider-next">&#10095;</button>
        </div>

      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div id="github-projects" className="projects">
          {repos.map(repo => (
            <div key={repo.id} className="project-card">
              <div>
                <h3>{repo.name}</h3>
                <p>{repo.description || "No description"}</p>
              </div>
              <div>
                <div className="languages">
                  <span style={{ borderColor: 'rainbow' }}>{repo.language}</span>
                </div>
                <div className="project-card-2">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">See on GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <div className="contact-section">
          <p>Do you have an interesting project or proposal? I’m available for collaborations and professional opportunities.</p>
          <div className="contact-info">
            <a href="mailto:jesus.gravalos@outlook.com" style={{ backgroundColor: '#EA4335' }}>
              <img src="https://img.shields.io/badge/Gmail-100000?&style=for-the-badge&logo=Gmail&logoColor=white&labelColor=EA4335&color=EA4335" alt="Gmail" />
            </a>
            <a href="https://www.linkedin.com/in/jgravalo" target="_blank" style={{ backgroundColor: '#0077b5' }}>
              <svg className="icon" viewBox="0 0 24 24" aria-label="LinkedIn" role="img" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.4v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.34zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
              </svg>
              <img src="https://img.shields.io/badge/LinkedIn-100000?&style=for-the-badge&logo=LinkedIn&logoColor=white&labelColor=0077B5&color=0077B5" alt="LinkedIn" />
            </a>
            <a href="https://github.com/jgravalo" target="_blank" style={{ backgroundColor: '#161B22' }}>
              <img src="https://img.shields.io/badge/GitHub-100000?&style=for-the-badge&logo=GitHub&logoColor=white&labelColor=161B22&color=161B22" alt="GitHub" />
            </a>
          </div>
        </div>
      </section>
      </div>

      <footer>
        <p>&copy; 2025 Jesús Alberto Grávalos Olivier. All rights reserved.</p>
      </footer>
      <script src="js/script.js"></script>
    </>
  )
}

export default App
