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

                    echo "=== Environment ==="
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

                    echo "=== Install Dependencies ==="
                    node -v
                    npm -v
                    which node

                    npm ci
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                    . "$NVM_DIR/nvm.sh"
                    nvm use 20

                    echo "=== Build ==="
                    node -v
                    npm -v

                    npm run build
                '''
            }
        }

        stage('Deploy') {
            steps {
                sshagent(['portfolio-server']) {
                    sh '''
                        echo "=== Deploy ==="

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