exports.SUPPORTED_SELECTORS = ['id', 'model', 'css', 'binding', 'cssContainingText']
exports.ELEMENT_COMMANDS = [
    'sendKeys',
    'isPresent',
    'isElementPresent',
    'getWebElement',
    'evaluate',
    'getDriver',
    'getCssValue'
]
exports.COMMANDS_TO_REMOVE = ['allowAnimations']
exports.UNSUPPORTED_COMMANDS = [
    'angularAppRoot',
    'waitForAngularEnabled',
    'forkNewDriverInstance',
    'useAllAngular2AppRoots',
    'waitForAngular',
    'addMockModule',
    'clearMockModules',
    'removeMockModule',
    'getRegisteredMockModules',
    'controlFlowIsEnabled',
    'evaluate'
]

exports.UNSUPPORTED_COMMAND_ERROR = '' +
    'The command "%s" has no replacement implementation in WebdriverIO. ' +
    'It might be depcrecated and can be removed entirely. ' +
    'If this method is essential for your e2e test scenarios though, ' +
    'please file an issue in %s and the WebdriverIO team can follow up on this.'

exports.INCOMPATIBLE_COMMAND_ERROR = '' +
    'Can not transform "%s" command as it differs ' +
    'too much from the WebdriverIO implementation. We advise ' +
    'to refactor this code.\n\n' +
    'For more information on WebdriverIOs replacement command, see %s'
