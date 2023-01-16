const BaseForm = require('../../framework/baseForm/baseForm');
const InputField = require('../../framework/elements/input');
const Button = require('../../framework/elements/links');


class LoginPage extends BaseForm {
    
    constructor() {
        super(new Button('//button[contains(text(), "Login")]', 'Login page unique element'), 'Login page')
    }    

    get loginDataInput() {
        return new InputField('//input[@placeholder="Your Email"]', 'Login input field');
    }

    get passwordDataInput() {
        return new InputField('//input[@placeholder="Your Password"]', 'Password input field');
    }

    get logInButton() {
        return new Button('//button[contains(text(), "Login")]', 'Login button');
    }

    async isEmailFieldPresent() {
        return this.loginDataInput.isElementPresent();
    }

    async isPasswordFieldPresent() {
        return this.passwordDataInput.isElementPresent();
    }

    async sendLoginData(login) {
        return this.loginDataInput.sendData(login); 
    }

    async sendPasswordData(password) {
        return this.passwordDataInput.sendData(password); 
    }

    async clicklogInButton() {
        return this.logInButton.click();
    }
}

module.exports = new LoginPage();