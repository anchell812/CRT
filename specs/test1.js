const {assert} = require('chai');
const mainPage = require('../project/PagesAndForms/mainpage');
const config = require('../configData/config.json');
const signUpPage = require('../project/PagesAndForms/signuppage');
const loginPage = require('../project/PagesAndForms/loginpage');
const data = require('../testData/data.json');
const profilePage = require('../project/PagesAndForms/profilepage');




describe('Sign up and sign in testing', () => {
    it('Sign up', async () => {
        await browser.open(config.url);
        assert.isTrue(await mainPage.isPageOpened(), 'Main page should be opened');
        await mainPage.goToSignUpPage();
        assert.isTrue(await signUpPage.isPageOpened(), 'Sign page should be opened');
        assert.isTrue(await signUpPage.isEmailFieldPresent(), 'Email placeholder should be persent');
        assert.isTrue(await signUpPage.isPasswordFieldPresent(), 'Password placeholder should be present');
        await signUpPage.sendLoginData(data.login);
        await signUpPage.sendPasswordData(data.password);
        await signUpPage.clickSignUpButton();
        await browser.pause(10000);
        assert.isTrue(await loginPage.isPageOpened(), 'Login page should be opened');
        
    });

    it('Sign in', async () => {
        await browser.open(config.url);
        assert.isTrue(await mainPage.isPageOpened(), 'Main page should be opened');
        await mainPage.goToLoginPage();
        assert.isTrue(await loginPage.isPageOpened(), 'Sign page should be opened');
        assert.isTrue(await loginPage.isEmailFieldPresent(), 'Email placeholder should be persent');
        assert.isTrue(await loginPage.isPasswordFieldPresent(), 'Password placeholder should be present');
        await loginPage.sendLoginData(data.login);
        await loginPage.sendPasswordData(data.password);
        await loginPage.clicklogInButton();
        assert.isTrue(await profilePage.isPageOpened(), 'Profile page should be opened')

    });

    it('Check error if user has already registered', async () => {
        await browser.open(config.url);
        assert.isTrue(await mainPage.isPageOpened(), 'Main page should be opened');
        await mainPage.goToSignUpPage();
        assert.isTrue(await signUpPage.isPageOpened(), 'Sign page should be opened');
        await signUpPage.sendLoginData(data.login);
        await signUpPage.sendPasswordData(data.password);
        await signUpPage.clickSignUpButton();
        assert.isTrue(await signUpPage.isErrorExists(), 'Error should exist');
    });
})
