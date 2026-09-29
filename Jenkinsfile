pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
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