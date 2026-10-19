import { useState } from "react";
import "./App.css";
import heroImg from "./assets/hero.png";
import projects, { type Project } from "./data/projects";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "DaisyUI",
    ],
  },
  {
    category: "Backend & Core",
    skills: [
      "Node.js",
      "Express.js Basics",
      "RESTful APIs",
      "C / C++ Basics",
      "Data Structures & Algorithms",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Vite", "VS Code", "Vercel", "npm"],
  },
];

const currentYear = new Date().getFullYear();

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleImageError = (id: number) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="portfolio-app">
      {/* Sticky Header / Navbar */}
      <header className="navbar-container">
        <nav className="navbar" aria-label="Main Navigation">
          <a href="#home" className="nav-brand">
            <span className="brand-name">Sabikunnahar</span>
            <span className="brand-dot">.</span>
          </a>

          <button
            type="button"
            className={`nav-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link-item"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-pulse"></span>
              Available for Opportunities
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight-text">Sabikunnahar</span>
            </h1>
            <h2 className="hero-subtitle">Aspiring Full-Stack Developer</h2>
            <p className="hero-description">
              Computer Science & Engineering student at Faridpur Engineering
              College with a passion for building responsive, accessible, and
              user-centric web applications using modern web technologies.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
              <a
                href="https://github.com/sabikunnahar04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                aria-label="GitHub Profile"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img
                src={heroImg}
                alt="Sabikunnahar - Aspiring Full-Stack Developer"
                className="hero-avatar"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-container">
          <div className="section-header">
            <span className="section-kicker">Introduction</span>
            <h2 className="section-title">About Me</h2>
            <p className="section-description">
              Get to know more about my background, mindset, and developer journey.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-text-card">
              <p>
                I am a dedicated Computer Science and Engineering student at{" "}
                <strong>Faridpur Engineering College</strong> with a strong
                interest in full-stack web development. I enjoy transforming
                concepts into functional, intuitive, and clean digital experiences.
              </p>
              <p>
                My focus spans the modern JavaScript and TypeScript ecosystems,
                particularly building responsive frontends with React and
                Next.js, along with foundational backend architectures. I value
                clean code, continuous learning, and thoughtful problem-solving.
              </p>
              <div className="about-highlights">
                <div className="highlight-pill">
                  <span className="pill-dot"></span> Clean & Maintainable Code
                </div>
                <div className="highlight-pill">
                  <span className="pill-dot"></span> Responsive UI Design
                </div>
                <div className="highlight-pill">
                  <span className="pill-dot"></span> Strong CS Fundamentals
                </div>
              </div>
            </div>

            <div className="about-cards-column">
              <div className="info-card">
                <div className="info-icon">🎓</div>
                <div>
                  <h3 className="info-heading">Education</h3>
                  <p className="info-detail">
                    B.Sc. in Computer Science & Engineering
                  </p>
                  <p className="info-subdetail">Faridpur Engineering College</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">💻</div>
                <div>
                  <h3 className="info-heading">Core Focus</h3>
                  <p className="info-detail">Full-Stack Web Development</p>
                  <p className="info-subdetail">
                    React, Next.js, TypeScript, Tailwind CSS
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">📍</div>
                <div>
                  <h3 className="info-heading">Location & Status</h3>
                  <p className="info-detail">Bangladesh</p>
                  <p className="info-subdetail">
                    Open to internship & junior developer opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-container section-alt">
          <div className="section-header">
            <span className="section-kicker">Expertise</span>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-description">
              A collection of technologies, libraries, and tools I use in my projects.
            </p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((group) => (
              <div key={group.category} className="skill-card">
                <h3 className="skill-category-title">{group.category}</h3>
                <div className="skill-badges">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-container">
          <div className="section-header">
            <span className="section-kicker">Portfolio</span>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-description">
              Real projects showcasing modern frontend architecture and functionality.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project: Project) => {
              const hasImgError = imgErrors[project.id];

              return (
                <article key={project.id} className="project-card">
                  <div className="project-thumbnail-wrapper">
                    {!hasImgError ? (
                      <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        className="project-image"
                        onError={() => handleImageError(project.id)}
                      />
                    ) : (
                      <div className="project-fallback-thumb">
                        <div className="fallback-badge">Live Project</div>
                        <h4 className="fallback-title">{project.title}</h4>
                        <span className="fallback-sub">
                          Market Price Tracking Platform
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="project-body">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-tech-list">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary btn-sm"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary btn-sm"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                          GitHub Code
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section-container section-alt">
          <div className="section-header">
            <span className="section-kicker">Academics</span>
            <h2 className="section-title">Education</h2>
            <p className="section-description">
              Foundational degree and engineering coursework.
            </p>
          </div>

          <div className="education-card-wrapper">
            <div className="education-card">
              <div className="edu-icon-badge">🎓</div>
              <div className="edu-details">
                <div className="edu-meta-top">
                  <h3 className="edu-degree">
                    Bachelor of Science in Computer Science & Engineering (CSE)
                  </h3>
                  <span className="edu-tag">Undergraduate</span>
                </div>
                <h4 className="edu-institute">Faridpur Engineering College</h4>
                <p className="edu-summary">
                  Building deep foundations in computational theory, algorithm design,
                  object-oriented architecture, and modern software engineering practices.
                </p>
                <div className="edu-highlights">
                  <span className="edu-highlight-item">
                    Data Structures & Algorithms
                  </span>
                  <span className="edu-highlight-item">
                    Database Management Systems
                  </span>
                  <span className="edu-highlight-item">
                    Object-Oriented Programming
                  </span>
                  <span className="edu-highlight-item">Web Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-container">
          <div className="section-header">
            <span className="section-kicker">Connect</span>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-description">
              I'm open to junior roles, internships, and collaborative opportunities.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-panel">
              <div className="contact-card">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3 className="contact-label">Email</h3>
                  <a
                    href="mailto:sabikunnahar0506@gmail.com"
                    className="contact-value"
                  >
                    sabikunnahar0506@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </div>
                <div>
                  <h3 className="contact-label">GitHub</h3>
                  <a
                    href="https://github.com/sabikunnahar04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-value"
                  >
                    github.com/sabikunnahar04
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <div>
                  <h3 className="contact-label">Location</h3>
                  <p className="contact-value">Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="contact-form-panel">
              <form onSubmit={handleFormSubmit} className="contact-form">
                <h3 className="form-title">Send a Quick Message</h3>
                {formSubmitted && (
                  <div className="form-success-banner">
                    Thank you! Your message was prepared. Please feel free to also reach out directly via email.
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. John Doe"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="e.g. john@example.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Hello Sabikunnahar, I'd like to discuss an opportunity..."
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <span className="footer-brand">Sabikunnahar</span>
            <p className="footer-role">
              Aspiring Full-Stack Developer • CSE Student at Faridpur Engineering College
            </p>
          </div>
          <div className="footer-right">
            <a href="#home" className="footer-link">
              Back to Top ↑
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} Sabikunnahar. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
}
