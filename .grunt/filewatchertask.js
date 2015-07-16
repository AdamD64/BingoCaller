(function () {
    'use strict';
    module.exports = {
        html: {
            files: 'main-app/app/index.html',
            tasks: ['nostart'],
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
            files: '.grunt/*.*',
            tasks: ['nostart'],
            options: {
                spawn: false
            }
        },
        unitTests: {
            files: './main-app/tests/**/*.*',
            tasks: ['nostart'],
            options: {
                spawn: false
            }
        },
        images: {
            files: 'main-app/app/images/*.*',
            tasks: ['nostart'],
            options: {
                spawn: false
            }
        },
        less: {
            files: 'main-app/app/less/*.*',
            tasks: ['nostart'],
            options: {
                spawn: false
            }
        },
        scripts: {
            files: 'main-app/app/scripts/*.*',
            tasks: ['nostart'],
            options: {
                spawn: false
            }
        },
        services: {
            files: 'main-app/app/scripts/services/*.*',
            tasks: ['nostart'],
            options: {
                spawn: false
            }
        },
        directives: {
            files: 'main-app/app/scripts/directives/*.*',
            tasks: ['nostart'],
            options: {
                spawn: false
            }
        }};
})();