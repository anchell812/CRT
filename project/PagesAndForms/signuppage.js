const BaseForm = require('../../framework/baseForm/baseForm');
const Label = require('../../framework/elements/label');
const Button = require('../../framework/elements/links');
const InputField = require('../../framework/elements/input');


class SignUpPage extends BaseForm {
    
    constructor() {
        super(new Label('//button[contains(text(), "Sign Up")]', 'Sign up page unique element'), 'Sign up page')
    }    

    get loginDataInput() {
        return new InputField('//input[@placeholder="Email"]', 'Login input field');
    }

    get passwordDataInput() {
        return new InputField('//input[@placeholder="Password"]', 'Password input field');
    }

    get signUpButton() {
        return new Button('//button[contains(text(), "Sign Up")]', 'Sign up button');
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

    async clickSignUpButton() {
        return this.signUpButton.click();
    }

    get errorLabelIFAlreadyRegistered() {
        return new Label('//*[contains(text(), "Email address already exists")]', "Email address already exists");
    }

    async isErrorExists() {
        return this.errorLabelIFAlreadyRegistered.isElementPresent();
    }
 }

module.exports = new SignUpPage();