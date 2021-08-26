const { browser } = require('protractor');
var homepage = require ('../pages/homepage.js');

let url = 'https://www.testdevlab.com/';

describe ('Test Cases - ', () => {
    beforeAll( async () => {
        await homepage.getUrl(url);
        await homepage.maximizeWindow();
        expect(homepage.getCurrentUrl()).toMatch(url,'[beforeAll-1] The loaded URL is wrong!');        
    });

    beforeEach( async () => {
        homepage.getCurrentUrl().then(currentUrl => {if (currentUrl!=url) {homepage.getUrl(url)}});        
    });

it ('Test1 ', () => {

});

it ('Test2 ', async () => {
    homepage.clickContactUs();
    await homepage.clickSendButton();
    expect(homepage.getFieldRequiredMessageForFirstName()).toBe(true,'[1]The error message for first name required is missing!');
    expect(homepage.getFieldRequiredMessageForLastName()).toBe(true,'[2]The error message for first name required is missing!');
    expect(homepage.getFieldRequiredMessageForEmail()).toBe(true,'[3]The error message for first name required is missing!');
    expect(homepage.getFieldRequiredMessageForMessage()).toBe(true,'[4]The error message for first name required is missing!');
    expect(homepage.getFieldRequiredMessageForPolicy()).toBe(true,'[5]The error message for first name required is missing!');
    expect(homepage.getErrorIconForFirstName()).toBe(true,'[6]The error message for first name required is missing!');
    expect(homepage.getErrorIconForLastName()).toBe(true,'[7]The error message for first name required is missing!');
    expect(homepage.getErrorIconForEmail()).toBe(true,'[8]The error message for first name required is missing!');

});


});