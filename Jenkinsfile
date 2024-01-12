pipeline {
    agent any
    
    stages{
        stage("clone code"){
            steps{
                echo "clone git repo"
                git url :"https://https://github.com/gsurendhar/django-notes-app.git" , branch : "main"
                
            }
        }
        stage("build"){
            steps{
                echo "build docker image"
                sh "docker build -t notes-app . "
            }
        }
        
        stage("push image"){
            steps{
                echo "pushing docker image to hub"
                withCredentials([usernamePassword(credentialsId:"dockerhub",passwordVariable:"dockerhubPass",usernameVariable:"dockerhubUser")]){
                sh "docker tag notes-app ${env.dockerhubUser}/notes-app:latest"
                sh "docker login -u ${env.dockerhubUser} -p ${env.dockerhubPass}"
                sh "docker push ${env.dockerhubUser}/notes-app:latest"
            }
        }
        }
        
        stage("deploy"){
            steps{
                echo "deploy container"
                sh "docker-compose down && docker-compose up -d"
            }
        }
            
        
}
}
