module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/Automation-Basics/build/')
    },
    after: browser => {
        browser.end()
    },
    'test 1': browser => {
        browser
    }
}