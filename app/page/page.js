/**
 * @file 页面入口
 * @author zchq88
 */
import Home from './home/home';
import About from './about/about';

let page = angular.module('app.page', [
    Home.name,
    About.name
]);
export default page;
