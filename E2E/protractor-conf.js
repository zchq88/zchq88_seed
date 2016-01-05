exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        '*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    chromeOnly: true,
    baseUrl: 'http://localhost:3000/',
    framework: 'mocha',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
