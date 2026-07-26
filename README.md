# AI-Powered ATS Resume Scorer

An AI-powered resume analysis platform that evaluates resumes against job descriptions using semantic similarity and structured resume parsing. The application generates ATS compatibility scores, identifies skill gaps, provides personalized feedback based on ATS component scores, generates downloadable reports, and manage users analysis history.

---

# Features

- Upload resumes in PDF format
- Analyze resumes against custom Job Descriptions
- Generate ATS compatibility scores
- Structured resume parsing using Groq LLM
- Semantic similarity matching using Sentence-BERT
- Component-wise ATS score breakdown
- Skill gap detection
- Score-based feedback and recommendations
- Download professional PDF reports
- Resume analysis history
- Dashboard for managing previous analyses
- Secure authentication using Supabase Auth


# Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

### Backend

- FastAPI
- Python
- REST APIs
- Pydantic

### Database & Authentication

- Supabase
- Supabase Authentication

---

# Project Structure

```text
ATS-Resume-Scorer
│
├── backend
│   ├── api
│   ├── core
│   ├── db
│   ├── models
│   ├── services
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

# Installation

## Clone Repository

```bash
git clone https://github.com/Sheel1/ats_scorer.git

```

## Backend

```bash

pip install -r requirements.txt

uvicorn backend.main:app --reload
```

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---
