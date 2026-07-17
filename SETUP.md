# PlaceMentor AI - Setup Guide

## Prerequisites

Install:

- Python 3.12+
- Git
- VS Code

---

## 1. Clone the repository

```bash
git clone https://github.com/meshatvamreenesh/PlaceMentor-AI.git
```

---

## 2. Open the project

```bash
cd PlaceMentor-AI
```

---

## 3. Create a virtual environment

```bash
python -m venv venv
```

---

## 4. Activate the virtual environment

### Windows (PowerShell)

```powershell
venv\Scripts\Activate.ps1
```

---

## 5. Install all dependencies

```bash
pip install -r requirements.txt
```

---

## 6. Verify installation

```bash
python --version
pip --version
git --version
```

---

## 7. Run the backend

```bash
python backend/app.py
```

*(Change this command if you rename `main.py` or move it.)*

---

## Daily Git Workflow

Before starting work:

```bash
git pull origin main
```

After making changes:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```