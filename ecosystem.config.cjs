module.exports = {
    apps: [{
        name: 'safionix',
        script: 'npm',
        args: 'start',
        cwd: '/var/www/safionix',
        env: {
            NODE_ENV: 'production'
        }
    }]
};
