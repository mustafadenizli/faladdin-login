const { config } = require('../wdio.conf')

config.specs = ['./features/login.feature']
config.capabilities = [
    {
        platformName: 'Android',
        platformVersion: '12',
        deviceName: 'GALAXY A52',
        udid: 'R68RB05N41Z',
        appPackage: 'com.faladdin.app',
        appActivity: 'com.faladdin.app.ui.launcher.LauncherActivity',
    },
]

exports.config = config
