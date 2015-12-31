/**
 * @file about.js
 * @author zchq88
 */

import './about.styl';

let aboutModule = angular.module('about', [
        'ui.router'
    ])
    .config(($stateProvider) => {
        'ngInject';
        $stateProvider
            .state('about', {
                url: '/about',
                views: {
                    'app': {
                        templateUrl: 'page/about/about.html'
                    }
                }
            });
    })

export default aboutModule;
