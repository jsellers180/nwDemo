

describe('Turo demo test using Mocha', function() {

    describe('with Nightwatch', function() {

        before(function(client, done) {
            done();
        });

        after(function(client, done) {
            client.end(function() {
                done();
            });
        });

        afterEach(function(client, done) {
            done();
        });

        beforeEach(function(client, done) {
            done();
        });
        var homepageURL = 'https://turo.com';

        it('logs in a user', function(browser) {
            // var login = browser.page.login();

            browser.url(homepageURL + '/login')
                .waitForElementPresent('.authDialog-header', 2000, 'Element not found')
                // removed un/pw per turo request
                .setValue('input[type="email"]', '')
                .setValue('input[type="password"]', '')
                .click('button[id="submit"]')
                .assert.urlEquals('https://turo.com/dashboard', "Login was unsuccessful!")
                .end()
        });

        it('navigates to the home page', function (client) {
            client
                .url(homepageURL)
                .assert.containsText(".interstitial-heading", "Rent better cars")
                // .pause(2000)
                // .expect.element('body').to.be.present.before(1000)
                .assert.urlEquals('https://turo.com/')
                .pause(2000)
        });

        it('performs a search', function (browser) {
            browser
                .url(homepageURL)
                .click('#js-searchFormExpandedLocationInputContainer')
                .setValue('#js-searchFormExpandedLocationInput', ['SFO', browser.Keys.ENTER])
                .pause(2000)
                .assert.containsText(".searchSummary-appliedLocation.js-searchSummaryLocation", "SFO")
        });


    });
});

