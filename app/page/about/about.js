/**
 * @file about.js
 * @author zchq88
 */

import './about.styl';
import navbar from '../../widgets/navbar/navbar';

let aboutModule = angular.module('about', [
        'ui.router',
        navbar.name
    ])
    .config((stateProvider) => {
        stateProvider
            .state('about', {
                url: '/about',
                views: {
                    app: {
                        templateUrl: 'page/about/about.html'
                    }
                }
            });
    });

export default aboutModule;
