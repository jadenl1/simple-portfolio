import React, { useState } from 'react';
import './App.css';
import { FaFolder } from 'react-icons/fa';
import Navbar from './components/Navbar';

function App() {
  const [openExperience, setOpenExperience] = useState(null);
  const [openProject, setOpenProject] = useState(null);
  const toggleExperience = idx => setOpenExperience(openExperience === idx ? null : idx);
  const toggleProject = idx => setOpenProject(openProject === idx ? null : idx);

  const experiences = [
    {
      logo: require('./assets/bitcamp.png'),
      company: 'Bitcamp',
      role: 'Organizer, Software Team',
      details: (
        <>
          <p>Aug 2022 – Jan 2023</p>
          <p>Deployed Vue3/Nuxt3 judging interface integrated with AWS Lambda and Docker-based CI/CD, streamlining project review judges & cutting deployment time.</p>
        </>
      )
    },
    {
      logo: require('./assets/umbc.png'),
      company: 'University of Maryland, Baltimore County',
      role: 'Undergraduate Research Assistant',
      details: (
        <>
          <p>Aug 2021 – Feb 2023</p>
          <p>Built unsupervised CNN in Python (TensorFlow & Keras) that clustered 2,000 galaxy radial maps into 6 classes with 93% silhouette score.</p>
        </>
      )
    },
    {
      logo: require('./assets/hackumbc.png'),
      company: 'HackUMBC',
      role: 'Organizer, Software Lead',
      details: (
        <>
          <p>Nov 2021 – Aug 2022</p>
          <p>Led rebuild of legacy system to improve speed, real-time features, and design, cutting load time and boosting user satisfaction.</p>
        </>
      )
    }
  ];

  const projects = [
    {
      title: 'Vehicle-to-Everything Integrated Traffic Relief Simulation',
      skills: 'Python, SUMO, Scikit-Learn',
      details: (
        <>
          <a href='https://github.com/jadenl1' target='_blank' rel='noopener noreferrer'>Visit project ➝</a>
          <p>Automated Python MAPE/RMSE calibration of SUMO traffic parameters, achieving {"<"} 10% error in flows and travel times. Integrated Vehicle-to-Everything communication (V2X) via Python-controlled SUMO netradio/TraCI, cutting average travel times by 10%. Constructed a Python ML pipeline (scikit-learn/TensorFlow) for peak-hour demand forecasting and routing, boosting accuracy by 15%.<br/>Developed May 2025.</p>
        </>
      )
    },
    {
      title: 'Cloud Native MRI-Scan Anomaly Detection Pipeline',
      skills: 'AWS HealthImaging, SageMaker, S3, Lambda, React',
      details: (
        <>
          <a href='https://github.com/jadenl1' target='_blank' rel='noopener noreferrer'>Visit project ➝</a>
          <p>Architected serverless DICOM file upload path (S3, API Gateway, Lambda, EventBridge), shrinking MRI ingest from 3 min to 15s and eliminating EC2 upkeep. Deployed a MONAI CNN via SageMaker with AWS HealthImaging back-end, achieving 96% F1 in anomaly detection and 5s inference.<br/>Developed Jan 2025 - Feb 2025</p>
        </>
      )
    },
    {
      title: 'Startup, NitesOut: Collaborative Filtering Event Discovery Engine',
      skills: 'Scikit-Surprise, Python, Google Cloud',
      details: (
        <>
          <a href='https://github.com/jadenl1' target='_blank' rel='noopener noreferrer'>Visit project ➝</a>
          <p>Cofounded and led both creative and full-stack development for NitesOut, a personalized event discovery web app. Implemented & deployed collaborative-filtering recommender (Pandas, Scikit-Surprise) via Django hosted on Google Cloud. Reduced API round-trip latency by 35% by routing lightweight requests (Stripe, Auth, database queries) through a dedicated Express service and handling compute-intensive tasks (user feed generation) through Django. Organized 15 branded events (500–1,000 attendees each), generating $95k in revenue.<br/>Developed Jul 2023 - Oct 2024.</p>
        </>
      )
    },
    {
      title: 'Techtionary: Documentation Platform for Computer Science Terms',
      skills: 'React, Node, Firebase',
      details: (
        <>
          <a href='https://github.com/jadenl1' target='_blank' rel='noopener noreferrer'>Visit project ➝</a>
          <p>Technical Dictionary for words and buzzwords within the computer science industry that is communicated to users in short, easy-to-understand definitions that are {"<"}2 sentences. Developed a user-searchable dictionary that utilizes a self-curated API with 1000+ documents containing a word, part-of-speech, definition, key-value nodes for all terms related to computer science. Implemented OAuth user sign-in functionality, allowing users to create, like, and report their own and others' technical vocabularies into a separate user-created API. Utilized the TwitterAPI to search for trending vocabulary words and displays them onto the community page.<br/>Developed Jan 2022 - Mar 2022.</p>
        </>
      )
    },
    {
      title: 'Crypto-Currency Public Connotation AI Using Twitter API & Sentiment Analysis',
      skills: 'Python, NLP',
      details: (
        <>
          <a href='https://github.com/jadenl1' target='_blank' rel='noopener noreferrer'>Visit project ➝</a>
          <p>Won 1st Place Winner for HackUMBC's Best Data-Driven Application! Utilized Sentiment Analysis & Natural Language Processing A.I. to read recent tweets regarding crypto-currency phrases to generate a general score for overall public connotation. Factored in multi-dimensional tweet metrics, alongside multiple separate account data points to conclude a connotation- likes, retweets, user followers, user verification, etc. with 95% accuracy.<br/>Developed Oct 2021.</p>
        </>
      )
    }
  ];

  return (
    <div className="app" id="jaden">
        <Navbar/>
      <div className="page">
        <div className="page-header">
          <h1>Jaden Leonard</h1>
          <p>Developer from Maryland.<br/><br/>Graduated B.S in Computer Science from the University of Maryland, College Park. Pursuing M.S in Computer Science @ Bowie State University, expected May 2027.<br/><br/>Interested in data science, machine learning, devops, cloud engineering, and full-stack development.</p>
          <span className="page-header-links">
            <a href="https://www.linkedin.com/in/leonardjaden/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/jadenl1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:jleonardSTEM2021@gmail.com" rel="noopener noreferrer">Email</a>
          </span>
        </div>
        
        <hr className="section-divider" id="experience"/>
        <div className="page-section">
          <h1>Experience</h1>
          <ul className="experience-list">
            {experiences.map((exp, idx) => (
              <li key={idx} className="experience-item">
                <div className="experience-header" onClick={() => toggleExperience(idx)}>
                  <img src={exp.logo} alt="logo"/>
                  <div className="experience-info">
                    <p>{exp.company}</p>
                    <p>{exp.role}</p>
                  </div>
                </div>
                <div className={`experience-details ${openExperience === idx ? 'open' : ''}`}>
                  {exp.details}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <hr className="section-divider" id="projects"/>
        <div className="page-section">
          <h1>Projects</h1>
          <ul className="experience-list">
            {projects.map((proj, idx) => (
              <li key={idx} className="project-item">
                <div className="project-header" onClick={() => toggleProject(idx)}>
                  <FaFolder className="project-icon"/>
                  <div className="project-info">
                    <span className="project-title">{proj.title}</span>
                    <span className="project-skills"><i>{proj.skills}</i></span>
                  </div>
                </div>
                <div className={`project-details ${openProject === idx ? 'open' : ''}`}>
                  {proj.details}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <hr className="section-divider" id="photos"/>
        <div className='page-section'>
            <h1>My Photos</h1>
            <div className='photo-grid'>
                <img src={require('./assets/myphotos/mp-boat.JPG')}/>
                <img src={require('./assets/myphotos/mp-sanfran.JPG')}/>
                <img src={require('./assets/myphotos/mp-la.JPG')}/>
                <img src={require('./assets/myphotos/mp-greenhouse.JPG')}/>
                <img src={require('./assets/myphotos/mp-greatfalls.jpg')}/>
                <img src={require('./assets/myphotos/mp-garden.jpg')}/>
            </div>
        </div>

        <hr className="section-divider"/>
        <div className="page-section" id = "footer">
            <p>If you would like to get in touch, feel free to reach out via email jleonardSTEM2021@gmail.com or connect with me on LinkedIn.</p>
            <p>Portfolio made with love by Jaden Leonard.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
