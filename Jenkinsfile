pipeline {
    agent {
        node {
            label 'master'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'main']], userRemoteConfigs: [[url: 'https://github.com/AndreiAliokhin2021/cypress-test-project.git']]])
            }
        }

        stage('Install NPM package') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run test') {
            steps {
                bat 'npx cypress run --record --key b2f6a21d-2997-4298-8a02-6713f01029af'
            }
        }
    }
}
