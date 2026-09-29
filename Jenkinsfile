pipeline {
    agent any

    environment {
        NVM_DIR = '/mnt/data/jenkins/.nvm'
    }

    stages {
        stage('Environment') {
            steps {
                sh '''
                    . "$NVM_DIR/nvm.sh"
                    nvm use 20

                    node -v
                    npm -v
                    which node
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    . "$NVM_DIR/nvm.sh"
                    nvm use 20

                    npm ci
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                    . "$NVM_DIR/nvm.sh"
                    nvm use 20

                    npm run build
                '''
            }
        }

        stage('Deploy') {
            steps {
                sshagent(['portfolio-server']) {
                    sh '''
                        rsync -av --delete \
                            --no-owner \
                            --no-group \
                            --no-times \
                            build/ \
                            rexxmks@136.85.122.102:/var/www/html/my-portofolio-2023/build/
                    '''
                }
            }
        }
    }
}