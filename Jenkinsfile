@Library("shared") _
pipeline {
    
    agent {label 'agent1'}
    
    stages {
        stage ('Code') {
            steps{
                script {
                    code_checkout('https://github.com/Haris127/django-notes-app','main')
                }
            }
        }
        stage ('Build') {
            steps{
                script {
                    docker_build('notes-app','latest','hsris')
                }
            }
        }
        stage ('Push to Docker Hub') {
            steps{
                script {
                    docker_push('notes-app','latest','hsris')
                }
            }
        }
        stage ('Deploy') {
            steps{
                echo 'This is deploying the code'
                sh 'docker-compose down && docker-compose up -d'
            }
        }
    }
}
