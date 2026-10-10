import { useEffect } from 'react'
import './App.css'


function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.about-section .section-label, .about-section .section-title, .about-description, .about-card, .skills-section .section-label, .skills-section .section-title, .skills-intro, .skill-card, .projects-section .section-label, .projects-section .section-title, .projects-intro, .project-card, .contact-section .section-label, .contact-section .section-title, .contact-description, .contact-email, .social-card'
    )

    if (!('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    elements.forEach((element) => {
      element.classList.add('reveal')
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
      elements.forEach((element) => {
        element.classList.remove('reveal', 'visible')
      })
    }
  }, [])
  return (

    <div className="portfolio">
      <header className="navbar">
        <a href="#accueil" className="logo">AYMEN KERMEZLI</a>

        <nav>
          <a href="#accueil">Accueil</a>
          <a href="#apropos">À propos</a>
          <a href="#competences">Compétences</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="accueil" className="hero">
          <div className="hero-content">
            <p className="intro">Bienvenue sur mon portfolio</p>

            <h1>
              AYMEN
              <span> KERMEZLI</span>
            </h1>

            <h2>Étudiant en informatique</h2>

            <p className="description">
              Passionné par le développement Web et logiciel,
              avec un intérêt marqué pour la cybersécurité.
            </p>

            <div className="hero-buttons">
              <a href="#projets" className="btn-primary">
                Découvrir mes projets ↓
              </a>

              <a
                href="https://github.com/kerAymen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Mon GitHub ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="circle">
              <span>&lt;/&gt;</span>
            </div>
            <div className="tech tech-react">React</div>
            <div className="tech tech-java">Java</div>
            <div className="tech tech-spring">Spring Boot</div>
          </div>
        </section>

        
        <section id="apropos" className="about-section">
          <div className="section-container">
            <p className="section-label">FAISONS CONNAISSANCE</p>

            <h2 className="section-title">
              À propos <span>de moi</span>
            </h2>

            <p className="about-description">
              Étudiant en Techniques de l'informatique au Cégep Marie-Victorin,
              je développe mes compétences en développement Web et logiciel,
              en bases de données et en travail d'équipe.
            </p>

            <p className="about-description">
              Je possède également des connaissances en soutien informatique,
              en réseaux et en sécurité informatique, avec un intérêt
              particulier pour la cybersécurité.
            </p>

            <div className="about-cards">
              <div className="about-card">
                <div className="about-icon">🎓</div>
                <h3>Formation</h3>
                <p>DEC en Techniques de l'informatique</p>
                <span>Cégep Marie-Victorin · Mai 2027</span>
              </div>

              <div className="about-card">
                <div className="about-icon">💻</div>
                <h3>Développement</h3>
                <p>Applications Web et logicielles</p>
                <span>Frontend, backend et bases de données</span>
              </div>

              <div className="about-card">
                <div className="about-icon">🛡️</div>
                <h3>Centres d'intérêt</h3>
                <p>Cybersécurité et technologies</p>
                <span>Réseaux, sécurité et apprentissage continu</span>
              </div>
            </div>
          </div>
        </section>

        
        <section id="competences" className="skills-section">
          <div className="section-container">
            <p className="section-label">MON ENVIRONNEMENT TECHNIQUE</p>

            <h2 className="section-title">
              Mes <span>compétences</span>
            </h2>

            <p className="skills-intro">
              Les langages, frameworks et outils que j'utilise
              dans mes projets de développement.
            </p>

            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon">⚙️</div>
                <h3>Backend</h3>
                <div className="skill-tags">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>Node.js</span>
                  <span>NestJS</span>
                  <span>C#</span>
                  <span>.NET</span>
                  <span>API REST</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">💻</div>
                <h3>Frontend</h3>
                <div className="skill-tags">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>WPF</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">🗄️</div>
                <h3>Bases de données</h3>
                <div className="skill-tags">
                  <span>MariaDB</span>
                  <span>MySQL</span>
                  <span>MongoDB</span>
                  <span>SQL</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">🛠️</div>
                <h3>Outils et systèmes</h3>
                <div className="skill-tags">
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Docker</span>
                  <span>Postman</span>
                  <span>Maven</span>
                  <span>Windows</span>
                  <span>Linux</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projets" className="projects-section">
          <div className="section-container">
            <p className="section-label">MES RÉALISATIONS</p>

            <h2 className="section-title">
              Mes <span>projets</span>
            </h2>

            <p className="projects-intro">
              Découvrez quelques projets réalisés dans le cadre de
              ma formation en informatique.
            </p>

            <div className="projects-grid">

              {/* PROJET 1 */}
              <article className="project-card">
                <div className="project-image project-immo">
                  <span className="project-featured">Projet principal</span>
                  <div className="project-placeholder">
                    <span>🏢</span>
                    <p>ProjetImmo</p>
                  </div>
                </div>

                <div className="project-content">
                  <h3>ProjetImmo</h3>
                  <p>
                    Application Web immobilière développée en équipe,
                    permettant de consulter et rechercher des propriétés,
                    d'utiliser une carte interactive et de gérer des favoris.
                  </p>

                  <div className="project-tags">
                    <span>Java 17</span>
                    <span>Spring Boot</span>
                    <span>React</span>
                    <span>MariaDB</span>
                    <span>Docker</span>
                  </div>
                </div>
              </article>

              {/* PROJET 2 */}
              <article className="project-card">
                <div className="project-image project-bookmycut">
                  <div className="project-placeholder">
                    <span>✂️</span>
                    <p>BookMyCut</p>
                  </div>
                </div>

                <div className="project-content">
                  <h3>BookMyCut</h3>
                  <p>
                    Application de bureau développée en équipe pour
                    la gestion des rendez-vous de coiffure,
                    avec une interface réalisée en WPF.
                  </p>

                  <div className="project-tags">
                    <span>C#</span>
                    <span>.NET</span>
                    <span>WPF</span>
                    <span>MVVM</span>
                    <span>Git</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>  


        <section id="contact" className="contact-section">
          <div className="section-container contact-container">
            <p className="section-label">PRENONS CONTACT</p>

            <h2 className="section-title">
              Travaillons <span>ensemble</span>
            </h2>

            <p className="contact-description">
              Vous souhaitez discuter d'une opportunité de stage,
              d'emploi ou d'un projet ? N'hésitez pas à me contacter.
            </p>

            <div className="contact-socials">
              <a
                href="https://github.com/kerAymen"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/aymen-kermezli-b02993364"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
              >
                <span>LinkedIn</span>
                <span>↗</span>
              </a>
            </div>

            <a
              href="mailto:aymenker@outlook.com"
              className="contact-email"
            >
              <div>
                <span className="contact-icon">✉</span>
                <div>
                  <small>COURRIEL</small>
                  <p>aymenker@outlook.com</p>
                </div>
              </div>
              <span className="contact-arrow">↗</span>
            </a>

            <footer className="footer">
              <p>© {new Date().getFullYear()} Aymen Kermezli</p>
              <a href="#accueil">Retour en haut ↑</a>
            </footer>
          </div>
        </section>

  
      







      </main>
    </div>
  )
}

export default App
