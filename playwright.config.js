/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
    testDir: 'test',
    timeout: 30 * 1000,
    expect: {
        timeout: 5000,
    },
    reporter: [['html', { open: 'never' }]],
    use: {
        actionTimeout: 0,
        trace: 'retain-on-failure',
        bypassCSP: true,
    },
}

module.exports = config
