/**
 * @file home.js
 * @author zchq88
 */

import './home.styl';
import navbar from '../../widgets/navbar/navbar';

let homeModule = angular.module('home', [
        'ui.router',
        navbar.name
    ])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    app: {
                        templateUrl: 'page/home/home.html'
                    }
                }
            });
    });

export default homeModule;
