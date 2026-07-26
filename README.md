# 📄 AI-Powered ATS Resume Scorer

An AI-powered resume analysis platform that evaluates resumes against job descriptions using semantic similarity and structured resume parsing. The application generates ATS compatibility scores, identifies skill gaps, provides personalized feedback based on ATS component scores, generates downloadable reports, and allows users to securely manage their resume analysis history.

---

# ✨ Features

- 📄 Upload resumes in PDF format
- 📝 Analyze resumes against custom Job Descriptions
- 🎯 Generate ATS compatibility scores
- 🤖 Structured resume parsing using Groq LLM
- 🧠 Semantic similarity matching using Sentence-BERT
- 📊 Component-wise ATS score breakdown
- 🔍 Skill gap detection
- 💡 Score-based feedback and recommendations
- 📑 Download professional PDF reports
- 📂 Resume analysis history
- 📈 Dashboard for managing previous analyses
- 🔐 Secure authentication using Supabase Auth

---

# 📸 Screenshots

> Add application screenshots here.

- Landing Page
- Resume Upload
- ATS Analysis
- Dashboard
- PDF Report

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

---

## Backend

- FastAPI
- Python
- REST APIs
- SQLAlchemy
- Pydantic

---

## Database & Authentication

- PostgreSQL
- Supabase
- Supabase Authentication

---

## AI & Machine Learning

- Sentence-BERT
- Groq LLM
- Scikit-learn
- NumPy
- Pandas

---

## Development Tools

- Git
- GitHub
- VS Code

---

# 🏗 System Architecture

```text
                    ┌──────────────────────────────┐
                    │       Supabase Auth          │
                    │ Login • Signup • Reset       │
                    └──────────────▲───────────────┘
                                   │
                                   │
                          JWT Access Token
                                   │
                                   ▼
                      React Frontend (Vite)
                                   │
                                   │ REST API Calls
                                   ▼
                          FastAPI Backend
                                   │
          ┌────────────────────────┼────────────────────────┐
          │                        │                        │
          ▼                        ▼                        ▼
   Resume Analyzer          Dashboard APIs          Report Generator
          │
          ▼
 Resume Text Extraction
          │
          ▼
 Structured Resume Parsing
      (Groq LLM)
          │
          ▼
 Semantic Matching
 (Sentence-BERT)
          │
          ▼
 ATS Score Engine
          │
   ┌──────┴────────┐
   ▼               ▼
Feedback Engine  Recommendation Engine
          │
          ▼
 PostgreSQL (Supabase)
```

---

# 📂 Project Structure

```text
ATS-Resume-Scorer
│
├── backend
│   ├── api
│   │   ├── auth.py
│   │   └── routes.py
│   │
│   ├── core
│   │   └── config.py
│   │
│   ├── db
│   │   └── supabase_db.py
│   │
│   ├── models
│   │   └── schemas.py
│   │
│   ├── services
│   │   ├── ats_scorer.py
│   │   ├── resume_analyzer.py
│   │   ├── groq_parser.py
│   │   ├── jd_matcher.py
│   │   ├── feedback_engine.py
│   │   ├── recommendation_engine.py
│   │   ├── report_generator.py
│   │   └── pdf_export.py
│   │
│   ├── utils
│   ├── logs
│   └── main.py
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   └── App.jsx
│   │
│   └── public
│
└── README.md
```

---

# ⚙ Workflow

### 1. User Authentication

Users authenticate directly with **Supabase Authentication** from the frontend.

Authentication features include:

- User Registration
- Login
- Password Reset
- Logout
- Session Management

Supabase returns a JWT access token after successful authentication.

---

### 2. Resume Upload

Users upload a PDF resume and provide a Job Description.

---

### 3. Resume Parsing

The backend extracts raw text from the uploaded resume.

The extracted text is then parsed using **Groq LLM**, converting unstructured resume content into structured information such as:

- Skills
- Education
- Experience
- Projects
- Certifications

---

### 4. Semantic Matching

Sentence-BERT generates embeddings for both the structured resume data and the Job Description.

Cosine similarity is used to measure semantic relevance beyond simple keyword matching.

---

### 5. ATS Score Calculation

The ATS scoring engine evaluates the resume using multiple components.

| Component | Weight |
|-----------|--------:|
| Resume Formatting | 20% |
| Keyword Matching | 25% |
| Content Quality | 25% |
| Skill Validation | 15% |
| ATS Compatibility | 15% |

---

### 6. Feedback Generation

The calculated component scores are processed by the Feedback Engine and Recommendation Engine.

Unlike many AI-powered resume analyzers, the feedback is generated from the calculated ATS component scores rather than directly by the LLM, ensuring deterministic and consistent recommendations.

---

### 7. Report Generation

A comprehensive ATS report is generated containing:

- Overall ATS Score
- Resume Summary
- Component-wise Scores
- Skill Gap Analysis
- Resume Strengths
- Areas for Improvement
- Personalized Recommendations

The report can also be exported as a PDF.

---

### 8. Analysis History

Completed analyses are stored in PostgreSQL and displayed in the user's dashboard for future reference.

---

# 🧠 AI Pipeline

```text
Resume PDF
      │
      ▼
Resume Text Extraction
      │
      ▼
Groq LLM
(Structured Resume Parsing)
      │
      ▼
Structured Resume Data
      │
      ▼
Sentence-BERT
(Semantic Matching)
      │
      ▼
ATS Score Engine
      │
      ▼
Feedback Engine
      │
      ▼
Recommendation Engine
      │
      ▼
PDF Report
```

---

# 💡 Architecture Decisions

- **Supabase Authentication** manages user authentication, password reset, session management, and JWT generation.
- Authentication is handled entirely on the frontend, reducing backend complexity.
- FastAPI focuses solely on business logic and verifies JWTs before processing protected requests.
- Groq LLM is used only for structured resume parsing.
- Sentence-BERT performs semantic similarity matching between the resume and the job description.
- ATS scores are calculated using a deterministic scoring engine.
- Feedback and recommendations are generated from ATS component scores rather than directly by the LLM, ensuring consistency and explainability.

---

# 🔐 Authentication

Authentication is fully managed by **Supabase Authentication**.

The frontend communicates directly with Supabase for:

- User Registration
- Login
- Password Reset
- Logout
- Session Management

After successful authentication, Supabase issues a JWT access token.

The frontend includes this JWT when making protected API requests to the FastAPI backend.

---

# 🎯 Learning Outcomes

This project helped me gain practical experience with:

- Full Stack Development
- FastAPI
- React.js
- REST API Design
- PostgreSQL
- SQLAlchemy
- Pydantic
- Supabase Authentication
- JWT Verification
- Backend Architecture
- Semantic Search
- Sentence-BERT
- Large Language Model Integration
- Prompt Engineering
- Report Generation
- Software Engineering Best Practices

---

# 🚀 Future Improvements

- Support DOCX resumes
- Resume comparison
- Resume ranking for multiple job descriptions
- Recruiter dashboard
- Docker deployment
- CI/CD pipeline
- Resume version tracking
- Email notifications

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/ATS-Resume-Scorer.git

cd ATS-Resume-Scorer
```

---

## Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 👨‍💻 Author

**Sheel Patel**

M.Tech – Information Technology  
ABV-IIITM Gwalior

---

⭐ If you found this project useful, consider giving it a star.
