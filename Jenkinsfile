pipeline {
    agent any

    environment {
        IMAGE_NAME = 'ghcr.io/prachigodaseindi4/test3:latest'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out Test3 project...'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Login to GHCR') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'ghcr-credentials',
                        usernameVariable: 'GHCR_USER',
                        passwordVariable: 'GHCR_TOKEN'
                    )
                ]) {
                    sh '''
                        echo "$GHCR_TOKEN" | docker login ghcr.io \
                          -u "$GHCR_USER" \
                          --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $IMAGE_NAME'
            }
        }
    }
}