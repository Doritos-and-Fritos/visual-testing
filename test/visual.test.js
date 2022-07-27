const {test, expect} = require('@playwright/test')

test('Google visual test', async ({page}) => {

    await test.step('When account page is loaded', async () => {
        await Promise.all([page.goto('http://www.google.com'), page.waitForNavigation({waitUntil: 'load'})])
    })

    await test.step('Then the account page is visually correct', async () => {
        expect(await page.screenshot({})).toMatchSnapshot('verified-account.png')
    })
})
