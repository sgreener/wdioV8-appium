import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {

    runner: 'local',
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    
    port: 4723,
   
    specs: [
        './tests/**/*.spec.ts'
    ],

    maxInstances: 1,

    capabilities: [{
       
        platformName: 'Android',
        'appium:deviceName': 'Pixel 5 API 34', // don't think this matters
        'appium:platformVersion': '14',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'C:/app-debug.apk'
    }],

    logLevel: 'debug', // Level of logging verbosity: trace | debug | info | warn | error | silent
    
    bail: 0,
 
    baseUrl: '',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 1,
    
    services: [
        ['appium', {
            logpath: './logs/',
        }]
    ],

    framework: 'mocha',
    
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
  
}
