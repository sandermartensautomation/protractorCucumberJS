const BasePage = require('./BasePage');

class HomePage extends BasePage {
    
    get elements(){
        return {
            nameInput: element(by.model('yourName')),
            greeting: element(by.binding('yourName'))
        }
    }

    async setName (name) {
        await this.elements.nameInput.sendKeys(name);
    };

    async getGreetingText () {
        return await this.elements.greeting.getText();
    };

} module.exports = HomePage;