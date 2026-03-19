@Library('Shared') _
pipeline {
    agent { label 'vinod' }

    stages {
        stage('Hello') {
            steps {
                script {
                    hello()
                }
            }
        }
        stage('Code') {
            steps {
                // echo "This is cloning the code"
                // git url: "https://github.com/anurag-verma-india/django-notes-app", branch: "main"
                // echo "Code cloning successfull"
                script {
                    clone('https://github.com/anurag-verma-india/django-notes-app', 'main')
                }
            }
        }

        stage('Build') {
            steps {
                // echo "This is building the code"
                // // sh "whoami"
                // sh "docker build -t notes-app:latest ."

                script {
                    docker_build('notes-app', 'latest', 'anuragvermaindia')
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                // echo "This is pushing the image to Docker Hub"
                // withCredentials([usernamePassword(
                //     'credentialsId': "dockerHubCred",
                //     passwordVariable: "dockerHubPass",
                //     usernameVariable: "dockerHubUser")]){
                // sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass} "
                // sh "docker image tag notes-app:latest ${env.dockerHubUser}/notes-app:latest"
                // sh "docker push ${env.dockerHubUser}/notes-app:latest"
                // }
                script {
                    docker_push('notes-app', 'latest', 'anuragvermaindia')
                }
            }
        }
        stage('Deploy') {
            steps {
                // echo "This is deploying the code"
                // // sh "docker run -d -p 8000:8000 notes-app:latest"
                // sh "docker compose up -d"
                echo "Deploying the code"
                script {
                    docker_compose()
                }
            }
        }
    }
}
