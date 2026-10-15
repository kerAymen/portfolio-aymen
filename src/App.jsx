import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import Hero3D from './Hero3D'
import TechBadges from './TechBadges'
import ScrollReveal from './ScrollReveal'
import AboutScrollAnimation from './AboutScrollAnimation'
import './App.css'



function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.about-section .section-label, .about-section .section-title, .about-description, .about-card, .skills-section .section-label, .skills-section .section-title, .skills-intro, .skill-card, .projects-section .section-label, .projects-section .section-title, .projects-intro, .project-card, .contact-section .section-label, .contact-section .section-title, .contact-description, .contact-email, .social-card, .experience-section .section-label, .experience-section .section-title, .experience-intro, .experience-card'
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
      if (
        element.classList.contains('motion-project-card') ||
        element.classList.contains('motion-experience-card') ||
        element.closest('.about-scroll-animation')
      ) {
        return
      }

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
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      <header className="navbar">
        <a href="#accueil" className="logo">AYMEN KERMEZLI</a>

        <nav>
          <a href="#accueil">Accueil</a>
          <a href="#apropos">À propos</a>
          <a href="#competences">Compétences</a>
          <a href="#projets">Projets</a>
          <a href="#experiences">Expériences</a>
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
            <Hero3D />
            <TechBadges />
          </div>
        </section>

        
        <section id="apropos" className="about-section">
          <div className="section-container">
            <AboutScrollAnimation> 
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
            </AboutScrollAnimation>
          </div>
        </section>

        
        <section id="competences" className="skills-section">
          <div className="section-container">
            <ScrollReveal>
              <p className="section-label">MON ENVIRONNEMENT TECHNIQUE</p>

              <h2 className="section-title">
                Mes <span>compétences</span>
              </h2>

              <p className="skills-intro">
                Les langages, frameworks et outils que j'utilise
                dans mes projets de développement.
              </p>
            </ScrollReveal>

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

              
              {/* PROJET 1 — PROJETIMMO */}
              <article className="project-card project-card-detailed">
                
                <div className="project-immo-banner">
                  <span className="project-featured">
                    Projet principal
                  </span>

                  <div className="immo-banner-heading">
                    <span>APPLICATION WEB FULL-STACK</span>
                    <h3>ProjetImmo</h3>
                    <p>Plateforme immobilière interactive</p>
                  </div>

                  <div className="immo-montage">
                    <div className="immo-screen immo-screen-left">
                      <img
                        src="/images/projetImmo/accueil.png"
                        alt="Page d'accueil de ProjetImmo"
                      />
                    </div>

                    <div className="immo-screen immo-screen-center">
                      <img
                        src="/images/projetImmo/galerie.png"
                        alt="Galerie immobilière ProjetImmo"
                      />
                    </div>

                    <div className="immo-screen immo-screen-right">
                      <img
                        src="/images/projetImmo/carte.png"
                        alt="Carte interactive ProjetImmo"
                      />
                    </div>
                  </div>
                </div>


                <div className="project-content">
                  <p className="project-category">
                    APPLICATION WEB FULL-STACK · PROJET D'ÉQUIPE
                  </p>

                  <h3>ProjetImmo — Plateforme immobilière interactive</h3>

                  <p>
                    ProjetImmo est une application web immobilière développée en équipe
                    dans le cadre de ma formation en informatique. Elle permet aux
                    utilisateurs de rechercher des propriétés à vendre, de consulter
                    leurs caractéristiques et de les explorer sur une carte interactive.
                  </p>

                  <p>
                    L'application repose sur une architecture Full-Stack associant
                    React pour l'interface utilisateur, Java et Spring Boot pour
                    l'API REST, et MariaDB pour le stockage des données.
                    Les requêtes HTTP sont réalisées avec Axios.
                  </p>

                  <div className="project-tags">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>Spring Boot</span>
                    <span>Java</span>
                    <span>MariaDB</span>
                    <span>API REST</span>
                    <span>Axios</span>
                    <span>Mapbox GL JS</span>
                    <span>Docker</span>
                  </div>

                  <div className="project-detail-divider"></div>

                  <h4 className="project-subtitle">Aperçu de l'application</h4>

                  <div className="project-showcase">
                    <div className="project-showcase-item">
                      <div className="project-showcase-text">
                        <h5>Page d'accueil</h5>
                        <p>
                          Présentation de la plateforme avec un aperçu des
                          propriétés disponibles et un accès direct à la
                          galerie immobilière.
                        </p>
                      </div>

                      <img
                        src="/images/projetImmo/accueil.png"
                        alt="Page d'accueil de ProjetImmo"
                        loading="lazy"
                      />
                    </div>

                    <div className="project-showcase-item">
                      <div className="project-showcase-text">
                        <h5>Recherche et galerie immobilière</h5>
                        <p>
                          Consultation des annonces avec photos, prix, adresse,
                          superficie et caractéristiques. Les propriétés peuvent
                          être filtrées par région, nombre de chambres et salles
                          de bain, puis triées selon leur prix.
                        </p>
                      </div>

                      <img
                        src="/images/projetImmo/galerie.png"
                        alt="Galerie immobilière avec les propriétés et leurs caractéristiques"
                        loading="lazy"
                      />
                    </div>

                    <div className="project-showcase-item">
                      <div className="project-showcase-text">
                        <h5>Carte interactive avec Mapbox</h5>
                        <p>
                          Intégration de Mapbox GL JS pour visualiser les propriétés
                          à partir de leurs coordonnées GPS. Chaque marqueur
                          permet d'afficher une fenêtre contenant la photo,
                          le prix, la localisation et les informations
                          essentielles du bien.
                        </p>
                      </div>

                      <img
                        src="/images/projetImmo/carte.png"
                        alt="Carte interactive Mapbox affichant les propriétés immobilières"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <h4 className="project-subtitle">Autres fonctionnalités</h4>

                  <div className="project-features">
                    <div className="project-feature">
                      <h5>Fiches détaillées</h5>
                      <p>
                        Consultation des photos, prix, superficies,
                        pièces, chambres et salles de bain de chaque propriété.
                      </p>
                    </div>

                    <div className="project-feature">
                      <h5>Comptes et favoris</h5>
                      <p>
                        Fonctionnalités de connexion et possibilité
                        d'enregistrer, consulter et retirer des maisons favorites.
                      </p>
                    </div>

                    <div className="project-feature">
                      <h5>API REST et base de données</h5>
                      <p>
                        Communication entre React et Spring Boot pour
                        accéder aux données immobilières stockées dans MariaDB.
                      </p>
                    </div>

                    <div className="project-feature">
                      <h5>Conteneurisation</h5>
                      <p>
                        Configuration Docker du frontend et du backend,
                        avec Nginx pour servir l'application React.
                      </p>
                    </div>
                  </div>

                  <div className="project-contribution">
                    <h4>Ma contribution</h4>
                    <p>
                      Dans le cadre de ce projet collaboratif, j'ai notamment
                      travaillé sur l'intégration de Mapbox et la visualisation
                      des propriétés sur une carte interactive.
                    </p>
                    <p>
                      J'ai également réalisé des travaux d'intégration,
                      de correction du chargement des ressources graphiques,
                      de vérification des communications entre le frontend
                      et le backend, ainsi que de réorganisation du projet
                      pour faciliter son exécution et sa présentation.
                    </p>
                  </div>

                  <a
                    href="https://github.com/kerAymen/ProjetImmo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-link"
                  >
                    Consulter le code source sur GitHub ↗
                  </a>
                </div>
              </article>


            
{/* PROJET 2 — ESCAPE LAB 3D */}
<motion.article
  className="project-card project-card-detailed motion-project-card game-project-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{
    rotateX: 2,
    rotateY: -3,
    y: -8,
    scale: 1.01,
  }}
  viewport={{ once: true, amount: 0.1 }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
  style={{
    transformPerspective: 1200,
    transformStyle: "preserve-3d",
  }}
>
  {/* Image principale */}
  
  <div className="game-banner game-banner-minimal">
    <span className="game-banner-badge">Projet scolaire</span>

    <div className="game-banner-content">
      <div className="game-banner-symbol">
        <span className="game-symbol-cube">◇</span>
      </div>

      <p className="game-banner-label">UNITY · C# · JEU VIDÉO 3D</p>
      <h3>ESCAPE LAB <span>3D</span></h3>
      <p className="game-banner-subtitle">
        Exploration · Labyrinthe · Évasion
      </p>
    </div>

    <div className="game-banner-grid"></div>
  </div>


  {/* Description du jeu */}
  <div className="project-content">
    <p className="project-category">
      JEU VIDÉO 3D · PROJET D'ÉQUIPE
    </p>

    <h3>Escape Lab 3D — Jeu d'évasion en 3D</h3>

    <p>
      Escape Lab 3D est un jeu vidéo développé en équipe
      avec Unity et C# dans le cadre d'un projet scolaire.
      Le joueur évolue dans un environnement 3D
      et doit trouver la sortie en faisant face
      à différents obstacles et ennemis.
    </p>

    <p>
      Ce projet nous a permis de travailler sur
      la programmation de mécaniques de jeu,
      l'intégration de personnages et
      d'environnements 3D ainsi que
      la conception d'une expérience interactive.
    </p>

    {/* Technologies */}
    <div className="project-tags">
      <span>Unity</span>
      <span>C#</span>
      <span>Développement 3D</span>
      <span>Gameplay</span>
      <span>Travail d'équipe</span>
    </div>

    <div className="project-detail-divider"></div>

    
  <h4 className="project-subtitle">
    Aperçu réel du projet
  </h4>

  <div className="game-preview game-real-preview">
    <img
      src="/images/3dgame/gameplay.jpg"
      alt="Capture réelle du prototype Escape Lab 3D dans Unity"
      loading="lazy"
    />

    <p>
      Capture du jeu pendant son développement dans Unity.
    </p>
  </div>


      {/* GitHub */}
        <a
          href="https://github.com/Papemomath/3DGame.git"
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-link"
        >
          Consulter le projet sur GitHub ↗
        </a>
      </div>
    </motion.article>




              {/* PROJET 3 */}
             <motion.article
                className="project-card motion-project-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  rotateX: 4,
                  rotateY: -5,
                  y: -10,
                  scale: 1.02,
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                style={{
                  transformPerspective: 1000,
                  transformStyle: "preserve-3d",
                }}
              >
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
              </motion.article>
            </div>
          </div>
        </section>

        
<section id="experiences" className="experience-section">
  <div className="section-container">
    <p className="section-label">MON PARCOURS PROFESSIONNEL</p>

    <h2 className="section-title">
      Mes <span>expériences</span>
    </h2>

    <p className="experience-intro">
      Au-delà du développement informatique, je développe
      également des compétences pratiques en entrepreneuriat,
      en technologie et en relation client.
    </p>

    <div className="experience-grid">
      
      <motion.article
        className="experience-card motion-experience-card"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          rotateX: 3,
          rotateY: -4,
          y: -8,
          scale: 1.01,
        }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        style={{
          transformPerspective: 1200,
          transformStyle: "preserve-3d",
        }}
      >

        <div className="experience-card-top">
          <div className="experience-icon">📱</div>
          <span className="experience-type">Entrepreneuriat</span>
        </div>


        
    <div className="experience-photo">
      <img
        src="/images/akmarket.jpg"
        alt="Profil TikTok AKMarket"
        loading="lazy"
      />
    </div>
    
    <div className="experience-info">

        <h3>AKMarket</h3>
        <p className="experience-role">
          Vente de produits technologiques et marketing numérique
        </p>

        <p className="experience-description">
          Développement d'une activité de vente de solutions NFC
          pour les entreprises : cartes NFC d'avis Google, menus
          numériques, cartes d'affaires et pages facebook connectées.
          Commercialisation de montres et création de contenu
          promotionnel sur TikTok et Instagram.
        </p>

        
        <a
          href="https://www.tiktok.com/@_akmarket"
          target="_blank"
          rel="noopener noreferrer"
          className="experience-link"
        >
          Voir AKMarket sur TikTok ↗
        </a>


        <div className="experience-tags">
          <span>Technologie NFC</span>
          <span>Relation client</span>
          <span>Marketing numérique</span>
          <span>Entrepreneuriat</span>
        </div>
      </div>
       </motion.article>

      <article className="experience-card">
        <div className="experience-card-top">
          <div className="experience-icon">🖥️</div>
          <span className="experience-type">Expérience pratique</span>
        </div>

        <h3>Soutien informatique</h3>
        <p className="experience-role">
          Cégep Marie-Victorin
        </p>

        <p className="experience-description">
          Immersion pratique au sein du service de soutien
          informatique du cégep dans le cadre de mon DEC en Techniques de l’informatique.
          Cette immersion m'a permis de découvrir les activités d'assistance
          technique et le fonctionnement d'un environnement
          informatique professionnel.
        </p>

        <div className="experience-tags">
          <span>Soutien technique</span>
          <span>Environnement Windows</span>
          <span>Service aux utilisateurs</span>
        </div>
      </article>

      <article className="experience-card">
        <div className="experience-card-top">
          <div className="experience-icon">🚗</div>
          <span className="experience-type">Travail autonome</span>
        </div>

        <h3>Livreur indépendant</h3>

        <p className="experience-role">
          Uber Eats · Instacart · DoorDash · SkipTheDishes
        </p>

        <p className="experience-description">
          Réalisation de livraisons et de commandes sur différentes
          plateformes avec gestion autonome des déplacements et
          des des horaires. Développement de compétences
          en organisation, en gestion du temps et en service
          à la clientèle.
        </p>

        <div className="experience-tags">
          <span>Autonomie</span>
          <span>Gestion du temps</span>
          <span>Service à la clientèle</span>
          <span>Organisation</span>
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
