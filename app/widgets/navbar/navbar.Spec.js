/**
 * @file 测试navbar
 * @author zchq88
 */
import angular from 'angular';
import mocks from 'angular-mocks';
import navbar from './navbar';

describe('navbar', function () {
    let scope;
    beforeEach(angular.mock.module('navbar'));
    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('navbarCtrl', {$scope: scope});
    }));
    it('Controller', function () {
        expect(scope).to.have.property('links').with.length(2);
    });
});