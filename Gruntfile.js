module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ["dist", '.tmp', 'docs'],

        ngdocs: {
            options: {
                scripts: ['angular.js', '../src.js'],
                html5Mode: false,
                startPage: "api/docanalyser"
            },
            all: ['app/**/*.js']
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ngdocs');

    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', ['clean', 'ngdocs']);
};