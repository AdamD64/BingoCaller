(function () {
    'use strict';
    module.exports = {
        html: {
            files: 'main-app/app/index.html',
            tasks: ['default'],
            options: {
                spawn: false
            }
        },
        angular: {
            files: 'angular/*',
            tasks: ['default'],
            options: {
                spawn: false
            }
        },
        grunt: {
            files: '.grunt/*.*',
            tasks: ['default'],
            options: {
                spawn: false
            }
        },
        unitTests: {
            files: './main-app/tests/**/*.*',
            tasks: ['default'],
            options: {
                spawn: false
            }
        },
        images: {
            files: 'main-app/app/images/*.*',
            tasks: ['default'],
            options: {
                spawn: false
            }
        },
        less: {
            files: 'main-app/app/less/*.*',
            tasks: ['default'],
            options: {
                spawn: false
            }
        },
        scripts: {
            files: 'main-app/app/scripts/*.*',
            tasks: ['default'],
            options: {
                spawn: false
            }
        },
        services: {
            files: 'main-app/app/scripts/services/*.*',
            tasks: ['default'],
            options: {
                spawn: false
            }
        },
        directives: {
            files: 'main-app/app/scripts/directives/*.*',
            tasks: ['default'],
            options: {
                spawn: false
            }
        }};
})();