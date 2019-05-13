var checkObjects
module.exports = {
    beforeEach: browser => {
        checkObjects = browser.page.checkObjects()
        checkObjects.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Evens and Odds': browser => {
        checkObjects
        .setValue('@num', '1,2,3.5,4.5,5.2,6.2')
        .click('@confirmnum')
        .verify.containsText('[name="evenResults"]', '2,5.2,6.2')
        .verify.containsText('[name="oddResults"]', '1,3.5,4.5')
    },
    'Filter Object': browser => {
        checkObjects
        .setValue('@obj', 'title')
        .click('@confirmobj')
        .expect.element('[name="objectFilterResults"]').text.to.equal('Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Carly Armstrong", "title": "CEO" } ]')

    },
    'Filter String': browser => {
        checkObjects
        .setValue('@string', 'M')
        .click('@confirmstring')
        .expect.element('[name="nameFilterResults"]').text.to.equal('Filtered Names: [ "Melody", "Mark", "Maddy" ]')

    },
    'Palindrome': browser => {
        checkObjects
        .setValue('@palin', 'racecar')
        .click('@confirmpalin')
        .expect.element('[name="palindromeResults"]').text.to.equal('Palindrome: true')
    },
    'Sum': browser => {
        checkObjects
        .setValue('@sum1', '1')
        .setValue('@sum2', '4')
        .click('@confirmsum')
        .expect.element('[name="sumResults"]').text.to.equal('Sum: 5')
    }
}