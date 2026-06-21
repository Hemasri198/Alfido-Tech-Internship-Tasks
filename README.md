# Alfido Tech Internship Tasks

Welcome to my internship task repository. This repository contains the tasks completed as part of the **Alfido Tech Internship Program**, along with documentation, screenshots, commands, and deliverables.

## 👩‍💻 Intern Details

**Name:** Hemasri Bandi
**Role:** cloud Computing

---

# ✅ Task 1: Static Website Hosting

## Objective

Host a static website using Google Cloud Storage and make it publicly accessible.

## Activities Performed

* Created a Google Cloud Project
* Created a Cloud Storage Bucket
* Configured Public Access Permissions
* Uploaded HTML, CSS, and JavaScript files
* Hosted a static website using Google Cloud Storage
* Generated a public website URL

## Deliverables

* Live Website Link
* Bucket Configuration Screenshots
* Task Documentation PDF

---

# ✅ Task 2: Deploy a Virtual Machine & Install Web Server

## Objective

Launch a Virtual Machine and configure a web server using Google Cloud Compute Engine.

## Activities Performed

* Created a Google Cloud VM Instance

* Configured Firewall Rules (Port 80)

* Installed Apache Web Server

* Started and Enabled Apache Service

* Created a custom web page displaying:

  Hello from Cloud VM

* Accessed the website using the VM's public IP address

## Commands Used

```bash
sudo apt update
sudo apt install apache2 -y
sudo systemctl start apache2
sudo systemctl enable apache2
echo '<h1>Hello from Cloud VM</h1>' | sudo tee /var/www/html/index.html
sudo systemctl status apache2
```

## Deliverables

* Public VM IP Address
* Live Website URL
* Apache Installation Commands
* Screenshots
* Task Documentation PDF

---

## Repository Structure

```text
Alfido-Tech-Internship-Tasks
│
├── Task-1
│   ├── README.md
│   └── Task1_Static_Website_Hosting.pdf
│
├── Task-2
│   ├── README.md
│   └── Task2_VM_WebServer.pdf
│
└── README.md
```

---

## Skills Gained

* Google Cloud Platform (GCP)
* Cloud Storage
* Static Website Hosting
* Virtual Machines
* Apache Web Server
* Linux Commands
* Cloud Networking
* Firewall Configuration

---

### Internship Progress

✅ Task 1 Completed
✅ Task 2 Completed

Thank you for visiting my repository!
