var HomePage = function () {

    var nameInput = element(by.model('yourName'));
    var greeting = element(by.binding('yourName'));

    this.get = async function(){
        await browser.get('http://www.angularjs.org');
    }

    this.setName = async function (name) {
        await nameInput.sendKeys(name);
    };

    this.getGreetingText = async function () {
        return await greeting.getText();
    };

};
module.exports = new HomePage();