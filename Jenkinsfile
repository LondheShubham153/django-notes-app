pipeline {
    agent any
    
    stages{
        stage("Clone Code"){
            steps {
                echo "Cloning the code"
                git url: "https://github.com/dshri12/django-notes-app-shri.git", branch: "main"
            }
        }
        stage("Build"){
            steps {
                echo "Building the image"
                sh "docker build -t django-note-app:v1 ."
            }
        }
        stage("Push to Docker Hub"){
            steps {
                echo "Pushing the image to docker hub"
                withCredentials([usernamePassword(credentialsId:"dockerhub",passwordVariable:"dockerhubPass",usernameVariable:"dockerhubUser")]){
                sh "docker tag django-note-app:v1 ${env.dockerhubUser}/django-note-app:v1"
                sh "docker login -u ${env.dockerhubUser} -p ${env.dockerhubPass}"
                sh "docker push ${env.dockerhubUser}/django-note-app:v1"
                }
            }
        }
        stage("Deploy"){
            steps {
                echo "Deploy kar container bsdk"
                sh "docker-compose down && docker-compose up -d"
                
            }
        }
    }
}
