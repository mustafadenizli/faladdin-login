const chai = require('chai')
const rimraf = require('rimraf')
const allure = require('allure-commandline')

exports.config = {
    port: 4723,
    path: '/wd/hub',
    runner: 'local',
    specs: [
        './architect/features/login.feature'
    ],
    exclude: [],

    maxInstances: 1,
    capabilities: [{

        maxInstances: 1,
        //
        //browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    //baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
    services: ['chromedriver', 'appium'],

    framework: 'cucumber',
    reporters: ['spec', ['allure', {outputDir: 'allure-results'}]],


    cucumberOpts: {
        require: ['./architect/step-definitions/LoginPage.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '@testRun',
        timeout: 60000,
        ignoreUndefinedDefinitions: true
    },

    onPrepare: function (config, capabilities) {
        try {
            rimraf('./allure-report', function () {
                console.log('Allure Report Deleted')
            })
            rimraf('./allure-results', function () {
                console.log('Allure Json Files deleted')
            })
        } catch (e) {
            console.info('dosya yok 1')
        }
    },

    before: async function (capabilities, specs) {
        await require('expect-webdriverio')
        global.wdioExpect = global.expect
        global.expect = chai.expect
    },

    beforeScenario: async function (world, context) {
        await browser.reset()
    },

    onComplete: function (exitCode, config, capabilities, results) {
        console.info('onComplete')
        const reportError = new Error('Could not generate Allure report')
        const generation = allure([
            'generate',
            './allure-results',
            '--clean',
        ])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(() => reject(reportError), 5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)
                if (exitCode !== 0) {
                    return reject(reportError)
                }

                resolve()
            })
        })
    },
}
