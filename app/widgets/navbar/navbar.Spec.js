/**
 * @file 测试navbar
 * @author zchq88
 */
import navbar from './navbar';

describe('navbar', function () {
    let scope;
    beforeEach(angular.mock.module('navbar'));
    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        $controller('navbarCtrl', {$scope: scope});
    }));
    it('Controller测试', function () {
        expect(scope).to.have.property('links').with.length(2);
    });
});