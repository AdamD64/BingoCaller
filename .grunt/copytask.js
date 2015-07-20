(function () {
    'use strict';
    module.exports = {
        html: {
            cwd: '',
            src: 'main-app/app/index.html',
            dest: '.build/',
            expand: true
        },
        angular: {
            cwd: '',
            src: 'bower_components/angular/*',
            dest: '.build/main-app/app',
            expand: true
        },
        images: {
            cwd: '',
            src: 'main-app/app/images/*',
            dest: '.build/',
            expand: true
        }
    };

})();






