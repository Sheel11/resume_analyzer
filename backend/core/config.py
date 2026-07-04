import os
from pathlib import Path

try:
    from dotenv import load_dotenv
    load_dotenv()
except ImportError:
    pass

#api metadata
APP_TITLE = 'ATS RESUME ANALYZER API'
APP_VERSION = '1.0.0'
APP_DESCRIPTION = 'analyse resumes against job description using nlp + ml'

ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
]

# file
MAX_FILE_SIZE_MB = 5
MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024

#supported mime types and their short names
SUPPORTED_MIME_TYPES = {
    'application/pdf' : 'pdf',
    'application/msword' : 'doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document' : '',
}

SUPPORTED_EXTENSIONS = {'.pdf' , '.doc' , '.docx'}

SPACY_MODEL_PRIMARY = 'en_core_web_md'
SPACY_MODEL_SECONDARY = 'en_core_web_sm'
SENTENCE_TRANSFORMER_MODEL = os.getenv('SENTENCE_TRANSFORMER_MODEL' , 'all-miniLM')

JD_KEYWORD_WEIGHT = 0.6
JD_SEMANTIC_WEIGHT = 0.4

#score component weights - this is business logic treated as config

SCORE_WEIGHTS = {
    'formatting' : 20 ,
    'keywords' : 25 ,
    'content' : 25,
    'skill_validation' : 15,
    'ats_compatibility' : 15,
}

GROQ_API_KEY = os.getenv('GROQ_API_KEY' , '')

SUPABASE_URL = os.getenv('SUPABASE_URL' , '')
SUPABASE_KEY = os.getenv('SUPABASE_KEY' , '')
SUPABASE_ANON_KEY = os.getenv('SUPABASE_ANON_KEY' , '')
SUPABASE_JWT_SECRET = os.getenv('SUPABASE_JWT_SECRET' , '')
