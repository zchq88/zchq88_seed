exports.config = {
    allScriptsTimeout: 10000,

    specs: [
        '*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    chromeOnly: true,
    baseUrl: 'http://localhost:3000/',
    framework: 'mocha',
    mochaOpts: {
        timeout: 10000
    }
};
