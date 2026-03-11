@Library("Shared") _
pipeline{
    agent { label "aws-jenkins" }
    
    stages{
        
        stage("Hello"){
            steps{
                script{
                    hello()
                }
            }
        }
        
        stage("code"){
            steps{
                script{
                    clone("https://github.com/dhananjay1801/django-notes-app.git", "main")   
                }
            }
        }
        stage("build"){
            steps{
                script{
                    docker_build("notes-app", "latest", "dhananjay1801")
                }
            }
        }
        stage("push to docker hub"){
            steps{
                script{
                    docker_push("notes-app", "latest", "dhananjay1801")
                }
            }
        }
        stage("deploy"){
            steps{
                echo "deploying..."
                sh "docker compose up -d"
            }
        }
    }
}