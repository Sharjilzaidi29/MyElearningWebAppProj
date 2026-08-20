# Automated Azure DevOps CI/CD Pipeline for E-Learning Web Application

An end-to-end DevOps project implementing an automated CI/CD pipeline to host a mission-critical E-Learning Web Application for **Anil Technologies** on Azure App Services (PaaS).

---

## 📌 Project Agenda & Overview
Anil Technologies is a leading Ed-tech company offering online/offline courses for students, interns, and university graduates across South Asian countries. 

To ensure 24/7 availability and zero downtime for the Web Application:
- Developers commit and push code changes to **Azure Repos**.
- An automated **Build Pipeline (CI)** pulls the code, builds the project, and generates pipeline artifacts.
- An automated **Release Pipeline (CD)** deploys the built artifacts directly to **Azure App Services (Linux Web App)** via secure **Service Connections** configured using Microsoft Entra ID.

---

## 🏗️ Architecture & CI/CD Workflow

```text
[ Developer / Local ]
        │ (Git Push)
        ▼
  [ Azure Repos ]
        │ (Trigger)
        ▼
 [ Build Pipeline ] ──► (Publish Artifact) ──► [ Pipeline Artifact ]
        │                                              │
        ▼                                              ▼
[ Release Pipeline ] ◄──────────────────────────────────┘
        │ (Automated Deployment)
        ▼
[ Azure App Service ] (PaaS / Node 22 LTS Linux)
