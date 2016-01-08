/**
 * @file navbar控制器
 * @author zchq88
 */

let navbar = angular.module('navbar', []);
navbar.controller('navbarCtrl', ['$scope', function ($scope) {
    $scope.links = ['home', 'about'];
}]);

module.exports = navbar;
//export default navbar;//ES6单元测试试有问题所以改用了module.exports = navbar;写法
