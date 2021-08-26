const { browser } = require("protractor");

var Homepage = function () {

    let cookiesButton = element(by.className('cta-btn'));
    let contactUs = element(by.css('.right-side .contact-us-btn'));
    let sendButton = element(by.className('submit-button'));
    let fieldRequiredMessageForFirstName = element(by.xpath('//*[@id="root"]/div/div[2]/div/div/div/div[1]/div/form/div[1]/div[2]'));
    let fieldRequiredMessageForLastName = element(by.xpath('//*[@id="root"]/div/div[2]/div/div/div/div[1]/div/form/div[2]/div[2]'));
    let fieldRequiredMessageForEmail = element(by.xpath('//*[@id="root"]/div/div[2]/div/div/div/div[1]/div/form/div[3]/div[2]'));
    let fieldRequiredMessageForMessage = element(by.xpath('//*[@id="root"]/div/div[2]/div/div/div/div[1]/div/form/div[7]/div[2]'));
    let fieldRequiredMessageForPolicy = element(by.xpath('//*[@id="root"]/div/div[2]/div/div/div/div[1]/div/form/div[8]/div[1]/div[3]'));
    let errorIconForFirstName = element(by.xpath('//*[@id="root"]/div/div[2]/div/div/div/div[1]/div/form/div[1]/div[1]/div'));
    let errorIconForLastName = element(by.xpath('//*[@id="root"]/div/div[2]/div/div/div/div[1]/div/form/div[2]/div[1]/div'));
    let errorIconForEmail = element(by.xpath('//*[@id="root"]/div/div[2]/div/div/div/div[1]/div/form/div[3]/div[1]/div'));


    this.getUrl = async (url) => {
        await browser.waitForAngularEnabled(false);
        await browser.get(url);
        await cookiesButton.click();
    };

    this.maximizeWindow = async () => {
        await browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();
    };

    this.getCurrentUrl = async () => {
        await browser.waitForAngularEnabled(false);
        return await browser.getCurrentUrl();
    };

    this.getContactUs = () => {
        return contactUs;
    };

    this.clickContactUs = () => {
        contactUs.click();
    };

    this.getSendButton = () => {
        return sendButton;
    };

    this.clickSendButton = async () => {
        await sendButton.getLocation().then(function(location) {
            return browser.executeScript('window.scrollTo(' + location.x + ', ' + location.y + ');');
        });
        await sendButton.click();
    };

    this.getFieldRequiredMessageForFirstName = async () => {
        await fieldRequiredMessageForFirstName.getLocation().then(function(location) {
            return browser.executeScript('window.scrollTo(' + location.x + ', ' + location.y + ');');
        });
        return fieldRequiredMessageForFirstName.isDisplayed();
    };

    this.getFieldRequiredMessageForLastName = async () => {
        await fieldRequiredMessageForLastName.getLocation().then(function(location) {
            return browser.executeScript('window.scrollTo(' + location.x + ', ' + location.y + ');');
        });
        return fieldRequiredMessageForLastName.isDisplayed();
    };

    this.getFieldRequiredMessageForEmail = async () => {
        await fieldRequiredMessageForEmail.getLocation().then(function(location) {
            return browser.executeScript('window.scrollTo(' + location.x + ', ' + location.y + ');');
        });
        return fieldRequiredMessageForEmail.isDisplayed();
    };

    this.getFieldRequiredMessageForMessage = async () => {
        await fieldRequiredMessageForMessage.getLocation().then(function(location) {
            return browser.executeScript('window.scrollTo(' + location.x + ', ' + location.y + ');');
        });
        return fieldRequiredMessageForMessage.isDisplayed();
    };

    this.getFieldRequiredMessageForPolicy = async () => {
        await fieldRequiredMessageForPolicy.getLocation().then(function(location) {
            return browser.executeScript('window.scrollTo(' + location.x + ', ' + location.y + ');');
        });
        return fieldRequiredMessageForPolicy.isDisplayed();
    };

    this.getErrorIconForFirstName = async () => {
        await errorIconForFirstName.getLocation().then(function(location) {
            return browser.executeScript('window.scrollTo(' + location.x + ', ' + location.y + ');');
        });
        return errorIconForFirstName.isDisplayed();
    };

    this.getErrorIconForLastName = async () => {
        await errorIconForLastName.getLocation().then(function(location) {
            return browser.executeScript('window.scrollTo(' + location.x + ', ' + location.y + ');');
        });
        return errorIconForLastName.isDisplayed();
    };

    this.getErrorIconForEmail = async () => {
        await errorIconForEmail.getLocation().then(function(location) {
            return browser.executeScript('window.scrollTo(' + location.x + ', ' + location.y + ');');
        });
        return errorIconForEmail.isDisplayed();
    };

};

module.exports = new Homepage();