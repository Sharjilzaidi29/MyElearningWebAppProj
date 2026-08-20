# ELearning Web Application - Azure DevOps CI/CD Pipeline Project

An end-to-end DevOps project demonstrating automated CI/CD pipelines to build and deploy a modern Ed-tech Web Application on Azure App Services (PaaS) using Azure DevOps.

---

## 🎯 Project Overview
This project automates the deployment workflow for an Ed-tech platform (**Anil Technologies**). Whenever developers commit new code updates, continuous integration (CI) and continuous deployment (CD) pipelines automatically trigger to test, build, and deploy the updated application onto cloud infrastructure with zero manual intervention.

---

## 🏗️ Architecture & Workflow

```text
[ Local Dev / On-Prem ] 
         │
         ▼ (Git Push)
[ Azure Repos / GitHub ] 
         │
         ▼ (CI Trigger)
[ Azure Build Pipeline ] ──► (Generates Artifacts)
         │
         ▼ (CD Trigger)
[ Azure Release Pipeline ] 
         │
         ▼
[ Azure App Service (PaaS - Linux) ] ──► (Live Web App)
