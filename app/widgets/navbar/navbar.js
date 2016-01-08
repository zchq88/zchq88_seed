/**
 * @file navbar
 * @author zchq88
 */
import './navbar.styl';
import navbar from './navbar.ctrl.js'

navbar.directive('navbar', function () {
    return {
        restrict: 'AE',
        templateUrl: '/widgets/navbar/navbar.html'
    };
});

export default navbar;