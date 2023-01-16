const BaseForm = require('../../framework/baseForm/baseForm');
const Label = require('../../framework/elements/label');


class ProfilePage extends BaseForm {

    constructor() {
        super(new Label('//*[contains(text(), "Welcome")]', 'Profile page unique element'), 'Profile page')
    }

    
}

module.exports = new ProfilePage();