import "./index.css";
import { useState } from "react";

function App() {
  const certificates = [
    {
      title: "Beelingua Certificate",
      issuer: "Beelingua",
      date: "2025",
      type: "Certificate",
      category: "Language",
      file: "/certificates/Beelingua-2025-C-e8ukfHUyonpJQ.pdf",
    },
    {
      title: "Beelingua Certificate",
      issuer: "Beelingua",
      date: "2025",
      type: "Certificate",
      category: "Language",
      file: "/certificates/Beelingua-2025-C-LO6rHMA1FsxJS.pdf",
    },
    {
      title: "Beelingua Certificate",
      issuer: "Beelingua",
      date: "2025",
      type: "Certificate",
      category: "Language",
      file: "/certificates/Beelingua-2025-C-PtHJ3yTxPHsC0.pdf",
    },
    {
      title: "Beelingua Certificate",
      issuer: "Beelingua",
      date: "2025",
      type: "Certificate",
      category: "Language",
      file: "/certificates/Beelingua-2025-C-YWewWlBkq31Sn.pdf",
    },
    {
      title: "Front-End Web",
      issuer: "Dicoding Academy",
      date: "2026",
      type: "Certificate",
      category: "Web Programming",
      file: "/certificates/Dicoding Certificate - FrontEnd Web.pdf",
    },
    {
      title: "JavaScript Programming",
      issuer: "Dicoding Academy",
      date: "2026",
      type: "Certificate",
      category: "Web Programming",
      file: "/certificates/Dicoding Certificate - JavaScript Programming.pdf",
    },
    {
      title: "Web Programming",
      issuer: "Dicoding Academy",
      date: "2026",
      type: "Certificate",
      category: "Web Programming",
      file: "/certificates/Dicoding Certificate - Pemrograman Web.pdf",
    },
    {
      title: "Personal Development",
      issuer: "Dicoding Academy",
      date: "2026",
      type: "Certificate",
      category: "Others",
      file: "/certificates/Dicoding Certificate - Pengembangan Diri.pdf",
    },
    {
      title: "Financial Literacy",
      issuer: "Dicoding Academy",
      date: "2026",
      type: "Certificate",
      category: "Others",
      file: "/certificates/Dicoding Certificate - Financial Literacy.pdf",
    },
    {
      title: "Maju AI",
      issuer: "Hacktiv8",
      date: "2026",
      type: "Certificate",
      category: "AI",
      file: "/certificates/Hacktiv8 - Maju AI.pdf",
    },
    {
      title: "ICPC Honorable Mention",
      issuer: "ICPC",
      date: "",
      type: "Achievement",
      category: "Competition",
      file: "/certificates/icpc_honorable.png",
    },
    {
      title: "ICPC Medal",
      issuer: "ICPC",
      date: "",
      type: "Achievement",
      category: "Competition",
      file: "/certificates/icpc_medal.png",
    },
    {
      title: "ICPC Place",
      issuer: "ICPC",
      date: "",
      type: "Achievement",
      category: "Competition",
      file: "/certificates/icpc_place.png",
    },
    {
      title: "Live Class Certificate",
      issuer: "Microsoft",
      date: "2026",
      type: "Certificate",
      category: "AI",
      file: "/certificates/Sertifikat Live Class - Adisca - 2802420315.pdf",
    },
    {
      title: "Microsoft Azure AI Exam",
      issuer: "Microsoft",
      date: "2026",
      type: "Certificate",
      category: "AI",
      file: "/certificates/Sertifikat Ujian Microsoft Azure AI - Adisca - 2802420315.pdf",
    },
    {
      title: "Video Based Learning Certificate",
      issuer: "Microsoft",
      date: "2026",
      type: "Certificate",
      category: "AI",
      file: "/certificates/Sertifikat VBL - Adisca - 2802420315.pdf",
    },
    {
      title: "Full Stack Web Developer",
      issuer: "Dibimbing",
      date: "2026",
      type: "Certificate",
      category: "Web Programming",
      file: "/certificates/Dibimbing Certificate - Full Stack Developer.pdf",
    },
    {
      title: "Data Visualization",
      issuer: "Dicoding Academy",
      date: "2026",
      type: "Certificate",
      category: "Data",
      file: "/certificates/Dicodign Certificate - Data Visualization.pdf",
    },
    {
      title: "Data Analyst",
      issuer: "MySkill",
      date: "2026",
      type: "Certificate",
      category: "Data",
      file: "https://drive.google.com/drive/folders/1yiM1Lllf_TVdaD54nJlKnznkYxZmVjXd?usp=sharing.pdf",
    },
    {
      title: "SQL",
      issuer: "Dicoding Academy",
      date: "2026",
      type: "Certificate",
      category: "Data",
      file: "/certificates/Dicoding Certificate - SQL.pdf",
    }
  ];

  const portfolioData = {
    name: "Adisca Gandawidjaja",

    email: "adisca.gandawidjaja@binus.ac.id",
    phone: "+62 878 5333 0688",
    socials: {
      github: "https://github.com/discaaa",
      linkedin: "https://www.linkedin.com/in/adisca-gandawidjaja-ab1643321/",
      instagram: "https://www.instagram.com/discaa.g",
    },

    resume: "/resume.pdf",

    skills: [
      "Python",
      "C",
      "Power BI",
      "PostgreSQL",
      "Ms Excel",
      "Google Sheets",
      "Looker Studio",
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "PHP",
      "Laravel",
      "MySQL",
      "Machine Learning",
      "NLP",
      "Figma",
      "Git",
    ],

    projects: [
      {
        number: "01",
        title: "VPhone - Smartphone E-Commerce",
        category: "WEB DESING & DEVELOPMENT",
        description:
          "A simple phone-brand sales website designed in Figma and implemented using HTML, CSS, and JavaScript.",
        tech: ["Figma", "HTML", "CSS", "JavaScript"],
        color: "pink",
        filterCategory: "UI/UX Design",
        demo: "https://www.figma.com/proto/m7HZk8wG6o29uHddrcuxCq/VPhone---AdiscaGandawidjaja---2802420315?node-id=116-1163&starting-point-node-id=116%3A1163",
      },

      {
        number: "02",
        title: "NutriTrack - Your Daily Nutrition Tracker",
        category: "WEB DESING & DEVELOPMENT",
        description:
          "A nutrition tracker app designed in Figma",
        tech: ["Figma"],
        color: "lavender",
        filterCategory: "UI/UX Design",
        demo: "https://www.figma.com/design/IN4S8ixCrKd8r17hDqX2Rl/NutriTrack?node-id=0-1&p=f&t=ZKp3ExCw9FxU0oGS-0",
      },

      {
        number: "03",
        title: "BabySparks - Track Your Newborn's Nutrition",
        category: "WEB DESING & DEVELOPMENT",
        description:
          "Newborn nutrition tracker app designed in Figma",
        tech: ["Figma"],
        color: "blue",
        filterCategory: "UI/UX Design",
        demo: "https://www.figma.com/proto/qBmAzMeYj2SDBki9Xap6FP/CI-Web-Bayi?node-id=45-93&starting-point-node-id=45%3A93",
      },

      {
        number: "04",
        title: "SaveLy",
        category: "FULL-STACK WEB DEVELOPMENT",
        description:
          "A personal finance management application for tracking expenses, savings, budgets, goals, and financial challenges.",
        tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        color: "periwinkle",
        filterCategory: "Frontend & Fullstack",
        github: "https://github.com/discaaa/Savely_Latest",
      },

      {
        number: "05",
        title: "Segmentify - RFM Analysis and K-Means Clustering",
        category: "DATA ANALYSIS & CUSTOMER SEGEMENTATION",
        description:
          "Customer segmentation that uses Recency, Frequency, and Monetary analysis to identify customer purchasing behavior and group customers into meaningful segments with useful feedbacks for business.",
        tech: ["Python", "Pandas", "Numpy", "Streamlit"],
        color: "pink",
        filterCategory: "Data",
        github: "https://github.com/discaaa/RFMAnalysis_KMeansClustering",
        demo: "https://segmentify.streamlit.app/",
      },

      {
        number: "06",
        title: "FitAI Workout Recommender",
        category: "AI / RECOMMENDER SYSTEM",
        description:
          "A workout recommendation system that suggests exercises based on user input using TF-IDF and cosine similarity.",
        tech: ["Python", "Streamlit", "TF-IDF", "ML"],
        color: "lavender",
        filterCategory: "AI",
        github: "https://github.com/aliciaajsp/AIWorkoutRecommendation-FinalProjectML",
        demo: "https://aiworkoutrecommendation-mlproject.streamlit.app/",
      },

      {
        number: "07",
        title: "SmartMental AI",
        category: "AI & WEB DEVELOPMENT",
        description:
          "An AI-powered mental wellness chatbot with customizable conversation styles and mood-based interaction.",
        tech: ["Node.js", "Express.js", "Gemini API", "JavaScript", "HTML", "CSS"],
        color: "periwinkle",
        filterCategory: "AI",
        github: "https://github.com/discaaa/SmartMentalAI",
      },

      {
        number: "08",
        title: "Sudoku Solver",
        category: "MACHINE LEARNING / COMPUTER VISION",
        description:
          "An AI-powered Sudoku solver that uses CNN-based digit recognition to detect numbers from Sudoku images and solves the puzzle using a backtracking algorithm.",
        tech: ["Python", "CNN", "HuggingFace", "Backtracking Algorithm"],
        color: "pink",
        filterCategory: "AI",
        github: "https://github.com/aliciaajsp/CompvisSudokuProject",
      },

      {
        number: "09",
        title: "Indonesian Sentiment Analysis",
        category: "NLP / MACHINE LEARNING",
        description:
          "A sentiment analysis project that classifies Tokopedia user reviews into positive, negative, and neutral sentiments using natural language processing and machine learning techniques.",
        tech: ["Python", "FastText", "TF-IDF", "Logistic Regression", "IndoBERT", "XLM-RoBERTa"],
        color: "lavender",
        filterCategory: "AI",
        github: "https://github.com/asipnana/ProjectNLP",
      },

      {
        number: "10",
        title: "Caeve Press On Nails",
        category: "WEB DESING & DEVELOPMENT",
        description:
          "Built a responsive product showcase website for a custom press-on nail brand, featuring product collections, reviews, and FAQ with a clean and user-friendly interface.",
        tech: ["HTML", "CSS"],
        color: "blue",
        filterCategory: "Frontend & Fullstack",
        demo: "https://caevepressonnails.vercel.app/",
      },

    ],
  };

  const projectCategories = [
    "All",
    "UI/UX Design",
    "Frontend & Fullstack",
    "AI",
    "Data",
  ];

  const certificateCategories = [
    "All",
    "Language",
    "Web Programming",
    "AI",
    "Data",
    "Competition",
    "Others",
  ];
  
  const [activeProjectCategory, setActiveProjectCategory] = useState("All");
  const [activeCertificateCategory, setActiveCertificateCategory] = useState("All");

  const filteredProjects = activeProjectCategory === "All" ? portfolioData.projects : portfolioData.projects.filter((project) => project.filterCategory === activeProjectCategory);
  const filteredCertificates = activeCertificateCategory === "All" ? certificates : certificates.filter((certificate) => certificate.category === activeCertificateCategory);

  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home" className="logo">
          Adisca's Portfolio<span> .</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk <span>↗</span>
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-label">
            <span className="label-dot"></span>
            COMPUTER SCIENCE STUDENT
          </div>

          <h1>
            Hi, I'm{" "}
            <span className="name-highlight">
              Adisca .
            </span>

            <br />
            I build things with
            <br />

            <span className="gradient-text">
              code & AI .
            </span>
          </h1>

          <p className="hero-description">
            I'm a Computer Science student interested in Front-End Development, Data Analysis, and Machine Learning. I enjoy creating responsive interfaces, building practical applications, and exploring how technology can turn ideas into meaningful digital experiences.
            I also enjoy exploring data, identifying patterns, and uncovering insights that help turn raw data into meaningful information.
          </p>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="primary-button"
            >
              View My Work
              <span>↗</span>
            </a>

            <a
              href="#contact"
              className="secondary-button"
            >
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>•</span>

            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-shape shape-one"></div>
          <div className="floating-shape shape-two"></div>
          <div className="code-card">
            <div className="code-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="file-name">
                portfolio.js
              </span>
            </div>

            <div className="code-body">
              <div>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">
                  developer
                </span>{" "}
                =
              </div>

              <div className="indent">
                {"{"}
              </div>

              <div className="indent-2">
                <span className="code-pink">
                  name
                </span>
                :{" "}
                <span className="code-green">
                  "Adisca Gandawidjaja"
                </span>
                ,
              </div>

              <div className="indent-2">
                <span className="code-pink">
                  field
                </span>
                :{" "}
                <span className="code-green">
                  "Computer Science"
                </span>
                ,
              </div>

              <div className="indent-2">
                <span className="code-pink">
                  interests
                </span>
                : [
              </div>

              <div className="indent-3">
                <span className="code-green">
                  "Front-End Developer"
                </span>
                ,
              </div>

              <div className="indent-3">
                <span className="code-green">
                  "Data Analysis"
                </span>
                ,
              </div>

              <div className="indent-3">
                <span className="code-green">
                  "AI & Machine Learning"
                </span>
              </div>

              <div className="indent-2">
                ],
              </div>

              <div className="indent-2">
                <span className="code-pink">
                  currently
                </span>
                :{" "}
                <span className="code-green">
                  "Learning, Building & Upgrading Skills"
                </span>
              </div>

              <div className="indent">
                {"}"};
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-content">
          <span>DATA ANALYST</span>
          <b>✦</b>
          <span>FRONT-END DEVELOPMENT</span>
          <b>✦</b>
          <span>ARTIFICIAL INTELLIGENCE</span>
          <b>✦</b>
          <span>WEB DEVELOPMENT</span>
          <b>✦</b>
          <span>MACHINE LEARNING</span>
        </div>
      </div>

      <section className="section about" id="about">
        <div className="section-heading">
          <div className="section-number">
            01
          </div>
          <div>

            <p className="eyebrow">
              MORE ABOUT ME
            </p>

            <h2>
              Turning curiosity
              <br />
              into <span>projects.</span>
            </h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Computer Science student at BINUS University, currently specializing in Artificial Intelligence and taking Web Programming as a free elective.
            </p>

            <p>
              My current focus is on Front-End Development, Data Analysis, and Machine Learning. I enjoy building projects that combine clean, user-friendly interfaces with practical technology, from responsive websites and full-stack applications to AI and ML-powered solutions.
            </p>

            <p>
              I'm always looking to expand my skills by learning through hands-on projects and exploring how technology can solve real-world problems.
            </p>

            <a
              href="#contact"
              className="text-link"
            >
              Let's connect <span>↗</span>
            </a>
          </div>

          <div className="about-cards">
            <div className="mini-card pink-card">
              <div className="mini-icon">FE</div>
              <h3>Front-End Development</h3>
              <p>Creating responsive and user-friendly interfaces.</p>
            </div>

            <div className="mini-card lavender-card">
              <div className="mini-icon">WEB</div>
              <h3>Web Development</h3>
              <p>Creating functional digital experiences.</p>
            </div>

            <div className="mini-card blue-card">
              <div className="mini-icon">DA</div>
              <h3>Data Analysis</h3>
              <p>Finding patterns in data, exploring trends, and turning data into meaningful insights.</p>
            </div>

            <div className="mini-card periwinkle-card">
              <div className="mini-icon">NLP</div>
              <h3>Machine Learning</h3>
              <p>Learning from data and patterns.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="center-heading">
          <p className="eyebrow">
            MY TOOLKITS
          </p>

          <h2>
            Skills & <span>Technologies.</span>
          </h2>

          <p>
            Tools and technologies I've worked with while learning,
            experimenting, and building projects.
          </p>
        </div>

        <div className="skills-container">
          {portfolioData.skills.map((skill, index) => (
            <div
              className={`skill skill-${index % 5}`}
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-heading">
          <div className="section-number">
            02
          </div>

          <div>
            <p className="eyebrow">
              MY PROJECTS
            </p>

            <h2>
              Things I've <span>built.</span>
            </h2>
          </div>
        </div>

        <div className="category-filters">
          {projectCategories.map((category) => (
            <button
              key={category}
              className={`category-button ${
                activeProjectCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveProjectCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              className={`project-card ${project.color}`}
              key={project.title}
            >

              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-arrow">
                  ↗
                </span>
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>
                {project.title}
              </h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>

            </article>
          ))}
        </div>
      </section>

      <section className="section certificates-section" id="certificates">
        <div className="section-heading">
          <div className="section-number">
            03
          </div>

          <div>
            <p className="eyebrow" id="achievements">CERTIFICATES & ACHIEVEMENTS</p>
            <h2>
              Learning, <span>certified.</span>
            </h2>
          </div>
        </div>

        <p className="certificates-intro">
          A collection of certifications and achievements from my learning
          journey in technology, web development, AI, and computer science.
        </p>

        <div className="category-filters">
          {certificateCategories.map((category) => (
            <button
              key={category}
              className={`category-button ${
                activeCertificateCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCertificateCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="certificates-grid">
          {filteredCertificates.map((certificate, index) => {
            const extension = certificate.file.split(".").pop().toUpperCase();
            const isImage = ["PNG", "JPG", "JPEG", "WEBP"].includes(extension);

            return (
              <article
                className={`certificate-card certificate-${index % 4}`}
                key={certificate.file}
              >
                <div className="certificate-visual">
                  <div className="certificate-grid-pattern"></div>

                  <div className="certificate-topline">
                    <span>ADISCA G.</span>
                    <span>{extension}</span>
                  </div>

                  <div className="certificate-orbit">
                    <span>✦</span>
                  </div>

                  <div className="certificate-preview">
                    <span>{certificate.type.toUpperCase()}</span>
                    <strong>{certificate.title}</strong>
                    {certificate.issuer && (
                      <small>{certificate.issuer}</small>
                    )}
                  </div>

                  {certificate.date && (
                    <div className="certificate-year">{certificate.date}</div>
                  )}

                  {isImage && (
                    <div className="certificate-image-badge">IMAGE</div>
                  )}
                </div>

                <div className="certificate-info">
                  <div className="certificate-meta">
                    <p className="certificate-label">
                      {certificate.type.toUpperCase()}
                    </p>
                    <h3>{certificate.issuer || "Achievement"}</h3>
                  </div>

                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-button"
                  >
                    View <span>↗</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-decoration">
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
        </div>

        <div className="contact-content">
          <p className="eyebrow">
            GET IN TOUCH
          </p>

          <h2>
            Let's build something
            <br />
            <span>interesting.</span>
          </h2>

          <p>
            Whether it's an internship opportunity, collaboration,
            <br />
            or just want to say hi, feel free to reach out.
          </p>

          <a
            href={`mailto:${portfolioData.email}`}
            className="contact-button"
          >
            Say Hello
            <span>↗</span>
          </a>
        </div>

        <div className="contact-info">
          <a
            href={`mailto:${portfolioData.email}`}
            className="contact-item"
          >
            <span className="contact-label">EMAIL</span>
            <span className="contact-value">
              {portfolioData.email}
              <span>↗</span>
            </span>
          </a>

          <a
            href={`tel:${portfolioData.phone}`}
            className="contact-item"
          >
            <span className="contact-label">PHONE</span>
            <span className="contact-value">
              {portfolioData.phone}
              <span>↗</span>
            </span>
          </a>

          <a
            href={portfolioData.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-label">INSTAGRAM</span>
            <span className="contact-value">
              @discaa.g
              <span>↗</span>
            </span>
          </a>

          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-label">LINKEDIN</span>
            <span className="contact-value">
              Adisca Gandawidjaja
              <span>↗</span>
            </span>
          </a>

          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-label">GITHUB</span>
            <span className="contact-value">
              @discaaa
              <span>↗</span>
            </span>
          </a>
        </div>
      </section>

      <footer>
        <div>
          <span className="footer-logo">
            dca.
          </span>
          <span>
            © 2026 Adisca Gandawidjaja
          </span>
        </div>
        <div>
          Built Using React
        </div>
      </footer>
    </div>
  );
}

export default App;