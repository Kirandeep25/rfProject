# file-upload-app
# File Upload Web App with Flask, HTML/CSS/JS, Docker, and Kubernetes

This project showcases a web application that allows users to upload files through a REST API built using Flask. The uploaded files are stored in a directory, and the frontend is implemented using HTML, CSS, and JS. The application is containerized using Docker and deployed using Kubernetes.

## Project Structure

- `/app.py`: Flask backend implementation.
- `/static/`: Contains the frontend static assets (CSS, JS).
- `/templates/`: Contains the basic web frontend framework (HTML).
- `/uploads/`: Directory where uploaded files are stored.
- `Dockerfile`: Configuration to Dockerize the application.
- `docker-compose.yml`: Docker Compose configuration for local development.
- `kubernetes/`: Kubernetes deployment files.

## Getting Started

### Prerequisites

- Python 3.11.5
- Docker
- Kubernetes (minikube or any other cluster)
- kubectl (Kubernetes command-line tool)

### Local Development

1. Clone this repository.
2. Navigate to the project directory.

#### Flask Backend

1. Create and activate a virtual environment:

   ```bash
   python3 -m venv venv
   source venv/bin/activate

2. Install dependencies:
   
   ```bash
   pip install -r requirements.txt
3. Run the Flask app:

   ```bash
   python app.py
The backend will be available at http://localhost:5000.

##### Frontend
Open templates/index.html in a web browser or deploy it on a web server to interact with the Flask API.

# Dockerization
Build a Docker image of the application:
docker build -t file-upload-app .
# Kubernetes Deployment
Ensure you have a Kubernetes cluster set up.

1. Deploy the application to Kubernetes:
 ```bash
kubectl apply -f kubernetes/

2. Access the application using the appropriate NodePort or LoadBalancer IP.
