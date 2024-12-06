pipeline {
    agent any
    
    stages{
        stage("Code"){
            steps{
                echo "Cloning the code..."
                sh "docker-compose down --volumes --remove-orphans"
                git url: "https://github.com/Zar475/Three-tier-django.git", branch: "main"
            }
        }
        stage("Build & Test"){
            steps{
                echo "Building the Docker image..."
                sh "docker build . -t djangoapp"
                
                // Verify if the image is built
                sh "docker images"
            }
        }
        stage("Push to DockerHub"){
            steps{
                withCredentials([usernamePassword(credentialsId: "DockerHub", passwordVariable: "DockerHubPass", usernameVariable: "DockerHubUser")]){
                    echo "Logging in to DockerHub..."
                    sh "docker login -u ${env.DockerHubUser} -p ${env.DockerHubPass}"
                    
                    echo "Tagging the Docker image..."
                    sh "docker tag djangoapp ${env.DockerHubUser}/djangoapp:latest"
                    
                    echo "Pushing the image to DockerHub..."
                    sh "docker push ${env.DockerHubUser}/djangoapp:latest"
                }
            }
        }
        stage("Deploy"){
            steps{
                echo "Deploying the application with Docker Compose..."
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}
