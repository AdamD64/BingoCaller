(function () {
    'use strict';
    module.exports = {
        script: {
            cwd: '',
            src: 'main-app/app/scripts/*.js',
            dest: '.build/',
            expand: true
        },
        services: {
            cwd: '',
            src: 'main-app/app/scripts/services/*.js',
            dest: '.build/',
            expand: true
        },
        grunt: {
            cwd: '',
            src: 'gruntfile.js',
            dest: '.build/',
            expand: true
        },
        unitTests: {
            cwd: '',
            src: './main-app/tests/**/*.*',
            dest: '.build/',
            expand: true
        },
        options: {
            quotmark: 'single'
        }
    };
})();