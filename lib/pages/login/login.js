"use strict";

module.exports = {
    url: function() {
        return this.api.launchUrl + '/login';
    },
    elements: {
        emailField: {
            selector: 'input[type="email"]'
        },
        passwordField: {
            selector: 'input[type="password"]'
        },
        submit: {
            selector: 'input[id="submit"]'
        },
        welcomeMsg: {
            selector: '.authDialog-header'
        }
    },

    commands: [{
        signIn: function(username, password) {
            return this.waitForElementPresent('@welcomeMsg', 2000, 'Element not found')
                .setValue('@emailField', username)
                .setValue('@passwordField', password)
                .click('@submit')
                .pause(5000)
                .assert.urlEquals('https://turo.com/dashboard', "Login was unsuccessful!");
        }
    }]
};
