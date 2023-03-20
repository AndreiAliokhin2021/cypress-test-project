# Running tests in Jenkins

 - To run tests you need to install Jenkins service locally (as I did) or use any other server with Jenkins preinstalled. 
 - To create a Job we use a **pipeline** option.
 - On pipeline definition option chose **'Pipeline script from SCM'** -> **Git**
 - Repository URL: https://github.com/AndreiAliokhin2021/cypress-test-project.git
 - Credentials are not required because of a public project.
 - Branch Specifier (blank for 'any'): **main**
  - Script Path: Jenkinsfile
  
   Save the pipeline and chose **build now** option to start the pipeline


