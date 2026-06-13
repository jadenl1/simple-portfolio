export const projects = [
	{
		title: "Vehicle-to-Everything Integrated Traffic Relief Simulation",
		skills: "Python, SUMO, Scikit-Learn",
		details: (
			<>
				<p>
					Automated Python MAPE/RMSE calibration of SUMO traffic parameters, achieving{" "}
					{"<"} 10% error in flows and travel times.
					<br />
					<br />
					Integrated Vehicle-to-Everything communication (V2X) via Python-controlled SUMO
					netradio/TraCI, cutting average travel times by 10%.
					<br />
					<br />
					Constructed a Python ML pipeline (scikit-learn/TensorFlow) for peak-hour demand
					forecasting and routing, boosting accuracy by 15%.
					<br />
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
		title: "Cofounder, NitesOut: Collaborative Filtering Event Discovery Engine",
		skills: "Scikit-Surprise, Python, Google Cloud",
		details: (
			<>
				<p>
					Cofounded and led both creative and full-stack development for NitesOut, a
					personalized event discovery web app.
					<br />
					<br />
					Implemented & deployed collaborative-filtering recommender (Pandas,
					Scikit-Surprise) via Django hosted on Google Cloud.
					<br />
					<br />
					Reduced API round-trip latency by 35% by routing lightweight requests (Stripe,
					Auth, database queries) through a dedicated Express service and handling
					compute-intensive tasks (user feed generation) through Django.
					<br />
					<br />
					Organized 15 branded events (500–1,000 attendees each), generating $95k in
					revenue.
					<br />
					<br />
					Jul 2023 — Current
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
