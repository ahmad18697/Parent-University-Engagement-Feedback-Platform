# Parent–University Engagement & Feedback Platform

A comprehensive, production-ready AI-powered feedback management system designed to facilitate seamless communication between parents and educational institutions. Built with **FastAPI** and enhanced with **LangChain-powered AI routing**, this platform automatically analyzes, categorizes, and routes feedback to appropriate university departments.

![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-FF6B00?style=for-the-badge)
![AI-Powered](https://img.shields.io/badge/AI-Powered-FF6B00?style=for-the-badge)

## 🚀 Key Features

- **🤖 Intelligent AI Routing**: Automated sentiment analysis, categorization, and priority assessment
- **🌐 Modern Web Interface**: Responsive design with professional UI/UX
- **📊 Real-time Analytics**: Filter and analyze feedback by department, sentiment, and status
- **🔌 RESTful API**: Full JSON API support for integration with other systems
- **📱 Mobile Responsive**: Works seamlessly across desktop, tablet, and mobile devices
- **🔒 Data Persistence**: SQLite database with SQLAlchemy ORM
- **🎨 Professional UI**: Modern dashboard with intuitive navigation

## 🏗️ Architecture Overview
Request → FastAPI → AI Processing → Database → Response
│
├── Sentiment Analysis
├── Category Classification
├── Priority Assessment
└── Department Routing

## 📦 Installation & Setup

### Prerequisites

- Python 3.8+
- pip package manager

### 1. Clone and Setup Environment

```bash
# Create virtual environment
python -m venv .venv

# Activate environment (Linux/Mac)
source .venv/bin/activate

# Activate environment (Windows)
.venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

3. Launch Application

uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
4. Access the Platform
Web Interface: http://localhost:8000

API Documentation: http://localhost:8000/docs

Admin Dashboard: http://localhost:8000/feedback

🗂️ Project Structure

app/
├── main.py                 # FastAPI application entry point
├── database.py            # Database configuration and connection
├── models.py             # SQLAlchemy data models
├── schemas.py            # Pydantic schemas for API validation
├── routers/
│   └── feedback.py       # API endpoints for feedback operations
├── services/
│   ├── feedback_service.py # Business logic for feedback processing
│   ├── routing_agent.py    # LangChain AI routing pipeline
│   ├── sentiment.py        # Sentiment analysis service
│   └── categorizer.py      # Category classification service
├── static/
│   ├── style.css          # Modern CSS stylesheet
│   └── script.js          # Interactive JavaScript functionality
└── templates/
    ├── base.html          # Base template with navigation
    ├── index.html         # Feedback submission form
    └── feedback_list.html # Admin dashboard
🎯 How It Works

1. Feedback Submission
Parents submit feedback through an intuitive web form or via API, providing:

Parent information

Student details (optional)

Feedback message

Contact channel

2. AI Processing Pipeline
The system automatically analyzes each submission using a multi-stage AI pipeline:

Sentiment Analysis: Determines emotional tone (Positive/Negative/Neutral)

Category Detection: Identifies feedback topic (Academic, Hostel, Finance, etc.)

Priority Assessment: Assigns urgency level (High/Medium/Low)

Department Routing: Directs to appropriate university department

3. Intelligent Routing
Based on AI analysis, feedback is automatically routed to the relevant department:

Hostel → Accommodation Services

Academics → Academic Affairs

Finance → Bursar's Office

Health → Medical Services

etc.

4. Management & Tracking
Administrators can:

View all feedback in a comprehensive dashboard

Filter by department, sentiment, or status

Track resolution progress

Export data for reporting

📡 API Endpoints
Feedback Operations
Method	Endpoint	Description
POST	/api/feedback	Submit new feedback
GET	/api/feedback	Retrieve filtered feedback
GET	/api/departments	List all departments
Web Interface
Page	Route	Description
Feedback Form	/	Parent submission interface
Admin Dashboard	/feedback	Management portal
🔧 Configuration
Environment variables (via .env file):

env
APP_NAME="Parent-University Engagement Portal"
DATABASE_URL="sqlite:///./feedback.db"
🧪 Testing
Run the comprehensive test suite:

bash
# Run all tests
pytest tests/ -v

# Run specific test module
pytest tests/test_agent.py -v


