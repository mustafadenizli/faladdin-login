const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/LoginPage');

Given(/^user on login page$/, async () => {
    await LoginPage.getLoginPage()
});
When(/^user taps to Google Button: "([^"]*)" on login page$/, async (text) => {
    await LoginPage.clickGoogleButton(text)
});
Then(/^user should see kvkk text title: "([^"]*)"$/, async (text) => {
    await LoginPage.checkKvkkTitle(text)
});
When(/^user taps to Anladım button$/, async () => {
    await LoginPage.clickOkeyButton()
});
Then(/^user should see account select screen page title: "([^"]*)"$/, async (text) => {
    await LoginPage.checkSelectScreenPageTitle(text)
});
When(/^user select account$/, async () => {
    await LoginPage.clickSelectAccount()
});
Then(/^user should see success screen: "([^"]*)"$/, async (text) => {
    await LoginPage.checkSuccessScreenText(text)
});
When(/^user taps to close icon$/, async () => {
    await LoginPage.clickCloseIcon()
});
Then(/^user should see home page image view header$/, async () => {
    await LoginPage.checkImageViewHeader()
});
When(/^user taps to login icon$/, async () => {
    await LoginPage.clickLoginIcon()
});
Then(/^user should see profil page title: "([^"]*)"$/, async (text) => {
    await LoginPage.checkProfilPageTitle(text)
});
When(/^user taps to settings icon$/, async () => {
    await LoginPage.clickSettingsIcon()
});
Then(/^user should see settings language text: "([^"]*)"$/, async (text) => {
    await LoginPage.checkSettingsLanguageName(text)
});
When(/^user taps to delete account button$/, async () => {
    await LoginPage.clickDeleteAccountButton()
});
Then(/^user should see confirmation screen page title: "([^"]*)"$/, async (text) => {
    await LoginPage.checkConfirmationScreenPageTitle(text)
});
When(/^user taps to yes delete button$/, async () => {
    await LoginPage.clickConfirmYesButton()
});
Then(/^user should see faladdin promotional screen image$/, async () => {
    await LoginPage.checkScreenImage()
});




















