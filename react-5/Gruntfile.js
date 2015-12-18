module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require("jit-grunt")(grunt);

    grunt.initConfig({
        // uglify: {
        //     main: {
        //         src: ["static/scripts/game.js"],
        //         dest: "scripts/main.min.js"
        //     }
        // },
        sass: {
            dist: {
                src: ["static/style.scss"],
                dest: "static/style.css"
            }
        },
        // ,
        // cssmin: {
        //     main: {
        //         src: "styles/main.css",
        //         dest: "styles/main.min.css"
        //     }
        // },
        // jshint: {
        //     src: ["Gruntfile.js", "scripts/main.js"]
        // },
        watch: {
            // scripts: {
            //     files: ["scripts/main.js"],
            //     tasks: ["uglify"]
            // },
            styles: {
                files: ["static/style.scss"],
                tasks: ["sass"]
            }
        }

    });

    grunt.registerTask('default', ['sass', 'watch']);
    // grunt.registerTask('default', ['uglify', 'sass', 'cssmin', 'watch']);
    // grunt.registerTask("build", ['uglify', 'sass', 'cssmin']);

};
