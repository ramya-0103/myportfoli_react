function Projects() {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">

        {/* Ramya Question Paper Project */}
        <div className="project-card">
          <h3>Ramya Question Paper</h3>
          <p>Built with React – view and manage question papers</p>
          <div className="buttons">
            <a
              href="https://ramya-0103.github.io/ramya-question-paper/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Live Demo</button>
            </a>
            <a
              href="https://github.com/ramya-0103/ramya-question-paper"
              target="_blank"
              rel="noreferrer"
            >
              <button>View Code</button>
            </a>
          </div>
        </div>

        {/* Library Management Project */}
        <div className="project-card">
          <h3>Comfort Learning</h3>
          <p>Console app for managing books</p>
          <div className="buttons">
            <a
              href="https://ramya-0103.github.io/ramya-sri-book-store/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Live Demo</button>
            </a>
            <a
              href="https://github.com/ramya-0103/ramya-sri-book-store"
              target="_blank"
              rel="noreferrer"
            >
              <button>View Code</button>
            </a>
          </div>
        </div>

        {/* Job Board Project */}
        <div className="project-card">
          <h3>HomeSpace</h3>
          <p>is a stylish e-commerce platform for browsing and shopping curated home décor.
</p>
          <div className="buttons">
            <a
              href="https://ramya-0103.github.io/site/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Live Demo</button>
            </a>
            <a
              href="https://github.com/ramya-0103/site"
              target="_blank"
              rel="noreferrer"
            >
              <button>View Code</button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
