/**
 * @file navbar
 * @author zchq88
 */
import './navbar.styl';

let navbar = angular.module('navbar', []);
navbar.controller('navbarCtrl', ['$scope', function ($scope) {
    $scope.links = ['home', 'about'];
}]);

navbar.directive('navbar', function () {
    return {
        restrict: 'AE',
        templateUrl: '/widgets/navbar/navbar.html'
    };
});
export default navbar;
