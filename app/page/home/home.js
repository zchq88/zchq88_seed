/**
 * @file home.js
 * @author zchq88
 */

import './home.styl';

let homeModule = angular.module('home', [
        'ui.router'
    ])
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'app': {
                        templateUrl: 'page/home/home.html'
                    }
                }
            });
    })

export default homeModule;
