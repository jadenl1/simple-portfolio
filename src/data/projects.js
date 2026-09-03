export const projects = [
	{
		title: "x402 Agentic AI Payment Gateway",
		skills: "Node, Express, AWS Fargate, ElastiCache, Twilio",
		details: (
			<>
				<p>
					Built an AWS Fargate reverse proxy using the x402 protocol to intercept agentic
					AI financial transactions in real time, giving users absolute spending oversight
					via SMS wallet control.
					<br />
					<br />
					Reduced payment finality to {"<"}2s by implementing an ElastiCache-backed state
					machine to hold payloads in memory, eliminating timeout failures in
					high-throughput agent workflows.
					<br />
					<br />
					Secured credentials with AWS Secrets Manager, drawing keys strictly at execution
					for 100% secure authorized AI spending.
					<br />
					<br />
					Apr 2026 — Jun 2026
				</p>
			</>
		),
	},
	{
		title: "V2X Integrated Traffic Relief Simulation",
		skills: "Python, SUMO, Scikit-Learn, TensorFlow",
		details: (
			<>
				<p>
					Automated MAPE/RMSE calibration of SUMO simulation parameters, achieving
					{"<"}10% error in vehicle flow and travel time against real-world baselines.
					<br />
					<br />
					Integrated V2X communication via SUMO TraCI, reducing simulated average travel
					times by 10% through real-time signal coordination between vehicles and
					infrastructure.
					<br />
					<br />
					Constructed a scikit-learn / TensorFlow ML pipeline for peak-hour demand
					forecasting and adaptive routing, improving prediction accuracy by 15% over
					baseline models.
					<br />
					<br />
					Apr 2025 — May 2025
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
					EventBridge), shrinking MRI ingest from 3 min to 15s and eliminating EC2 upkeep.
					<br />
					<br />
					Deployed a MONAI CNN via SageMaker with AWS HealthImaging back-end, achieving
					96% F1 in anomaly detection and 5s inference.
					<br />
					<br />
					Jan 2025 — Feb 2025
				</p>
			</>
		),
	},
	{
		title: "NitesOut Event Discovery Platform",
		skills: "Pandas, Scikit-Surprise, React, Express, Django, GCP",
		details: (
			<>
				<p>
					Tailored event discovery through collaborative-filtering recommender
					(Scikit-Surprise) hosted via Django on Google Cloud.
					<br />
					<br />
					Reduced API round-trip latency by 35% by routing lightweight requests (Stripe,
					Auth, database) through a dedicated Express microservice and reserving Django
					for compute-intensive feed generation.
					<br />
					<br />
					Scaled the platform to support 15 branded events (500–1,000 attendees each),
					generating $50k+ in revenue.
					<br />
					<br />
					Jul 2023 — Oct 2024
				</p>
			</>
		),
	},
	{
		title: "Techtionary: Documentation Platform for Computer Science Terms",
		skills: "React, Node, Firebase",
		details: (
			<>
				<p>
					Technical Dictionary for words and buzzwords within the computer science
					industry that is communicated to users in short, easy-to-understand definitions
					that are {"<"}2 sentences.
					<br />
					<br />
					Developed a user-searchable dictionary that utilizes a self-curated API with
					1000+ documents containing a word, part-of-speech, definition, key-value nodes
					for all terms related to computer science.
					<br />
					<br />
					Implemented OAuth user sign-in functionality, allowing users to create, like,
					and report their own and others' technical vocabularies into a separate
					user-created API.
					<br />
					<br />
					Utilized the TwitterAPI to search for trending vocabulary words and displays
					them onto the community page.
					<br />
					<br />
					Jan 2022 — Mar 2022
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
					<br />
					Won 1st Place Winner for HackUMBC's Best Data-Driven Application!
					<br />
					<br />
					Utilized Sentiment Analysis & Natural Language Processing A.I. to read recent
					tweets regarding crypto-currency phrases to generate a general score for overall
					public connotation.
					<br />
					<br />
					Factored in multi-dimensional tweet metrics, alongside multiple separate account
					data points to conclude a connotation- likes, retweets, user followers, user
					verification, etc. with 95% accuracy.
					<br />
					<br />
					Oct 2021
				</p>
			</>
		),
	},
];
