 @Library("Shared") _

pipeline {
    agent { label "vinod" }

    stages {
        stage("Hello") {
        steps {
            script {
                hello()
            }
        }
    }
        stage("Code") {
            steps {
                script {
                 clone("https://github.com/ajaysingh3200/django-notes-app.git","main")
             }
           }
        }
        stage("Build") {
            steps {
                script {
                 docker_build("notes-app","latest","ajaysingh3200")
                }
            }
        }
       stage('Push to DockerHub') {
    steps {
        script {
            docker_push("notes-app","latest","ajaysingh3200")
           }
         }
       }
        stage("Deploy") {
            steps {
                echo "Deploying the application"
                sh "docker compose down && docker compose up -d"
            }
        }
    }
}
