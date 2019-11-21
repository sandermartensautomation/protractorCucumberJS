class BasePage {

    async open(){
        await browser.get('http://www.angularjs.org');
    }

} module.exports = BasePage;