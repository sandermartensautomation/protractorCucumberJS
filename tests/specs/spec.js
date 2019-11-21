const HomePage = require('../pages/HomePage');                          // const homePage = require('../pages/HomePage').prototype;
const homePage = new HomePage();
const expect = require('chai').expect;
const { Given, When, Then } = require('cucumber');


Given('you are on the homepage', async function(){
    await homePage.open();
    
});

When('you enter {string} in the textfield', async function(name){
    namee = name;
    await homePage.setName(name);
});

Then('{string} should appear', async function(greeting){
    expect(await homePage.getGreetingText()).equal(greeting);
});