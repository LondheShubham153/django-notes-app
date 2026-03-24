@Library("Shared") _
pipeline {
    agent {
        label "Jenkins-worker-node-server"
    }

    stages {

        stage("Hello") {
            steps {
                script {
                    hello()
                }
            }
        }

        stage("code") {
            steps {
                script {
                    clone("https://github.com/rajcharanthecoder/django-notes-app.git", "main")
                }
            }
        }

        stage("Build") {
            steps {
                script {
                    docker_build("notes-app", "latest", "rajcharan2002")
                }
            }
        }

        stage("Test") {
            steps {
                echo "This is testing the code"
            }
        }

        stage("Push To DockerHub") {
            steps {
                echo "Pushing image to DockerHub..."
                script {
                    docker_push("notes-app", "latest", "rajcharan2002")
                }
            }
        }

        stage("Deploy") {
            steps {
                echo "This is deploying the code"
                // sh "docker run -d -p 8000:8000 notes-app:latest"
                sh "docker compose up -d"
            }
        }
    }
}
