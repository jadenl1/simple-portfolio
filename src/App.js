import React, { useState } from 'react';
import './App.css';
import { FaFolder } from 'react-icons/fa';
import Navbar from './components/Navbar';

import { LuFingerprint } from "react-icons/lu";
import { FiBriefcase } from "react-icons/fi";
import { MdOutlineFolderCopy } from "react-icons/md";
import { PiMountainsBold } from "react-icons/pi";

import { GoArrowUpRight } from "react-icons/go";

const skillColorMap = {
  'Python': { bg: 'rgba(0, 119, 182, 0.2)', text: '#E0F2FF' },
  'React': { bg: 'rgba(31, 122, 224, 0.2)', text: '#E0F4FF' },
  'Node': { bg: 'rgba(34, 139, 34, 0.2)', text: '#E7FBE9' },
  'Firebase': { bg: 'rgba(249, 168, 37, 0.2)', text: '#FFF4D6' },
  'JavaScript': { bg: 'rgba(230, 184, 0, 0.2)', text: '#FFFACD' },
  'AWS': { bg: 'rgba(255, 153, 0, 0.2)', text: '#FFEBCD' },
  'SageMaker': { bg: 'rgba(0, 133, 113, 0.2)', text: '#D9F4EC' },
  'S3': { bg: 'rgba(30, 64, 175, 0.2)', text: '#D6ECFF' },
  'Lambda': { bg: 'rgba(222, 91, 24, 0.2)', text: '#FBE9E7' },
  'SUMO': { bg: 'rgba(123, 31, 162, 0.2)', text: '#F0EBFA' },
  'Scikit-Learn': { bg: 'rgba(242, 145, 0, 0.2)', text: '#FFF0E5' },
  'Scikit-Surprise': { bg: 'rgba(123, 31, 162, 0.2)', text: '#F0EBFA' },
  'Google Cloud': { bg: 'rgba(26, 115, 232, 0.2)', text: '#E0F3FE' },
  'NLP': { bg: 'rgba(194, 24, 91, 0.2)', text: '#FFE6F0' },
  'Bots': { bg: 'rgba(90, 90, 255, 0.2)', text: '#DDE3FF' },         // soft blueish robot tone
  'LLM': { bg: 'rgba(100, 30, 200, 0.2)', text: '#E5D9FF' },         // violet tone for AI/LLM
};

const Tag = ({ label }) => {
  const { bg, text } = skillColorMap[label.trim()] || { bg: '#E0E0E0', text: '#333' };
  return (
    <span
      style={{
        backgroundColor: bg,
        color: text,
        fontSize: '10px',
        fontWeight: 400,
        padding: '0 10px',
        borderRadius: '999px',
        height: '24px',
        display: 'inline-flex',
        alignItems: 'center',
        marginRight: '3px',
        marginBottom: '3px'
      }}
    >
      {label}
    </span>
  );
};


function App() {
  const [openExperience, setOpenExperience] = useState(null);
  const [openProject, setOpenProject] = useState(null);
  const toggleExperience = idx => setOpenExperience(openExperience === idx ? null : idx);
  const toggleProject = idx => setOpenProject(openProject === idx ? null : idx);

  const experiences = [
    {
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
          <p>Automated Python MAPE/RMSE calibration of SUMO traffic parameters, achieving {"<"} 10% error in flows and travel times. Integrated Vehicle-to-Everything communication (V2X) via Python-controlled SUMO netradio/TraCI, cutting average travel times by 10%. Constructed a Python ML pipeline (scikit-learn/TensorFlow) for peak-hour demand forecasting and routing, boosting accuracy by 15%.<br/>Developed May 2025.</p>
        </>
      )
    },
    {
      title: 'Cloud Native MRI-Scan Anomaly Detection Pipeline',
      skills: 'AWS, SageMaker, S3, Lambda, React',
      details: (
        <>
          <p>Architected serverless DICOM file upload path (S3, API Gateway, Lambda, EventBridge), shrinking MRI ingest from 3 min to 15s and eliminating EC2 upkeep. Deployed a MONAI CNN via SageMaker with AWS HealthImaging back-end, achieving 96% F1 in anomaly detection and 5s inference.<br/>Developed Jan 2025 - Feb 2025</p>
        </>
      )
    },
    {
      title: 'Cofounder, NitesOut: Collaborative Filtering Event Discovery Engine',
      skills: 'Scikit-Surprise, Python, Google Cloud',
      details: (
        <>
          <a href='https://www.nitesout.info/' target='_blank' rel='noopener noreferrer'>Visit project ➝</a>
          <p>Cofounded and led both creative and full-stack development for NitesOut, a personalized event discovery web app. Implemented & deployed collaborative-filtering recommender (Pandas, Scikit-Surprise) via Django hosted on Google Cloud. Reduced API round-trip latency by 35% by routing lightweight requests (Stripe, Auth, database queries) through a dedicated Express service and handling compute-intensive tasks (user feed generation) through Django. Organized 15 branded events (500–1,000 attendees each), generating $95k in revenue.<br/>Developed Jul 2023 - Oct 2024.</p>
        </>
      )
    },
    {
      title: 'Founder, Teryn: AI Solutions Consulting for Local Business',
      skills: 'Bots, LLM, AWS',
      details: (
        <>
            <a href='https://teryn.app/' target='_blank' rel='noopener noreferrer'>Visit project ➝</a>
          <p>Tech consulting company that builds custom AI-driven solutions to help local businesses automate operations, boost customer engagement, and scale intelligently. Specializes in deploying lightweight, tailored tools powered by LLMs, bots, and data-driven pipelines.<br/>Developed May 2025.</p>
        </>
      )
    },
    {
      title: 'Techtionary: Documentation Platform for Computer Science Terms',
      skills: 'React, Node, Firebase',
      details: (
        <>
          <a href='https://github.com/jadenl1/buzzword-techtionary' target='_blank' rel='noopener noreferrer'>Visit project ➝</a>
          <p>Technical Dictionary for words and buzzwords within the computer science industry that is communicated to users in short, easy-to-understand definitions that are {"<"}2 sentences. Developed a user-searchable dictionary that utilizes a self-curated API with 1000+ documents containing a word, part-of-speech, definition, key-value nodes for all terms related to computer science. Implemented OAuth user sign-in functionality, allowing users to create, like, and report their own and others' technical vocabularies into a separate user-created API. Utilized the TwitterAPI to search for trending vocabulary words and displays them onto the community page.<br/>Developed Jan 2022 - Mar 2022.</p>
        </>
      )
    },
    {
      title: 'Crypto-Currency Public Connotation AI Using Twitter API & Sentiment Analysis',
      skills: 'Python, NLP',
      details: (
        <>
          <a href='https://devpost.com/software/crypto-popularity-predictor' target='_blank' rel='noopener noreferrer'>Visit project ➝</a>
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
          <div className="section-title a a1"><LuFingerprint className='icon-inline'/><h1>Jaden Leonard</h1></div>
          <p className="aa a2">Developer from Maryland<br/>Computer Science B.S @ University of Maryland, College Park<br/>Studying Computer Science M.S @ Bowie State University, expected Spring 2027</p>

            <span className="page-header-links a a3">
                <a className="page-header-link" href="https://www.linkedin.com/in/leonardjaden/" target="_blank" rel="noopener noreferrer">
                    <span className="page-header-link-text">LinkedIn</span>
                    <span className="link-icon"><GoArrowUpRight/></span>
                </a>
                <a className="page-header-link" href='https://github.com/jadenl1' target="_blank" rel="noopener noreferrer">
                    <span className="page-header-link-text">GitHub</span>
                    <span className="link-icon"><GoArrowUpRight/></span>
                </a>
                <a className="page-header-link" href="mailto:jleonardSTEM2021@gmail.com" rel="noopener noreferrer">
                    <span className="page-header-link-text">Email</span>
                    <span className="link-icon"><GoArrowUpRight/></span>
                </a>
            </span>
        </div>
        
        <hr className="section-divider aaa a4" id="experience"/>
        <div className="page-section a a5">
          <div className="section-title"><FiBriefcase className='icon-inline'/><h1>Experience</h1></div>
          <ul className="experience-grid">
                {experiences.map((exp, idx) => (
                    <li key={idx} className="experience-entry">
                    <div className="experience-meta">
                        <p className="experience-title">
                            {exp.role} @ {exp.company}
                        </p>
                        <p className="experience-dates">{exp.details.props.children[0].props.children}</p>
                    </div>
                    <div className="experience-description">
                        <p>{exp.details.props.children[1].props.children}</p>
                    </div>
                    </li>
                ))}
            </ul>
        </div>

        <hr className="section-divider" id="projects"/>
        <div className="page-section">
          <div className='section-title'><MdOutlineFolderCopy className="icon-inline"/><h1>Projects</h1></div>
          <ul className="experience-list">
            {projects.map((proj, idx) => (
              <li key={idx} className="project-item">
                <div className="project-header" onClick={() => toggleProject(idx)}>
                  <GoArrowUpRight className="project-icon"/>
                  <div className="project-info">
                    <span className="project-title">{proj.title}</span>
                    {proj.skills.split(',').map(skill => (
                        <span><Tag key={skill} label={skill.trim()} /></span>
                    ))}
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
            <div className='section-title'><PiMountainsBold className="icon-inline"/><h1>My Favorite Photos</h1></div>
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
            <p>If you would like to get in touch, feel free to reach out via email jleonardSTEM2021@gmail.com or connect with me on LinkedIn</p>
            <p>Portfolio made with love by Jaden Leonard</p>
            <Tag label="JavaScript" />
            <Tag label="React" />
            <Tag label="Node" />
        </div>
      </div>
    </div>
  );
}

export default App;
