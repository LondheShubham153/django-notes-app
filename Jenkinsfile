

pipeline {
    agent any
    
    stages{
        stage("Code"){
            steps{
             echo "clone the code"
              git url: "https://github.com/Zar475/Three-tier-django.git", branch: "main"
            }
        }
        stage("Build & Test"){
            steps{
                sh "docker build . -t djangoapp"
            }
        }
        stage("Push to DockerHub"){
            steps{
                withCredentials([usernamePassword(credentialsId:"DockerHub",passwordVariable:"DockerHubPass",usernameVariable:"DockerHubUser")]){
                    sh "docker login -u ${env.DockerHubUser} -p ${env.DockerHubPass}"
                    sh "docker tag djangoapp ${env.DockerHubUser}/flaskapp:latest"
                    sh "docker push ${env.DockerHubUser}/djangoapp:latest" 
                }
            }
        }
        stage("Deploy"){
            steps{
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}
