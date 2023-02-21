pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/base:latest'
    }
  }

  stages {
    stage('build and test') {
      environment {
        // we will be recording test results and video on Cypress dashboard
        // to record we need to set an environment variable
        // we can load the record key variable from credentials store
        // see https://jenkins.io/doc/book/using/using-credentials/
        CYPRESS_RECORD_KEY = credentials('b2f6a21d-2997-4298-8a02-6713f01029af')
      }

      steps {
        sh 'npm ci'
        sh "npm run test:ci:record"
      }
    }
  }
}