var homePage = require('../pages/HomePage');
const expect = require('chai').expect;
var namee;
const { Given, When, Then } = require('cucumber');

Given('you are on the homepage', async function(){
    await homePage.get();
});

When('you enter {string} in the textfield', async function(name){
    namee = name;
    await homePage.setName(name);
});

Then('the correct greeting should appear', async function(){
    expect(await homePage.getGreetingText()).equal('Hello ' + namee +'!');
});