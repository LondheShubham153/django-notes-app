pipeline {
    agent any 
    
    stages{
        stage("code"){
            steps{
            echo "clonning the code"
            git url:"https://github.com/pankaj04101986/django-notes-app.git", branch: "main"
            }
        }
        stage("build"){
            steps{
            echo "build the code"
            sh "docker build -t my-node-app ."
            }
        }
        stage("push to docker Hub"){
            steps{
            echo "pushing the image to docker Hub"
            withCredentials([usernamePassword(credentialsId:"dockerHub",passwordVariable:"dockerHubPass",usernameVariable:"dockerHubUser")]){
            sh "docker tag my-node-app ${env.dockerHubUser}/my-node-app:latest"
            sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
            sh "docker push ${env.dockerHubUser}/my-node-app:latest"
            }
                }
        }
        stage("Deploy"){
            steps{
            echo "deploying the containner"
            sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}
