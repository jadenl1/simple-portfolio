export const projects = [
	{
		title: "Vehicle-to-Everything Integrated Traffic Relief Simulation",
		skills: "Python, SUMO, Scikit-Learn",
		details: (
			<>
				<p>
					Automated Python MAPE/RMSE calibration of SUMO traffic parameters, achieving{" "}
					{"<"} 10% error in flows and travel times. Integrated Vehicle-to-Everything
					communication (V2X) via Python-controlled SUMO netradio/TraCI, cutting
					average travel times by 10%. Constructed a Python ML pipeline
					(scikit-learn/TensorFlow) for peak-hour demand forecasting and routing,
					boosting accuracy by 15%.
					<br />
					Developed May 2025.
				</p>
			</>
		),
	},
	{
		title: "Cloud Native MRI-Scan Anomaly Detection Pipeline",
		skills: "AWS, SageMaker, S3, Lambda, React",
		details: (
			<>
				<p>
					Architected serverless DICOM file upload path (S3, API Gateway, Lambda,
					EventBridge), shrinking MRI ingest from 3 min to 15s and eliminating EC2
					upkeep. Deployed a MONAI CNN via SageMaker with AWS HealthImaging back-end,
					achieving 96% F1 in anomaly detection and 5s inference.
					<br />
					Developed Jan 2025 - Feb 2025
				</p>
			</>
		),
	},
	{
		title: "Cofounder, NitesOut: Collaborative Filtering Event Discovery Engine",
		skills: "Scikit-Surprise, Python, Google Cloud",
		details: (
			<>
				<a href="https://www.nitesout.info/" target="_blank" rel="noopener noreferrer">
					Visit project ➝
				</a>
				<p>
					Cofounded and led both creative and full-stack development for NitesOut, a
					personalized event discovery web app. Implemented & deployed
					collaborative-filtering recommender (Pandas, Scikit-Surprise) via Django
					hosted on Google Cloud. Reduced API round-trip latency by 35% by routing
					lightweight requests (Stripe, Auth, database queries) through a dedicated
					Express service and handling compute-intensive tasks (user feed generation)
					through Django. Organized 15 branded events (500–1,000 attendees each),
					generating $95k in revenue.
					<br />
					Developed Jul 2023 - Oct 2024.
				</p>
			</>
		),
	},
	{
		title: "Founder, Teryn: AI Solutions Consulting for Local Business",
		skills: "Bots, LLM, AWS",
		details: (
			<>
				<a href="https://teryn.app/" target="_blank" rel="noopener noreferrer">
					Visit project ➝
				</a>
				<p>
					Tech consulting company that builds custom AI-driven solutions to help local
					businesses automate operations, boost customer engagement, and scale
					intelligently. Specializes in deploying lightweight, tailored tools powered
					by LLMs, bots, and data-driven pipelines.
					<br />
					Developed May 2025.
				</p>
			</>
		),
	},
	{
		title: "Techtionary: Documentation Platform for Computer Science Terms",
		skills: "React, Node, Firebase",
		details: (
			<>
				<a
					href="https://github.com/jadenl1/buzzword-techtionary"
					target="_blank"
					rel="noopener noreferrer"
				>
					Visit project ➝
				</a>
				<p>
					Technical Dictionary for words and buzzwords within the computer science
					industry that is communicated to users in short, easy-to-understand
					definitions that are {"<"}2 sentences. Developed a user-searchable
					dictionary that utilizes a self-curated API with 1000+ documents containing
					a word, part-of-speech, definition, key-value nodes for all terms related to
					computer science. Implemented OAuth user sign-in functionality, allowing
					users to create, like, and report their own and others' technical
					vocabularies into a separate user-created API. Utilized the TwitterAPI to
					search for trending vocabulary words and displays them onto the community
					page.
					<br />
					Developed Jan 2022 - Mar 2022.
				</p>
			</>
		),
	},
	{
		title: "Crypto-Currency Public Connotation AI Using Twitter API & Sentiment Analysis",
		skills: "Python, NLP",
		details: (
			<>
				<a
					href="https://devpost.com/software/crypto-popularity-predictor"
					target="_blank"
					rel="noopener noreferrer"
				>
					Visit project ➝
				</a>
				<p>
					Won 1st Place Winner for HackUMBC's Best Data-Driven Application! Utilized
					Sentiment Analysis & Natural Language Processing A.I. to read recent tweets
					regarding crypto-currency phrases to generate a general score for overall
					public connotation. Factored in multi-dimensional tweet metrics, alongside
					multiple separate account data points to conclude a connotation- likes,
					retweets, user followers, user verification, etc. with 95% accuracy.
					<br />
					Developed Oct 2021.
				</p>
			</>
		),
	},
];
