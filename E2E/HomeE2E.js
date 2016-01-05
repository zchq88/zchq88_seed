'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('HomeE2E', function() {
    this.timeout(15000);
    beforeEach(function() {
        browser.get('/');
    });

    it('测试LINKS', function() {
        var todoList = element.all(by.repeater('x in links'));
        expect(todoList.get(1).getText()).to.eventually.equal('about');
        expect(todoList.get(0).getText()).to.eventually.equal('home');
    });

    it('测试输入框', function() {
        var HomeInput = element(by.model('HomeInput'));
        var Hometext = element(by.id('Hometext'));
        HomeInput.sendKeys('nexus');
        expect(Hometext.getText()).to.eventually.equal('nexus');
        HomeInput.clear();
    });
});

