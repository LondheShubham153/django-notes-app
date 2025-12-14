@Library("Shared-libraries") _
pipeline {
    
    agent { label 'test' }

    stages {
        
        stage('Hello'){
            steps{
                script{
                    hello()
                }
            }
        }
        
        stage('code') {
            steps {
                script {
                    clone(
                        'https://github.com/alisarfraz13/django-notes-app',
                        'main'
                    )
                }
            }
        }

        stage('build') {
            steps {
               script {
                   dockerBuild('notes-app', 'latest', 'alisarfraz13')
                }
            }
        }

        stage('push to DockerHub') {
           steps {
              script {
                  dockerPush('notes-app', 'latest', 'alisarfraz13')
               }
           }
        }

        stage('deploy') {
            steps {
                echo "this is deploying the code"
                sh "docker compose up -d"
            }
        }
    }
}
