pipeline {
    agent any

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
                sh 'docker build -t test3:jenkins .'
            }
        }

        stage('Test') {
            steps {
                echo 'Test3 build completed successfully!'
            }
        }
    }
}