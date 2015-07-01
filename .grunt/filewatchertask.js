
module.exports = {

    html: {
        files: 'main-app/app/index.html',
        tasks: ['clean:html', 'copy:html'],
        options: {
            spawn: false
        }
    },

    angular: {
        files: 'angular/*',
        tasks: ['nostart'],
        options: {
            spawn: false
        }
    },

    grunt: {
        files: '.grunt/*.js',
        tasks: ['jshint'],
        options: {
            spawn: false
        }
    },

    unitTests: {
        files: './main-app/tests/**/*.js',
        tasks: ['jshint'],
        options: {
            spawn: false
        }
    },

    images: {
        files: 'main-app/app/images/*.*',
        tasks: ['clean:images', 'copy:images'],
        options: {
            spawn: false
        }
    },

    less: {
        files: 'main-app/app/less/*.*',
        tasks: ['clean:css', 'less'],
        options: {
            spawn: false
        }
    },

    scripts: {
        files: 'main-app/app/scripts/*.js',
        tasks: ['jshint', 'clean:scripts', 'concat:scripts'],
        options: {
            spawn: false
        }
    },

    directives: {
        files: 'main-app/app/scripts/directives/*.js',
        tasks: ['jshint'],
        options: {
            spawn: false
        }
    }
};