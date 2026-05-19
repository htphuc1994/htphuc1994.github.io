export const profile = {
  name: "Phuc (Levi) Huynh",
  shortName: "Levi Huynh",
  title: "Senior Software Engineer",
  tagline: "10+ years building scalable platforms across fintech, healthcare, and edtech.",
  location: "Binh Dong Ward, HCMC, Vietnam",
  email: "htphuc.cs@gmail.com",
  phone: "(+84) 90 2413 227",
  github: "https://github.com/htphuc1994",
  linkedin: "https://www.linkedin.com/in/phuc-huynh-a6394313a",
  orcid: "https://orcid.org/0009-0000-0402-2432",
  photo: "/cv/PhucHT4x6RedShirt2026.png",
  resumePdf: "/cv/PhucHuynh_CV.pdf",
};

export const summary = `Senior Software Engineer and emerging technical leader with 10+ years of experience designing scalable software platforms across fintech, healthcare, recruitment, and education technology. Strong background in Java/Spring, ReactJS, Python, microservices, AWS, Kubernetes, CI/CD, and distributed system design. Proven ability to drive architectural decisions, improve performance, mentor engineers, and deliver reliable production systems for international teams. With an M.Eng. in Computer Science, ongoing Ph.D. research, and publications in AI/ML and optimization, brings a strong combination of practical engineering leadership and research-oriented problem solving.`;

export type Role = {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  highlights: string[];
  stack?: string;
};

export const roles: Role[] = [
  {
    period: "Mar 2026 — Present",
    title: "Journal Reviewer",
    company: "Information Processing & Management",
    companyUrl: "https://www.sciencedirect.com/journal/information-processing-and-management",
    location: "SCIE/Scopus Q1",
    highlights: [
      "Peer reviewer for a Q1 journal on information retrieval, NLP, and applied AI research.",
    ],
  },
  {
    period: "Dec 2025 — Present",
    title: "Senior Engineer",
    company: "Propel Ventures",
    companyUrl: "https://www.propelventures.com.au/",
    location: "Australia (remote)",
    highlights: [
      "Tinybeans — backend engineering on the family-memories platform.",
      "Education Perfect — applied prompt engineering work with Google Gemini.",
    ],
    stack: "AWS, Spring, Snowflake, Terraform, Gemini",
  },
  {
    period: "Dec 2024 — Dec 2025",
    title: "Analyst Engineer",
    company: "NAB Innovation Centre Vietnam",
    companyUrl: "https://www.nab.com.au/",
    location: "HCMC",
    highlights: [
      "Built and operated services for Consumer Data Right (Open Data) — letting customers share banking/energy data between providers under Australia's CDR regime.",
    ],
    stack: "Java, Spring, MySQL, AWS, Jenkins",
  },
  {
    period: "Mar 2021 — Sep 2024",
    title: "Full-stack Developer",
    company: "Doctor Anywhere",
    companyUrl: "https://doctoranywhere.com/",
    location: "Remote / Singapore",
    highlights: [
      "Built Clinic Management, Specialist Recommendation, and Contact-Centre systems for tele-medicine.",
      "Drove architectural decisions, designed scalable backend services, led code reviews, and mentored teammates.",
      "Managed CI/CD pipelines, automated testing, and performance optimisation.",
    ],
    stack: "Java, Spring, ReactJS, MySQL, DynamoDB, AWS",
  },
  {
    period: "Feb 2021 — Aug 2021",
    title: "Part-time Lecturer",
    company: "HCMC University of Technology (VNU-HCM)",
    companyUrl: "https://hcmut.edu.vn",
    location: "Vietnam",
    highlights: ["Supervised undergraduate theses in computer science."],
  },
  {
    period: "Jun 2016 — Feb 2021",
    title: "Senior Consultant",
    company: "Applied Mesh Pte Ltd",
    companyUrl: "http://appliedmesh.com/",
    location: "Remote / Singapore",
    highlights: [
      "Designed services, improved performance, and added extensive unit, integration, and automation tests.",
    ],
    stack: "Java, ReactJS, MySQL, MongoDB, Elasticsearch",
  },
];

export const skills = [
  { label: "Languages", value: "Java (10+ yrs), Python (4 yrs), JavaScript/TypeScript, HTML & CSS, XML" },
  { label: "Frameworks", value: "Spring / Play (10+ yrs), ReactJS (4–5 yrs), NodeJS" },
  { label: "Cloud", value: "AWS (10 yrs), Google Cloud" },
  { label: "DevOps", value: "Kubernetes, Docker, Jenkins, GitLab CI/CD, Bitbucket" },
  { label: "Messaging", value: "Kafka, RabbitMQ" },
  { label: "Databases", value: "Oracle, MySQL, PostgreSQL, MongoDB, DynamoDB, Redis, Elasticsearch" },
  { label: "Monitoring", value: "Splunk, New Relic" },
  { label: "Architectures", value: "Microservices, RESTful APIs (10+ yrs)" },
];

export const education = [
  {
    period: "Dec 2023 — Present",
    degree: "Ph.D. in Computer Science",
    school: "Industrial University of Ho Chi Minh City",
    schoolUrl: "https://iuh.edu.vn/",
    location: "Vietnam",
    note: "Research focus: AI/ML, optimisation, portfolio optimisation.",
  },
  {
    period: "Sep 2018 — May 2020",
    degree: "M.Eng. in Computer Science",
    school: "HCMC University of Technology (VNU-HCM)",
    schoolUrl: "https://hcmut.edu.vn",
    location: "Vietnam",
    note: "Thesis: Development of a Blockchain-based Social Network (Supervisor: Assoc. Prof. Nguyen Huynh-Tuong).",
    thesisUrl: "https://drive.google.com/drive/u/0/folders/1gHYl3wybaP3zLvWI10Tet3Hyxf0Gv0El",
  },
  {
    period: "Sep 2012 — Apr 2017",
    degree: "B.Eng. in Computer Science — Talented Engineer Program, GPA 8.23/10",
    school: "HCMC University of Technology (VNU-HCM)",
    schoolUrl: "https://hcmut.edu.vn",
    location: "Vietnam",
    note: "Thesis: A Question-Answering System for restaurants and cuisine in HCMC (Supervisor: Prof. Phan Thi Tuoi).",
    thesisUrl: "https://drive.google.com/open?id=0B2xpm9Jf5ylaNGJQSnQ1Q0ttTGs",
  },
];

export type Accomplishment = { year: string; text: string; url?: string };

export const accomplishments: Accomplishment[] = [
  { year: "2026", text: "AWS Certified Machine Learning Engineer — Associate", url: "https://www.credly.com/badges/3850cff9-1b8d-4206-b0d0-c1e34d2887f9/linked_in_profile" },
  { year: "2026", text: "Anthropic — Claude Certified Architect — Foundations", url: "https://verify.skilljar.com/c/jw7uxiwkv2gp" },
  { year: "2026", text: "Anthropic — Claude Code in Action", url: "https://verify.skilljar.com/c/qk7w3ufzo87g" },
  { year: "2026", text: "Anthropic — Building with the Claude API", url: "https://verify.skilljar.com/c/945szf6z8s7z" },
  { year: "2026", text: "Anthropic — Introduction to Model Context Protocol", url: "https://verify.skilljar.com/c/asmowak7i49f" },
  { year: "2026", text: "Anthropic — Introduction to Agent Skills", url: "https://verify.skilljar.com/c/dyezjsvgt4da" },
  { year: "2026", text: "English IELTS 6.5" },
  { year: "2025", text: "Codility Black Belt — highest tier at National Australia Bank." },
  { year: "2025", text: "NAB Recognition Awards (Q2 and Q3)." },
  { year: "2023", text: "Java Certificate — Mangtas, Singapore", url: "https://drive.google.com/file/d/1AeMHoJDwcs10aIt4AnqlFdF7Z9g7mx9E/view?usp=sharing" },
  { year: "2015", text: "Merit-based Scholarship for Academic Excellence — HCMUT." },
  { year: "2012", text: "3rd Prize — Provincial Chemistry Competition for Excellent Students, Tay Ninh." },
  { year: "2012", text: "3rd Prize — Provincial Chemistry Competition for Excellent Students (Casio variant), Tay Ninh." },
  { year: "2005", text: "Prize-winner — District Competition for Excellent Students in Mathematics, Can Giuoc." },
  { year: "2005", text: "3rd Prize — Provincial Painting Competition for Excellent Students, Tay Ninh." },
];

export type Publication = {
  year: string;
  citation: string;
  url?: string;
  venue?: string;
  tag?: string;
};

export const publications: { journals: Publication[]; proceedings: Publication[]; preprints: Publication[] } = {
  journals: [
    {
      year: "2025",
      citation: "Phuc Tan Huynh. An NSGA-III-HOP algorithm for solving the cardinality-constrained multi-period PO problem using wavelet CVaR. Asia-Pacific Journal of Operational Research.",
      url: "https://doi.org/10.1142/S0217595925500526",
      tag: "SCIE/Scopus Q3",
    },
  ],
  proceedings: [
    {
      year: "2025",
      citation: "Huynh, P.T., Son, T.H., Vo, K.D., Huynh-Tuong, N. Twin-Based Reinforcement Learning for Solving Multi-period Portfolio Optimization Problem. IUKM 2025, LNCS vol. 15586, Springer.",
      url: "https://doi.org/10.1007/978-981-96-4603-6_11",
      tag: "Scopus Q3",
    },
    {
      year: "2024",
      citation: "Huynh, P.T., Son, T.H., Vo, K.D., Huynh-Tuong, N., Soukhal, A. Advanced Integration of Fuzzy MTM LSTM and MLP Models for Forecasting Stock Prices. ICTCS 2024, LNNS vol. 1323, Springer.",
      url: "https://doi.org/10.1007/978-981-96-4139-0_27",
      tag: "Scopus Q4",
    },
    {
      year: "2023",
      citation: "Huynh P.T. et al. Portfolio Maximisation Focusing on Dividend-paying Stocks and Banking Interests. 16th National Conference on Fundamental and Applied IT Research, Da Nang.",
      url: "https://doi.org/10.15625/vap.2023.0059",
    },
  ],
  preprints: [
    {
      year: "2025",
      citation: "Huynh, Phuc Tan. One-Step Multi-View Spectral Clustering with Adaptive Graph Learning, Matrix Factorization, and Automatic View Weighting. SSRN.",
      url: "http://dx.doi.org/10.2139/ssrn.5351417",
    },
  ],
};
