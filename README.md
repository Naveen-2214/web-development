# Lead Generation System

## ✨ Features
- React-based frontend form
- FastAPI backend that forwards data to n8n
- Email notification via n8n (SendGrid/SMTP)
- Optional: Lead storage in Airtable/Google Sheets

## 📦 Technologies
- Frontend: React + Axios
- Backend: FastAPI (Python)
- Automation: n8n

## 🚀 Deployment
- Frontend: Vercel / Netlify
- Backend: Render / Heroku
- n8n: Hosted locally or on n8n.cloud

## 🛠️ Setup

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
pip install fastapi uvicorn requests
uvicorn main:app --reload
```

### n8n
- Create a Webhook workflow at `https://your-n8n-domain.com/webhook`.
- Add email and storage steps as desired.
