const BaseForm = require('../../framework/baseForm/baseForm');
const Label = require('../../framework/elements/label');
const Button = require('../../framework/elements/button');


class MainPage extends BaseForm {
  
    constructor() {
        super(new Label("//h1[contains(text(), 'Test home page')]", "Main Page unique element"), "Main Page")
    }  

    get signupButton() {
        return new Button('//a[contains(text(), "Sign Up")]', 'Sign up button');
    }

    async goToSignUpPage() {
        await this.signupButton.click();
    }

    get loginButton() {
        return new Button('//a[contains(text(), "Login")]', 'Login button')
    }

    async goToLoginPage() {
        await this.loginButton.click();

    }
 }

 module.exports = new MainPage();
